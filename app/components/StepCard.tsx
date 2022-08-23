import { Card, Typography, CardContent, Grid } from "@mui/material";
import type { ReactNode } from "react";
import type { SvgIconProps } from "@mui/material";

export default function StepCard({
  title,
  subtitle,
  children,
  Icon,
  ...props
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  Icon: (props: SvgIconProps) => JSX.Element;
}) {
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Icon color="action" />
          </Grid>
          <Grid item>
            <Typography fontWeight="bold" component="span">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>({subtitle})</Typography>
          </Grid>
        </Grid>
        {children}
      </CardContent>
    </Card>
  );
}
