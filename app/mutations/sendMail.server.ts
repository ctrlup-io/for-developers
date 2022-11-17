import create from "../firebase/create";

export default async function sendMail(payload: {
  to: string;
  from: string;
  subject: string;
  text: string;
}) {
  const mail = await create("mail", {
    to: payload.to,
    from: payload.from,
    message: {
      subject: payload.subject,
      text: payload.text,
    },
  });
  return mail;
}
