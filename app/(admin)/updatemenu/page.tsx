"use client";

import UpdateFormMenu from "@/components/forms/update-form-menu";
import { useSearchParams } from "next/navigation";

const UpdateMenuPage = (): React.ReactNode => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <main className="flex-1 p-10 overflow-y-auto">
      <UpdateFormMenu />
    </main>
  );
};

export default UpdateMenuPage;
