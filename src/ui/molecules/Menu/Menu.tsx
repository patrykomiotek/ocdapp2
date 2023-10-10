import { Paths } from "@consts/router.paths";
import { NavLink } from "@ui/atoms/NavLink";

export const Menu = () => {
  return (
    <ul className="flex list-none">
      <li className="mr-3">
        <NavLink to={Paths.HOME}>Home</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.LOGIN}>Login</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.PRODUCTS}>Products</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.CREATE_PRODUCT}>Create product</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.BASKET}>Basket</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.STEPPER}>Stepper</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.AUTH}>Auth</NavLink>
      </li>
    </ul>
  );
};
