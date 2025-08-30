import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      clientName,
      clientEmail,
      clientPhone,
      notes,
      date,
      time,
      psychologist,
      confirmationCode,
    } = body;

    // Send email to client
    await resend.emails.send({
      from: 'The Resolute Mind  <onboarding@resend.dev>',
      to: clientEmail,
      subject: 'Your Appointment Confirmation',
      html: `
        <h1>Appointment Confirmed!</h1>
        <p>Dear ${clientName},</p>
        <p>Your appointment has been scheduled with ${psychologist}.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Confirmation Code:</strong> ${confirmationCode}</p>
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        <p>If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance.</p>
        <p>Best regards,<br>The Resolute Team</p>
      `,
    });

    // Send email to psychologist
    await resend.emails.send({
      from: 'The Resolute Mind  <onboarding@resend.dev>',
      to: process.env.NEXT_PUBLIC_PSYCHOLOGIST_EMAIL ?? '',
      subject: 'New Appointment Scheduled',
      html: `
        <h1>New Appointment Scheduled</h1>
        <p>A new appointment has been scheduled with the following details:</p>
        <p><strong>Client Name:</strong> ${clientName}</p>
        <p><strong>Client Email:</strong> ${clientEmail}</p>
        <p><strong>Client Phone:</strong> ${clientPhone || 'Not provided'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Confirmation Code:</strong> ${confirmationCode}</p>
        ${notes ? `<p><strong>Client Notes:</strong> ${notes}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 