import { Outlet } from "react-router-dom";

import { Menu } from "../Menu";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Menu />
      {/* {isLogged ? <Outlet /> : <Navigation to="" />} */}
      {<Outlet />}
      <Footer />
    </>
  );
};
