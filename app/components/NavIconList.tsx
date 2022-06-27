import { Box } from "@mui/material";
import React, { Children, isValidElement } from "react";

import type { ReactNode } from "react";

function NavIconList({
  children,
  fullWidth = true,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <Box
      component="ul"
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      p={0}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? (
          <Box component="li" sx={{ listStyle: "none" }}>
            {child}
          </Box>
        ) : null
      )}
    </Box>
  );
}

export default NavIconList;
