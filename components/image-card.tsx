import { RefreshCw, Trash2 } from "lucide-react";
import React from "react";

interface ImageCardProps {
  id: string;
  url: string;
  label: string;
}

export default function ImageCard({
  id,
  url,
  label,
}: ImageCardProps): React.ReactNode {
  return (
    <div
      key={id}
      className="bg-[#231F16] p-4 rounded-2xl border border-[#332D21] flex gap-4 group"
    >
      <div className="relative w-24 h-32 shrink-0 overflow-hidden rounded-xl border border-[#2A2419]">
        <img
          src={url}
          alt={label}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col justify-between py-1 flex-1">
        <div>
          <p className="text-white font-bold text-sm mb-1">{label}</p>
          <p className="text-[10px] text-[#8E8370] uppercase tracking-wider">
            Vertical Aspect (9:16)
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-[#1A160F] text-[#F5A623] text-xs font-bold py-2 rounded-lg border border-[#332D21] hover:bg-[#F5A623] hover:text-black transition-all flex items-center justify-center gap-1">
            <RefreshCw size={12} /> Replace
          </button>
          <button className="p-2 bg-[#1A160F] text-red-500 rounded-lg border border-[#332D21] hover:bg-red-500/10 transition-all">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
