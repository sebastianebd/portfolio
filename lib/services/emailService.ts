import nodemailer from 'nodemailer';
import { ContactFormInputs } from '@/lib/validations/contactSchema';

export async function sendContactEmail(data: ContactFormInputs) {
  const { name, email, phone, message } = data;

  if (process.env.SEND_EMAIL !== 'true') {
    return;
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.warn('SEND_EMAIL enabled but SMTP env vars missing. Skipping email send.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true para puerto 465
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // solo para DEV
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: CONTACT_TO,
    subject: `Nuevo mensaje desde portfolio de ${name}`,
    text: `Mensaje: ${message}\n\nTeléfono: ${phone ?? 'No proporcionado'}`,
    html: `<p>${message.replace(/\n/g, '<br/>')}</p>
          <p>Teléfono: ${phone ?? 'No proporcionado <br/>'}</p>
          <p>Correo: ${email}</p>`,
  });
}
