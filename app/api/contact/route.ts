import { NextResponse } from 'next/server';
import { contactValidationSchema } from '@/lib/validations/contactSchema';
import { sendContactEmail } from '@/lib/services/emailService';

export async function POST(req: Request) {
  console.log('🚀 /api/contact fue llamado');
  try {
    const body = await req.json();
    
    try {
      await contactValidationSchema.validate(body, { abortEarly: false });
    } catch (error) {
      return NextResponse.json(
        { ok: false, error: 'Validation failed', details: error instanceof Error ? error.message : 'Unknown error' },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    try {
      await sendContactEmail({ name, email, phone, message });
      console.log('✅ Email procesado correctamente');
    } catch (emailError) {
      console.error('❌ Error enviando email:', emailError);
      return NextResponse.json(
        { ok: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // 4) Responder siempre con JSON (esto evita el error que viste)
    return NextResponse.json({ ok: true, message: 'Mensaje recibido' });
  } catch (error) {
    console.error('❌ Error en /api/contact:', error);
    return NextResponse.json({ ok: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
