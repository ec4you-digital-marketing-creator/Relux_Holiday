import React from "react";

export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 350 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto filter drop-shadow-sm"
      >
        {/* Umbrella top (colorful segments) */}
        <path d="M110 50 C110 20, 170 20, 170 50 Z" fill="#8cc63f" /> {/* Green */}
        <path d="M125 45 C135 25, 170 20, 170 50 Z" fill="#ef4444" /> {/* Red */}
        <path d="M140 42 C150 22, 170 20, 170 50 Z" fill="#fbb03b" /> {/* Yellow */}
        <path d="M155 41 C162 21, 170 20, 170 50 Z" fill="#0054a6" /> {/* Blue */}
        
        {/* Umbrella Tip */}
        <circle cx="140" cy="18" r="4" fill="#8cc63f" />
        <path d="M140 18 L140 22" stroke="#8cc63f" strokeWidth="2" />

        {/* Umbrella Pole / Letter 'l' (Red chair-like frame) */}
        <path
          d="M140 22 L140 105 C140 115, 150 120, 160 120 L165 120"
          stroke="#ef4444"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small Sitting Human under umbrella */}
        <circle cx="152" cy="100" r="5" fill="#374151" /> {/* Head */}
        <path
          d="M152 105 C152 110, 157 113, 162 113 C167 113, 172 118, 172 120"
          stroke="#374151"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Letter 'R' (Lime Green, stylized cursive brush) */}
        <path
          d="M35 150 C35 70, 75 70, 75 100 C75 115, 60 125, 45 125 L40 125 M48 125 L65 155"
          stroke="#8cc63f"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter 'e' (Yellow, script) */}
        <path
          d="M75 135 C75 125, 95 125, 95 135 C95 145, 80 148, 75 145 C70 142, 75 135, 85 135"
          stroke="#fbb03b"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter 'u' (Blue, script) */}
        <path
          d="M172 135 L172 145 C172 152, 185 152, 185 145 L185 135 M185 142 C185 148, 192 150, 196 150"
          stroke="#0054a6"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Palm Trees (forming letter 'x') */}
        {/* Palm Tree 1 (Left tilt, brown trunk) */}
        <path
          d="M230 150 Q215 110 185 95"
          stroke="#c27d38"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Palm Leaves 1 (Green) */}
        <path d="M185 95 Q180 85 170 90 M185 95 Q185 80 195 85 M185 95 Q175 95 170 102 M185 95 Q195 95 198 102" stroke="#8cc63f" strokeWidth="3" strokeLinecap="round" />
        <circle cx="185" cy="95" r="3" fill="#ef4444" /> {/* Coconuts */}
        <circle cx="190" cy="97" r="2.5" fill="#ef4444" />

        {/* Palm Tree 2 (Right tilt, brown trunk, crossing to form X) */}
        <path
          d="M200 150 Q215 110 245 95"
          stroke="#c27d38"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Palm Leaves 2 (Green) */}
        <path d="M245 95 Q240 85 230 90 M245 95 Q245 80 255 85 M245 95 Q235 95 230 102 M245 95 Q255 95 258 102" stroke="#8cc63f" strokeWidth="3" strokeLinecap="round" />
        <circle cx="245" cy="95" r="3" fill="#ef4444" /> {/* Coconuts */}
        <circle cx="240" cy="97" r="2.5" fill="#ef4444" />

        {/* "Holidays" Text (Red, signature-like elegant font) */}
        <text
          x="145"
          y="180"
          fill="#ef4444"
          fontSize="36"
          fontWeight="bold"
          fontStyle="italic"
          fontFamily="Brush Script MT, cursive, sans-serif"
          letterSpacing="1px"
        >
          Holidays
        </text>
      </svg>
      {/* Brand Name Text for side styling if needed */}
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-wide text-slate-900 uppercase leading-none">
          Relux
        </span>
        <span className="text-xs font-semibold tracking-widest text-brand-green uppercase leading-none mt-0.5">
          Holidays
        </span>
      </div>
    </div>
  );
}
