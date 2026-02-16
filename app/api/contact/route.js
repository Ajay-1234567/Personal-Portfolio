import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ---------- EMAIL TEMPLATE ---------- */

const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
    <div style="max-width:600px;margin:auto;background:#ffffff;padding:20px;border-radius:8px;">

      <h2 style="color:#007BFF;margin-bottom:5px;">Portfolio Contact</h2>
      <p style="font-size:14px;color:#555;margin-top:0;">
        You received a message from your portfolio website.
      </p>

      <hr style="margin:20px 0;">

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>
      <div style="background:#f1f1f1;padding:12px;border-radius:6px;white-space:pre-line;">
        ${userMessage}
      </div>

      <p style="margin-top:25px;font-size:12px;color:#888;">
        Reply directly to this email to respond to the sender.
      </p>

    </div>
  </div>
`;

/* ---------- API ROUTE ---------- */

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    const emailAddress = process.env.EMAIL_ADDRESS;
    const gmailPasskey = process.env.GMAIL_PASSKEY;

    if (!emailAddress || !gmailPasskey) {
      return NextResponse.json(
        { success: false, message: "Email credentials missing" },
        { status: 500 }
      );
    }

    const message = `
Name: ${name}
Email: ${email}

${userMessage}
`;

    /* ---------- SMTP ---------- */

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailAddress,
        pass: gmailPasskey,
      },
    });

    await transporter.sendMail({
      from: `"Ajay Kumar Portfolio" <${emailAddress}>`,
      to: emailAddress,
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: generateEmailTemplate(name, email, userMessage),
      replyTo: email,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Error:", error.message);

    return NextResponse.json(
      { success: false, message: "Server error occurred." },
      { status: 500 }
    );
  }
}
