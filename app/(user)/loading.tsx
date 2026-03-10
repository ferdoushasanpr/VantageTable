import React from "react";

export default function Loading(): React.ReactNode {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-dark">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-gray-600 animate-spin"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
