import { fetchMenu } from "@/actions/menu";
import React from "react";
import MenuClient from "./menu-client";

const Menu = async (): Promise<React.ReactNode> => {
  const data = await fetchMenu();
  const menuItems = data.data;

  return <MenuClient menuItems={menuItems} />;
};

export default Menu;
