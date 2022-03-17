import { Box, Typography } from "@mui/material";

import Stain from "./Stain";

const SPACER = " ";

function Title({ label, stainIndex }: { label?: string; stainIndex?: number }) {
  if (!label) return null;
  const words = label.split(SPACER);
  return (
    <Box mb={4}>
      <Typography variant="h2">
        {words.slice(0, -1).join(SPACER)}
        {SPACER}
        <Box component="span" display="inline-flex" flexDirection="column">
          {words[words.length - 1]}
          <Stain index={stainIndex} />
        </Box>
      </Typography>
    </Box>
  );
}

export default Title;
