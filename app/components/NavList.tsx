import { List } from "@mui/material";
import React, { Children, cloneElement, isValidElement } from "react";

import type { ReactNode } from "react";
import NavLink from "./NavLink";

function NavList({
  children,
  fullWidth = true,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <List component="ul">
      {Children.map(children, (child) =>
        isValidElement(child) ? (
          <NavLink to={child.props.to} external={child.props.external}>
            {cloneElement(child, { fullWidth })}
          </NavLink>
        ) : null
      )}
    </List>
  );
}

export default NavList;
