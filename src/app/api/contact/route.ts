import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message, consent } = body;

    // Validation
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate consent checkbox
    if (!consent) {
      return NextResponse.json(
        { success: false, message: 'Please agree to be contacted by CodeBuzz' },
        { status: 400 }
      );
    }

    // Send email
    const emailSent = await sendContactFormEmail({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    });

    if (emailSent) {
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for contacting us! We will get back to you soon.',
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email. Please try again later.',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
