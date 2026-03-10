"use client";

import React from "react";
import { Frown } from "lucide-react";

export default function ErrorPage(): React.ReactNode {
  return (
    <section className="max-h-screen bg-[#231D10] p-4 md:py-42">
      <div className="max-w-sm flex gap-2 items-center mx-auto">
        <Frown className="mx-auto my-4 text-[#F4AF25]" size={48} />
        <h1 className="text-4xl font-bold text-[#F4AF25]">An Error Occured!</h1>
      </div>
    </section>
  );
}
