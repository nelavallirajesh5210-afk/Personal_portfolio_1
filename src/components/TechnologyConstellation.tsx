import React, { useState } from 'react';
import {
  Terminal,
  Code,
  Cpu,
  FileCode,
  Layout,
  Palette,
  GitBranch,
  Github,
  MessageSquareCode,
  BrainCircuit,
  Sparkles,
  Info,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ConstellationNode {
  id: string;
  name: string;
  category: 'Core' | 'Web' | 'Tools' | 'AI';
  icon: React.ReactNode;
  level: string;
  description: string;
  angle: number; // Angle around center circle in degrees
  distance: number; // Distance in pixels from center
}

export const TechnologyConstellation: React.FC = () => {
  const [activeNode, setActiveNode] = useState<ConstellationNode | null>(null);

  const nodes: ConstellationNode[] = [
    {
      id: 'python',
      name: 'PYTHON',
      category: 'Core',
      icon: <Terminal className="w-4 h-4" />,
      level: 'Core Language',
      description: 'Scripting, algorithmic logic, data processing, and foundational AI modeling.',
      angle: 270, // Top
      distance: 180,
    },
    {
      id: 'ai-ml',
      name: 'AI / ML FUNDAMENTALS',
      category: 'AI',
      icon: <BrainCircuit className="w-4 h-4" />,
      level: 'Exploratory Study',
      description: 'Supervised & unsupervised patterns, neural basics, and emerging trends.',
      angle: 310,
      distance: 220,
    },
    {
      id: 'prompt-eng',
      name: 'PROMPT ENGINEERING',
      category: 'AI',
      icon: <MessageSquareCode className="w-4 h-4" />,
      level: 'Active Practice',
      description: 'Structured context architectures, system instruction tuning, and few-shot workflows.',
      angle: 350,
      distance: 175,
    },
    {
      id: 'c',
      name: 'C',
      category: 'Core',
      icon: <Code className="w-4 h-4" />,
      level: 'Systems & Problem Solving',
      description: 'Memory structures, pointer manipulation, and foundational algorithms.',
      angle: 30,
      distance: 220,
    },
    {
      id: 'java',
      name: 'JAVA',
      category: 'Core',
      icon: <Cpu className="w-4 h-4" />,
      level: 'Object-Oriented',
      description: 'Class hierarchies, inheritance, and modular software engineering principles.',
      angle: 75,
      distance: 180,
    },
    {
      id: 'javascript',
      name: 'JAVASCRIPT',
      category: 'Web',
      icon: <FileCode className="w-4 h-4" />,
      level: 'Modern Scripting',
      description: 'ES6+ standards, asynchronous events, and dynamic DOM interaction.',
      angle: 120,
      distance: 215,
    },
    {
      id: 'html',
      name: 'HTML',
      category: 'Web',
      icon: <Layout className="w-4 h-4" />,
      level: 'Semantic Structure',
      description: 'Semantic document tree, web accessibility principles, and clean markup.',
      angle: 160,
      distance: 170,
    },
    {
      id: 'css',
      name: 'CSS',
      category: 'Web',
      icon: <Palette className="w-4 h-4" />,
      level: 'Modern Styling',
      description: 'Flexbox, Grid systems, responsive styling, and modern UI tokens.',
      angle: 195,
      distance: 220,
    },
    {
      id: 'git',
      name: 'GIT',
      category: 'Tools',
      icon: <GitBranch className="w-4 h-4" />,
      level: 'Version Control',
      description: 'Branch management, staging workflows, and commit history integrity.',
      angle: 230,
      distance: 180,
    },
    {
      id: 'github',
      name: 'GITHUB',
      category: 'Tools',
      icon: <Github className="w-4 h-4" />,
      level: 'Collaboration',
      description: 'Remote repositories, pull requests, project tracking, and open collaboration.',
      angle: 250,
      distance: 235,
    },
  ];

  return (
    <div className="relative w-full rounded-2xl bg-[#0D0F17] border border-white/[0.08] p-6 sm:p-10 overflow-hidden">
      {/* Background Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[300px] h-[300px] rounded-full border border-dashed border-white/[0.08] animate-spin-slow" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-white/[0.05]" />
        <div className="absolute w-[560px] h-[560px] rounded-full border border-dashed border-sky-500/[0.07]" />
      </div>

      {/* Header description */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.06]">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-sky-400 uppercase mb-1">
            CONSTELLATION MAP
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            INTERACTIVE TECHNICAL UNIVERSE
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Info className="w-4 h-4 text-sky-400" />
          <span>HOVER OR TAP A NODE TO INSPECT FOCUS</span>
        </div>
      </div>

      {/* Constellation Canvas / Visual Layout for Desktop */}
      <div className="relative z-10 my-10 hidden md:flex items-center justify-center min-h-[540px]">
        {/* Center Star / Nucleus */}
        <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-gradient-to-b from-[#181B26] to-[#0E1018] border border-sky-500/30 shadow-[0_0_50px_rgba(56,189,248,0.15)] text-center p-4">
          <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping absolute -top-1" />
          <Sparkles className="w-5 h-5 text-sky-400 mb-1" />
          <span className="font-display font-black text-xs tracking-wider text-white">
            SPOORTHY'S
          </span>
          <span className="font-mono text-[11px] tracking-widest text-sky-300">
            TOOLKIT
          </span>
          <span className="text-[9px] font-mono text-slate-400 mt-1">
            2025–2029
          </span>
        </div>

        {/* Orbiting Nodes mapped through polar coordinates */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = Math.cos(rad) * node.distance;
          const y = Math.sin(rad) * node.distance;
          const isSelected = activeNode?.id === node.id;

          return (
            <motion.div
              key={node.id}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              whileHover={{ scale: 1.08 }}
              className="absolute z-20 cursor-pointer"
              onMouseEnter={() => setActiveNode(node)}
              onClick={() => setActiveNode(node)}
            >
              {/* Node Button */}
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] text-white'
                    : 'bg-[#121520]/80 border-white/[0.08] hover:border-white/30 text-slate-300 hover:text-white'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg ${
                    isSelected ? 'bg-sky-500 text-black' : 'bg-white/[0.06] text-sky-400'
                  }`}
                >
                  {node.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-xs font-bold tracking-wider">
                    {node.name}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 uppercase">
                    {node.category}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile-Friendly Grid View (Responsive alternative to polar map) */}
      <div className="md:hidden relative z-10 my-6 grid grid-cols-2 gap-3">
        {nodes.map((node) => {
          const isSelected = activeNode?.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                isSelected
                  ? 'bg-sky-500/10 border-sky-400 text-white'
                  : 'bg-[#121520] border-white/[0.08] text-slate-300'
              }`}
            >
              <div className="p-1.5 rounded bg-white/[0.05] text-sky-400 shrink-0 mt-0.5">
                {node.icon}
              </div>
              <div>
                <div className="font-mono text-xs font-bold leading-tight">
                  {node.name}
                </div>
                <div className="font-mono text-[10px] text-slate-400">
                  {node.level}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className="relative z-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {activeNode ? (
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-widest">
                FOCUS // {activeNode.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/[0.06] text-slate-300 font-mono">
                {activeNode.level}
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl">
              {activeNode.description}
            </p>
          </div>
        ) : (
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Hover or select any node above to inspect practical application context.</span>
          </div>
        )}

        <div className="font-mono text-[11px] text-slate-400 shrink-0">
          NODE COUNT: 10
        </div>
      </div>
    </div>
  );
};
