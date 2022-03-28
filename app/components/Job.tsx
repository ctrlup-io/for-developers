import { Card } from "@ctrlup/rainbow-react";
import { EmailOutlined } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

export default function Job({
  id,
  title,
  skills,
  experience,
  salary,
  description,
}: {
  id: String;
  title: String;
  skills: String[];
  experience: Number;
  salary: Number;
  description: String;
}) {
  return (
    <Card icon={<EmailOutlined color="action" />} title={title}>
      <CardContent sx={{ pt: 2 }}>
        <Grid container spacing={1} mb={1}>
          <Grid item>
            <Chip label={`${experience} xp`} />
          </Grid>
          <Grid item>
            <Chip label={`${salary} k€`} />
          </Grid>
        </Grid>
        <Grid container spacing={1} mb={1}>
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Chip label={skill} variant="outlined" />
            </Grid>
          ))}
        </Grid>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Lire plus...</Button>
      </CardActions>
    </Card>
  );
}
