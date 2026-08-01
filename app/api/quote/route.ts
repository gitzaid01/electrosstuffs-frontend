import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, contact, budget, details } = await req.json();

    if (!name || !contact || !details) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"ElectroStuffs Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: contact,
      subject: `New Quote Request from ${name}`,
      text: [
        `Name: ${name}`,
        `Contact: ${contact}`,
        budget ? `Budget: ${budget}` : null,
        ``,
        `Project details:`,
        details,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote email failed:", err);
    return NextResponse.json(
      { error: "Failed to send. Try again or email us directly." },
      { status: 500 }
    );
  }
}