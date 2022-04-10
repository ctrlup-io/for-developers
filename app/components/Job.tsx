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
import { Link } from "remix";

export default function Job({
  id,
  title,
  mainSkills,
  experience,
  salary,
  description,
}: JobProps) {
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
          {mainSkills.map((skill) => (
            <Grid item key={skill}>
              <Chip label={skill} variant="outlined" />
            </Grid>
          ))}
        </Grid>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" component={Link} to={`/jobs/${id}`}>
          Lire plus...
        </Button>
      </CardActions>
    </Card>
  );
}

type JobProps = {
  id: string;
  title: string;
  description: string;
  experience: number;
  salary: number;
  mainSkills: string[];
  completeSkills: string[];
};
