import { Outlet } from "react-router-dom";

import { Menu } from "../Menu";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};
