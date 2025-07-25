import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const healthPackageInquiries: any[] = []

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, mobile, date, message, packageName } = body

    // Validate required fields
    if (!name || !email || !mobile || !date) {
      return NextResponse.json({ error: "Name, email, mobile, and date are required" }, { status: 400 })
    }

    // Create inquiry object
    const inquiry = {
      id: Date.now().toString(),
      name,
      email,
      mobile,
      date,
      message: message || "",
      packageName: packageName || "",
      status: "new",
      createdAt: new Date().toISOString(),
    }

    // Save to "database"
    healthPackageInquiries.push(inquiry)

    // Send email to admin
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || "admin@apexhospital.com",
        subject: "New Health Package Inquiry",
        html: `
          <h2>New Health Package Inquiry</h2>
          <p><strong>Package:</strong> ${packageName}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Inquiry Time:</strong> ${new Date().toLocaleString()}</p>
        `,
      })
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully! We will contact you soon.",
      inquiryId: inquiry.id,
    })
  } catch (error) {
    console.error("Health package inquiry error:", error)
    return NextResponse.json({ error: "Failed to submit inquiry. Please try again." }, { status: 500 })
  }
}
