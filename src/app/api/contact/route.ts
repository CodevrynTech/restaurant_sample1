import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log the submission to the server console (in a real app, this would be an email via Resend/SendGrid)
    console.log("New form submission received:", data);

    // Simulate network delay for realistic loading states
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 });
  }
}
