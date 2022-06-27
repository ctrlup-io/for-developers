import { colors } from "@ctrlup/rainbow-react";

import type { SvgIconProps } from "@mui/material";
import { IconButton } from "@mui/material";

function NavIconListItem({
  name,
  to,
  Icon,
}: {
  name: string;
  to: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
}) {
  if (!Icon) return null;
  return (
    <IconButton aria-label={name} href={to} target="_blank" sx={{ p: 1 }}>
      <Icon
        sx={{
          fill: colors.WHITE[50],
        }}
      />
    </IconButton>
  );
}

export default NavIconListItem;
