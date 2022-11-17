import {
  Button,
  TextField,
  Typography,
  Box,
  Link,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { useTheme } from "@mui/material/styles";
import { useRef, useEffect } from "react";
import { json } from "@remix-run/node";

import sendMail from "../mutations/sendMail.server";

export function meta() {
  return {
    title: "Contact",
  };
}

const contactEmail = "contact@ctrlup.io";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!name.length > 0 || !email.length > 0 || !message.length > 0) return null;
  const mail = await sendMail({
    from: `${name} <${email}>`,
    to: `Ctrl Up <${contactEmail}>`,
    subject: "Hello Ctrl Up ! 👋",
    text: message,
  });
  return json(mail);
}

export async function loader() {
  return {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  };
}

export default function Contact() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const data = useLoaderData();
  const transition = useTransition();
  const formRef = useRef();
  const isSending = transition.state === "submitting";
  const disabled = isSending;
  useEffect(() => {
    if (!isSending) {
      formRef.current?.reset();
    }
  }, [isSending]);
  return (
    <Grid container flexDirection="row" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2">Communiquons</Typography>
      </Grid>
      <Grid item md={12} lg={6}>
        <Stack
          spacing={2}
          component={Form}
          method="post"
          noValidate
          ref={formRef}
        >
          <Typography>
            Vous souhaitez entrer en contact avec notre équipe ? Laissez nous un
            petit mot et nous vous répondons au plus vite.
          </Typography>
          <TextField id="name" name="name" label="Nom" />
          <TextField id="email" name="email" label="Adresse mail" />
          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            minRows={7}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth={!isLarge}
            sx={{ mt: 2 }}
            type="submit"
            disabled={disabled}
          >
            {isSending ? "Envoi du message..." : "Envoyer le message"}
          </Button>
        </Stack>
        <Typography mt={2}>
          Ou nous contacter à{" "}
          <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
        </Typography>
      </Grid>
      <Grid item lg={6} display={{ xs: "none", lg: "block" }}>
        <Box
          width="100%"
          height="auto"
          component="img"
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/camps.webp?alt=media&token=5e6f6a79-0590-411c-aba4-21640edbfc60"
          alt="team gathering"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Rencontrons-nous</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography fontWeight="bold" component="span">
          Ctrl Up, Écosystème Darwin
        </Typography>
        <Typography>87 Quai des Queyries, Bordeaux</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          bgcolor="action.disabled"
          border={0}
          width="100%"
          height={isLarge ? 420 : "auto"}
          component="iframe"
          title="Où nous trouver"
          src={`https://www.google.com/maps/embed/v1/place?key=${data.GOOGLE_MAP_API_KEY}&q=Ctrl Up, Bordeaux`}
          allowFullScreen={isLarge}
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
}
