"use client";

import { deleteMenu } from "@/actions/menu";
import { deleteReservation } from "@/actions/reserve";
import { Trash2 } from "lucide-react";
import React from "react";

export default function DeleteButton({
  id,
  item,
}: {
  id: number;
  item: string;
}): React.ReactNode {
  const handleDelete = async () => {
    if (item === "reservation") {
      await deleteReservation(id);
    } else if (item === "menu") {
      await deleteMenu(id);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="p-2 bg-[#231F16] border border-[#332D21] rounded-lg text-light hover:text-red-500 hover:border-red-500 transition-all"
    >
      <Trash2 size={16} />
    </button>
  );
}
