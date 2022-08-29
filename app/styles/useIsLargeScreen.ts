import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function useIsLargeScreen() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return isLargeScreen;
}
