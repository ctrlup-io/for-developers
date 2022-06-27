import { NavLink as RemixNavLink } from "@remix-run/react";
import { cloneElement, isValidElement } from "react";

import type { ReactNode } from "react";

function NavLink({
  children,
  to,
  external = false,
}: {
  children: ReactNode;
  to: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" style={style}>
        {children}
      </a>
    );
  }
  return (
    <RemixNavLink to={to} style={style}>
      {({ isActive }) =>
        isValidElement(children) ? cloneElement(children, { isActive }) : null
      }
    </RemixNavLink>
  );
}

const style = {
  textDecoration: "none",
  display: "block",
  width: "100%",
};

export default NavLink;
