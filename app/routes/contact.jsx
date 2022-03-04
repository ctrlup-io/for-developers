import { Button, Container } from "@mui/material";

export function meta() {
  return {
    title: "Contact",
  };
}

export default function Contact() {
  return (
    <Container>
      <br />
      <Button color="primary" variant="contained" fullWidth>
        Contactez-nous
      </Button>
    </Container>
  );
}
