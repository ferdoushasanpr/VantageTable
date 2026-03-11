"use client";

import { Edit2 } from "lucide-react";
import React, { useState } from "react";

export default function EditButton(): React.ReactNode {
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState("pending");

  return (
    <div className="flex gap-2">
      {showStatus && (
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 bg-[#231F16] border border-[#332D21] rounded-lg text-light hover:border-primary transition-all"
        >
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
          <option value="arrived">Arrived</option>
        </select>
      )}
      <button
        onMouseEnter={() => setShowStatus(!showStatus)}
        className="p-2 bg-[#231F16] border border-[#332D21] rounded-lg text-light hover:text-primary hover:border-primary transition-all"
      >
        <Edit2 size={16} />
      </button>
    </div>
  );
}
