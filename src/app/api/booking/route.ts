import { IFormState } from '@/components/UI/BookingForm';
import { sendUserData } from '@/services/sendEmail';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  try {
    const data: IFormState = await req.json();
    const result = await sendUserData(data);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Email sending failed' }, { status: 500 });
  }
}