import React from "react";

interface CheckboxProps {
  label: string;
}

export default function Checkbox({ label }: CheckboxProps): React.ReactNode {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="w-6 h-6 rounded-full border-2 border-[#332D21] flex items-center justify-center group-hover:border-[#F5A623] transition-colors">
        <div className="w-3 h-3 rounded-full bg-transparent group-active:bg-[#F5A623]" />
      </div>
      <span className="text-sm text-[#8E8370] group-hover:text-white transition-colors">
        {label}
      </span>
    </label>
  );
}
