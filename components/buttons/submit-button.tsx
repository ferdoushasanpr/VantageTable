"use client";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitButton(): React.ReactNode {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full mt-4 bg-primary hover:bg-[#e6a22b] text-[#1a1612] font-bold py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(250,177,49,0.3)] active:scale-[0.98]"
    >
      {!pending ? (
        "Confirm Reservation"
      ) : (
        <span className="flex items-center justify-center gap-2">
          <Loader className="h-5 w-5 animate-spin" />
          <span>Processing...</span>
        </span>
      )}
    </button>
  );
}
