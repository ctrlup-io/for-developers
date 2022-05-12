import type { SvgIconProps } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function NpmIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M3 3v18h18V3H3m3 3h12v12h-3V9h-3v9H6V6z" />
    </SvgIcon>
  );
}
