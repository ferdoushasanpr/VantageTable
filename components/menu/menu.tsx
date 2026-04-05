import { fetchMenu } from "@/actions/menu";
import React from "react";
import MenuClient from "./menu-client";

export const dynamic = "force-dynamic";

const Menu = async (): Promise<React.ReactNode> => {
  const data = await fetchMenu();
  const menuItems = data.data;

  return <MenuClient menuItems={menuItems} />;
};

export default Menu;
