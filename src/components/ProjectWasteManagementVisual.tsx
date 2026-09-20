import React from 'react';

export const ProjectWasteManagementVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] rounded-2xl bg-gradient-to-br from-[#121520] via-[#0E1019] to-[#0A0C12] border border-white/[0.08] overflow-hidden flex items-center justify-center p-6 sm:p-10 group">
      {/* Subtle Background architectural grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

      {/* Abstract Community & Sensor Schematic SVG */}
      <svg
        viewBox="0 0 500 360"
        className="w-full h-full max-w-[460px] max-h-[320px] relative z-10 select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground grid plane isometric lines */}
        <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1">
          <line x1="50" y1="280" x2="450" y2="280" />
          <line x1="80" y1="240" x2="420" y2="240" strokeDasharray="4 4" />
          <line x1="120" y1="200" x2="380" y2="200" strokeDasharray="2 4" />
          <line x1="100" y1="300" x2="250" y2="180" />
          <line x1="400" y1="300" x2="250" y2="180" />
          <line x1="250" y1="320" x2="250" y2="180" />
        </g>

        {/* Central Waste-Management Hub Cube / Architectural Node */}
        <g className="transition-transform duration-500 group-hover:scale-105" transform="translate(180, 100)">
          {/* Isometric Box Top */}
          <polygon
            points="70,10 130,40 70,70 10,40"
            fill="#1E2333"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />
          {/* Isometric Box Left */}
          <polygon
            points="10,40 70,70 70,140 10,110"
            fill="#141824"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />
          {/* Isometric Box Right */}
          <polygon
            points="70,70 130,40 130,110 70,140"
            fill="#0F121C"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />

          {/* Internal Glowing Core */}
          <circle cx="70" cy="85" r="14" fill="#34D399" fillOpacity="0.25" />
          <circle cx="70" cy="85" r="6" fill="#34D399" />
          <circle cx="70" cy="85" r="22" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        </g>

        {/* Satellite Sensor Pods / Disposal Nodes in the Village Grid */}
        {/* Node 1: Left */}
        <g transform="translate(60, 180)">
          <circle cx="30" cy="30" r="18" fill="#131622" stroke="#818CF8" strokeWidth="1.2" />
          <circle cx="30" cy="30" r="4" fill="#818CF8" />
          <path d="M30 12 L30 6" stroke="#818CF8" strokeWidth="1.5" />
          <line x1="48" y1="30" x2="190" y2="170" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="30" y="60" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace">BIN SENSOR 01</text>
        </g>

        {/* Node 2: Right */}
        <g transform="translate(360, 170)">
          <circle cx="30" cy="30" r="18" fill="#131622" stroke="#34D399" strokeWidth="1.2" />
          <circle cx="30" cy="30" r="4" fill="#34D399" />
          <path d="M30 12 L30 6" stroke="#34D399" strokeWidth="1.5" />
          <line x1="12" y1="30" x2="-50" y2="10" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="30" y="60" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace">ORGANIC ZONE</text>
        </g>

        {/* Node 3: Center Bottom (Civic Point) */}
        <g transform="translate(220, 240)">
          <rect x="10" y="10" width="40" height="20" rx="4" fill="#151926" stroke="#38BDF8" strokeWidth="1" />
          <text x="30" y="24" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace">CIVIC LOG</text>
          <line x1="30" y1="10" x2="30" y2="-40" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />
        </g>

        {/* Signal waves propagating */}
        <path d="M220 80 Q250 55 280 80" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
        <path d="M210 70 Q250 40 290 70" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

        {/* Technical Data Tags */}
        <g transform="translate(20, 30)">
          <rect x="0" y="0" width="130" height="26" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="10" y="17" fill="#E2E8F0" fontSize="9" fontFamily="monospace">SMART_VILLAGE // v1.0</text>
        </g>

        <g transform="translate(340, 30)">
          <rect x="0" y="0" width="140" height="26" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="10" y="17" fill="#34D399" fontSize="9" fontFamily="monospace">WASTE_CYCLE: MONITORED</text>
        </g>
      </svg>

      {/* Subtle bottom badge */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>FIELD STUDY · SANITATION FRAMEWORK</span>
        <span className="text-emerald-400">COMMUNITY ACADEMIC INITIATIVE</span>
      </div>
    </div>
  );
};
