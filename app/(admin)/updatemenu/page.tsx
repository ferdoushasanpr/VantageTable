import React from "react";
import UpdateFormMenu from "@/components/forms/update-form-menu";
import { fetchMenuById } from "@/actions/menu";

interface PageProps {
  searchParams: {
    id?: string;
  };
}

const UpdateMenuPage = async ({
  searchParams,
}: PageProps): Promise<React.ReactNode> => {
  const params = await searchParams;
  const id = params.id;

  if (!id) {
    throw new Error("ID is required");
  }

  const menu = await fetchMenuById(id);

  console.log(menu);

  if (!menu) {
    throw new Error("Menu not found");
  }

  return (
    <main className="flex-1 p-10 overflow-y-auto">
      <UpdateFormMenu menu={menu} />
    </main>
  );
};

export default UpdateMenuPage;
