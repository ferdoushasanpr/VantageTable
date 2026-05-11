import { fetchMenu } from "@/actions/menu";
import React from "react";
import MenuClient from "./menu-client";

const Menu = async (): Promise<React.ReactNode> => {
  const menuItems = await fetchMenu();

  return <MenuClient menuItems={menuItems} />;
};

export default Menu;
