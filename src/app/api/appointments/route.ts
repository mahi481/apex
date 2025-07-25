import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory storage (replace with DB in production)
const appointments: any[] = [];

// Setup transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      age,
      phone,
      gender,
      department,
      doctor,
      date,
      time,
      reason,
    } = body;

    // Validate
    if (!name || !email || !age || !gender || !phone || !department || !doctor || !date || !time) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Appointment object
    const appointment = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      age,
      gender,
      department,
      doctor,
      date,
      time,
      reason: reason || "",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    appointments.push(appointment);

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || "amritanshuy56@gmail.com",
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      `,
    });

    // ✅ Send confirmation to patient
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Appointment Confirmation - ${department} Department`,
      html: `
        <h2>Thank you for booking an appointment at Apex Hospital</h2>
        <p>Dear ${name},</p>
        <p>Your appointment has been received and is currently pending confirmation. Details:</p>
        <ul>
          <li><strong>Doctor:</strong> ${doctor}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Department:</strong> ${department}</li>
        </ul>
        <p>We will contact you shortly to confirm your booking.</p>
        <p>- Apex Hospital</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Appointment booked! Confirmation email sent.",
      appointmentId: appointment.id,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    return NextResponse.json(
      { error: "Failed to book appointment. Try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    appointments: appointments.length,
    message: "Appointments API is working",
  });
}
