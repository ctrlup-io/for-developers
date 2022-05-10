import { Typography, Link } from "@mui/material";

export function meta() {
  return {
    title: "Mentions légales",
  };
}

export default function PrivacyAndTerms() {
  return (
    <>
      <Typography variant="h2" mb={4}>
        Mentions légales
      </Typography>
      <Typography mb={4}>
        Vous êtes sur le site internet ctrlup.dev (le "Site").
      </Typography>
      <Typography variant="h3" mb={4}>
        Éditeur
      </Typography>
      <Typography>
        Le Site est publié par la société Ctrl Up, une société par actions
        simplifiée (SAS) au capital social de 10 000 € enregistrée au RCS de
        Bordeaux sous le numéro 888 875 127 et le numéro de Siret 888 875 127
        000 19.
      </Typography>
      <Typography>
        Siège social :{" "}
        <Link
          href="https://osm.org/go/b~~Sw7L6x?way=77922873"
          target="_blank"
          rel="nooppener noreferrer"
        >
          87, Quai des Queyries 33100 Bordeaux
        </Link>
      </Typography>
      <Typography mb={4}>
        Adresse email :{" "}
        <Link
          href="mailto:contact@ctrlup.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@ctrlup.io
        </Link>
      </Typography>
      <Typography variant="h3" mb={4}>
        Directeur de publication
      </Typography>
      <Typography mb={4}>
        Le directeur de publication est Valentin Barit, directeur technique de
        Ctrl Up.
      </Typography>
      <Typography variant="h3" mb={4}>
        Hébergement et maintenance
      </Typography>
      <Typography>Le Site a été développé par Ctrl Up.</Typography>
      <Typography>
        Le Site est hébergé par Netlify situé au 2325 3rd Street, Suite 296, San
        Francisco, California 94107.
      </Typography>
    </>
  );
}
