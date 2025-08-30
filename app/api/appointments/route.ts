import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-19',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      clientName,
      clientEmail,
      clientPhone,
      date,
      timeSlot,
      notes,
      confirmationCode,
    } = body;

    // Create the appointment in Sanity
    const appointment = await client.create({
      _type: 'appointment',
      clientName,
      clientEmail,
      clientPhone,
      date,
      timeSlot: {
        _type: 'reference',
        _ref: timeSlot,
      },
      notes,
      confirmationCode,
      status: 'scheduled',
    });

    return NextResponse.json({ success: true, appointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Query appointments for the specified date
    const appointments = await client.fetch(
      `*[_type == "appointment" && date == $date] {
        _id,
        clientName,
        clientEmail,
        clientPhone,
        date,
        timeSlot->{
          startTime,
          endTime
        },
        notes,
        confirmationCode,
        status
      }`,
      { date }
    );

    return NextResponse.json({ appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
} 