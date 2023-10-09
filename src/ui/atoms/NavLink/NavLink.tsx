import { NavLink as RRDNavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

type Props = NavLinkProps;

export const NavLink = ({ to, children, ...rest }: Props) => {
  const defaultClasses =
    "text-blue-700 hover:text-blue-900 hover:underline dark:text-blue-400";
  const pendingClasses = "";
  const activeClasses =
    "underline text-blue-700 hover:text-blue-900 dark:text-blue-400";

  return (
    <RRDNavLink
      to={to}
      className={({ isActive, isPending }) => {
        return isPending
          ? pendingClasses
          : isActive
          ? activeClasses
          : defaultClasses;
      }}
      {...rest}
    >
      {children}
    </RRDNavLink>
  );
};
