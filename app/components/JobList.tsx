import { Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import type { JobProps } from "./Job";
import Job from "./Job";

export default function JobList({ data }: { data: JobProps[] }) {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  if (!data?.length) return null;
  if (isLarge) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          overflowX: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {data.map(
          ({ id, title, mainSkills, experience, salary, description }) => (
            <Job
              key={id}
              id={id}
              title={title}
              mainSkills={mainSkills}
              experience={experience}
              salary={salary}
              description={description}
              sx={{ minWidth: 420, marginLeft: 2, marginTop: 2 }}
            />
          )
        )}
      </Box>
    );
  }
  return (
    <Stack spacing={8}>
      {data.map(
        ({ id, title, mainSkills, experience, salary, description }) => (
          <Job
            key={id}
            id={id}
            title={title}
            mainSkills={mainSkills}
            experience={experience}
            salary={salary}
            description={description}
          />
        )
      )}
    </Stack>
  );
}
