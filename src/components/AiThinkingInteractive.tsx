import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Terminal, Activity } from 'lucide-react';

interface SynapticNode {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  label?: string;
  activeAlpha: number;
  radius: number;
  accent: string;
}

export const AiThinkingInteractive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeWord, setActiveWord] = useState<string>('INTELLIGENCE');
  const [synapseCount, setSynapseCount] = useState<number>(0);

  const keywords = ['AI', 'DATA', 'CODE', 'BUILD', 'LEARN', 'CREATE'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 500);
    let height = (canvas.height = canvas.offsetHeight || 320);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 500;
      height = canvas.height = canvas.offsetHeight || 320;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, isOver: false, speed: 0 };
    let lastMouseX = mouse.x;
    let lastMouseY = mouse.y;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      const dx = newX - lastMouseX;
      const dy = newY - lastMouseY;
      mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 15);
      lastMouseX = mouse.x = newX;
      lastMouseY = mouse.y = newY;
      mouse.isOver = true;

      // Randomly highlight keywords as user interacts
      if (Math.random() > 0.85) {
        const rand = keywords[Math.floor(Math.random() * keywords.length)];
        setActiveWord(rand);
      }
    };

    const onMouseLeave = () => {
      mouse.isOver = false;
    };

    const targetEl = containerRef.current;
    if (targetEl) {
      targetEl.addEventListener('mousemove', onMouseMove);
      targetEl.addEventListener('mouseleave', onMouseLeave);
    }

    // Initialize nodes
    const nodes: SynapticNode[] = [];
    const nodeCount = 18;
    const palette = ['#38BDF8', '#818CF8', '#A78BFA', '#60A5FA', '#34D399'];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        targetX: x,
        targetY: y,
        label: i < keywords.length ? keywords[i] : undefined,
        activeAlpha: 0.2,
        radius: i < keywords.length ? 3.5 : 2,
        accent: palette[i % palette.length],
      });
    }

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      let activeSynapses = 0;

      // Update positions with subtle floating
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += Math.sin((frame + i * 40) * 0.02) * 0.4;
        n.y += Math.cos((frame + i * 30) * 0.02) * 0.4;

        if (mouse.isOver) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            n.activeAlpha = Math.min(n.activeAlpha + 0.04, 0.95);
            // subtle gravitational pull
            n.x += (dx / dist) * 0.4;
            n.y += (dy / dist) * 0.4;
          } else {
            n.activeAlpha = Math.max(n.activeAlpha - 0.015, 0.2);
          }
        } else {
          n.activeAlpha = Math.max(n.activeAlpha - 0.01, 0.2);
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            activeSynapses++;
            const alpha = (1 - dist / 110) * Math.max(n1.activeAlpha, n2.activeAlpha) * 0.6;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Cursor connection lines
      if (mouse.isOver) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.4 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw cursor target reticle
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14 + Math.sin(frame * 0.1) * 3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw nodes & keyword badges
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.accent;
        ctx.shadowColor = n.accent;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label if present
        if (n.label) {
          ctx.font = '10px "Space Grotesk", monospace';
          ctx.fillStyle = n.activeAlpha > 0.4 ? '#FFFFFF' : 'rgba(148, 163, 184, 0.6)';
          ctx.fillText(n.label, n.x + 8, n.y + 3);
        }
      }

      if (frame % 10 === 0) {
        setSynapseCount(activeSynapses);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (targetEl) {
        targetEl.removeEventListener('mousemove', onMouseMove);
        targetEl.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl bg-gradient-to-b from-[#12151E] to-[#0D0F16] border border-white/[0.08] p-6 sm:p-8 overflow-hidden shadow-2xl group transition-all duration-300 hover:border-sky-500/30"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Console Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-slate-300 uppercase">
            AI THINKING MATRIX
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            <span>SYNAPSES: {synapseCount}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>SIGNAL: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Canvas Stage */}
      <div className="relative z-10 my-4 h-[240px] sm:h-[280px] w-full rounded-xl overflow-hidden cursor-crosshair">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Floating live keyword badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/60 border border-white/[0.1] backdrop-blur-md flex items-center gap-2 pointer-events-none">
          <Sparkles className="w-3 h-3 text-sky-400" />
          <span className="font-mono text-[11px] text-slate-300">
            FOCUS:{' '}
            <span className="text-white font-bold tracking-wider">
              {activeWord}
            </span>
          </span>
        </div>

        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400 pointer-events-none hidden sm:block">
          HOVER & MOVE TO PROBE SYNAPSE PATHWAYS
        </div>
      </div>

      {/* Bottom Keyword Strip */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-2">
          {keywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setActiveWord(kw)}
              className={`px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider transition-all ${
                activeWord === kw
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              {kw}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-slate-400 font-mono">
          DIGITAL COGNITION EXPERIMENT
        </span>
      </div>
    </div>
  );
};
