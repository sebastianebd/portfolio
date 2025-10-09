// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; 

export async function POST(req: Request) {
  console.log('🚀 /api/contact fue llamado');
  try {
    const body = await req.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: name, email or message' },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    if (process.env.SEND_EMAIL === 'true') {
      const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
      if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
        console.warn('SEND_EMAIL enabled but SMTP env vars missing. Skipping email send.');

      } else {
        try {
          const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true para puerto 465
            auth: {
              user: SMTP_USER,
              pass: SMTP_PASS,
            },
            tls: {
            rejectUnauthorized: false,     // solo para DEV
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
          console.log('✅ Email enviado correctamente');
        } catch (emailError) {
          console.error('❌ Error enviando email:', emailError);
          return NextResponse.json(
            { ok: false, error: 'Failed to send email' },
            { status: 500 }
          );
        }
      }
    }

    // 4) Responder siempre con JSON (esto evita el error que viste)
    return NextResponse.json({ ok: true, message: 'Mensaje recibido' });
  } catch (error) {
    console.error('❌ Error en /api/contact:', error);
    return NextResponse.json({ ok: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
