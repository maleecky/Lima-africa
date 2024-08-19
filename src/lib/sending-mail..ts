import emailjs from "@emailjs/browser";

interface Props {
  templateParams: {
    from_name: string;
    message: string;
    from_email: string;
    reply_to: string;
  };
}

export async function SendMail({ templateParams }: Props) {
  emailjs.init({ publicKey: "1x86fwKHCvC-ed6r_" });

  const info = await emailjs.send(
    "service_nyx00lk",
    "template_zosz25s",
    templateParams
  );

  return info;
}
