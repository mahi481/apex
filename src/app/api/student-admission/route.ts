import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"
import nodemailer from "nodemailer"

const sql = neon(process.env.DATABASE_URL!)

// Email configuration using nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your email password or app password
    },
  })
}

// Generate unique application ID
const generateApplicationId = () => {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")
  return `APX${timestamp}${random}`
}

// Send confirmation email
async function sendConfirmationEmail(email: string, name: string, applicationId: string, courseApplied: string) {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Application Received – Apex Institute",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Application Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🎓 Apex Institute</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Paramedical Education Excellence</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1976d2; margin-bottom: 20px; text-align: center;">Application Received Successfully! ✅</h2>
            
            <p style="font-size: 16px; margin-bottom: 20px;">Dear <strong>${name}</strong>,</p>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              Thank you for submitting your application for <strong>${courseApplied}</strong> at Apex Institute. 
              We have received your details and payment successfully.
            </p>
            
            <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #166534; margin: 0 0 15px 0; text-align: center;">📋 Application Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #166534;">Application ID:</td>
                  <td style="padding: 8px 0; color: #166534;">${applicationId}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #166534;">Course Applied:</td>
                  <td style="padding: 8px 0; color: #166534;">${courseApplied}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #166534;">Submission Date:</td>
                  <td style="padding: 8px 0; color: #166534;">${new Date().toLocaleDateString("en-IN")}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #166534;">Status:</td>
                  <td style="padding: 8px 0; color: #166534;">Under Review</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #92400e; margin: 0 0 15px 0;">📞 Next Steps:</h3>
              <ul style="color: #92400e; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Our admissions team will review your application within 3-5 business days</li>
                <li style="margin-bottom: 8px;">You will receive an email notification about your application status</li>
                <li style="margin-bottom: 8px;">If selected, you will be contacted for further admission procedures</li>
                <li style="margin-bottom: 8px;">Keep your application ID safe for future reference</li>
              </ul>
            </div>
            
            <div style="background: #e0f2fe; border: 2px solid #0284c7; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #0c4a6e; margin: 0 0 15px 0;">📞 Contact Information:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 5px 0; font-weight: bold; color: #0c4a6e;">Phone:</td>
                  <td style="padding: 5px 0; color: #0c4a6e;">+91 98765 43210</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; font-weight: bold; color: #0c4a6e;">Email:</td>
                  <td style="padding: 5px 0; color: #0c4a6e;">admissions@apexhospital.com</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; font-weight: bold; color: #0c4a6e;">Address:</td>
                  <td style="padding: 5px 0; color: #0c4a6e;">123 Medical Street, Healthcare City, State 560001</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 15px; margin: 25px 0;">
              <p style="margin: 0; color: #991b1b; font-weight: 500;">
                <strong>Important:</strong> Please keep all your original documents ready for verification during the admission process.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0 0 10px 0;">Best regards,</p>
              <p style="color: #1976d2; margin: 0; font-weight: bold; font-size: 18px;">Admissions Team</p>
              <p style="color: #1976d2; margin: 5px 0 0 0; font-weight: 600;">Apex Institute of Paramedical Sciences</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
            <p style="margin: 5px 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0;">© 2024 Apex Hospital. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log(`Confirmation email sent to: ${email}`)
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Generate unique application ID
    const applicationId = generateApplicationId()

    // Extract all form data
    const applicationData = {
      applicationId,
      courseApplied: formData.get("courseApplied") as string,
      fullName: formData.get("fullName") as string,
      initialExpansion: formData.get("initialExpansion") as string,
      gender: formData.get("gender") as string,
      bloodGroup: formData.get("bloodGroup") as string,
      religion: formData.get("religion") as string,
      nationality: formData.get("nationality") as string,
      motherTongue: formData.get("motherTongue") as string,
      community: formData.get("community") as string,
      physicallyDisabled: formData.get("physicallyDisabled") as string,
      reasonForCourse: formData.get("reasonForCourse") as string,
      applicantEmail: formData.get("applicantEmail") as string,

      // Present Address
      presentAddress: formData.get("presentAddress") as string,
      presentLandline: formData.get("presentLandline") as string,
      presentMobile: formData.get("presentMobile") as string,

      // Permanent Address
      permanentAddress: formData.get("permanentAddress") as string,
      permanentDistrict: formData.get("permanentDistrict") as string,
      permanentPincode: formData.get("permanentPincode") as string,
      permanentLandline: formData.get("permanentLandline") as string,
      permanentMobile: formData.get("permanentMobile") as string,
      permanentState: formData.get("permanentState") as string,
      permanentEmail: formData.get("permanentEmail") as string,

      // Parent/Guardian Details
      guardianName: formData.get("guardianName") as string,
      guardianOccupation: formData.get("guardianOccupation") as string,
      guardianContact: formData.get("guardianContact") as string,

      // Last School/College
      lastInstitution: formData.get("lastInstitution") as string,
      lastInstitutionPlace: formData.get("lastInstitutionPlace") as string,
      lastInstitutionYear: formData.get("lastInstitutionYear") as string,

      // Payment Details
      paymentMode: formData.get("paymentMode") as string,
      paymentReference: formData.get("paymentReference") as string,
      paymentDate: formData.get("paymentDate") as string,
      paymentAmount: 1000.0, // Fixed amount

      // Educational Qualification - SSLC/10th
      sslcSchool: formData.get("sslcSchool") as string,
      sslcYear: formData.get("sslcYear") as string,
      sslcMarks: formData.get("sslcMarks") as string,
      sslcBoard: formData.get("sslcBoard") as string,
      sslcAttempts: formData.get("sslcAttempts") as string,

      // Educational Qualification - HSC/12th
      hscSchool: formData.get("hscSchool") as string,
      hscYear: formData.get("hscYear") as string,
      hscMarks: formData.get("hscMarks") as string,
      hscBoard: formData.get("hscBoard") as string,
      hscAttempts: formData.get("hscAttempts") as string,

      // Additional Qualifications
      additionalQualification: formData.get("additionalQualification") as string,
    }

    // Handle file uploads (store file info, you can implement actual file storage later)
    const files = {
      paymentProof: formData.get("paymentProof") as File,
      tenthMarksheet: formData.get("tenthMarksheet") as File,
      twelfthMarksheet: formData.get("twelfthMarksheet") as File,
      communityCertificate: formData.get("communityCertificate") as File,
      eligibilityCertificate: formData.get("eligibilityCertificate") as File,
      passportPhoto: formData.get("passportPhoto") as File,
    }

    // Log file information (you can implement actual file storage here)
    console.log("Files received:")
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        console.log(`${key}: ${file.name} (${file.size} bytes, ${file.type})`)
      }
    })

    // Insert application data into database
    const result = await sql`
      INSERT INTO student_applications (
        application_id, course_applied, full_name, initial_expansion, gender, blood_group,
        religion, nationality, mother_tongue, community, physically_disabled, reason_for_course,
        applicant_email, present_address, present_landline, present_mobile, permanent_address,
        permanent_district, permanent_pincode, permanent_landline, permanent_mobile,
        permanent_state, permanent_email, guardian_name, guardian_occupation, guardian_contact,
        last_institution, last_institution_place, last_institution_year, payment_mode,
        payment_reference, payment_date, payment_amount, sslc_school, sslc_year, sslc_marks, 
        sslc_board, sslc_attempts, hsc_school, hsc_year, hsc_marks, hsc_board, hsc_attempts,
        additional_qualification, application_status, created_at
      ) VALUES (
        ${applicationData.applicationId}, ${applicationData.courseApplied}, ${applicationData.fullName},
        ${applicationData.initialExpansion}, ${applicationData.gender}, ${applicationData.bloodGroup},
        ${applicationData.religion}, ${applicationData.nationality}, ${applicationData.motherTongue},
        ${applicationData.community}, ${applicationData.physicallyDisabled}, ${applicationData.reasonForCourse},
        ${applicationData.applicantEmail}, ${applicationData.presentAddress}, ${applicationData.presentLandline},
        ${applicationData.presentMobile}, ${applicationData.permanentAddress}, ${applicationData.permanentDistrict},
        ${applicationData.permanentPincode}, ${applicationData.permanentLandline}, ${applicationData.permanentMobile},
        ${applicationData.permanentState}, ${applicationData.permanentEmail}, ${applicationData.guardianName},
        ${applicationData.guardianOccupation}, ${applicationData.guardianContact}, ${applicationData.lastInstitution},
        ${applicationData.lastInstitutionPlace}, ${applicationData.lastInstitutionYear}, ${applicationData.paymentMode},
        ${applicationData.paymentReference}, ${applicationData.paymentDate}, ${applicationData.paymentAmount},
        ${applicationData.sslcSchool}, ${applicationData.sslcYear}, ${applicationData.sslcMarks}, 
        ${applicationData.sslcBoard}, ${applicationData.sslcAttempts}, ${applicationData.hscSchool}, 
        ${applicationData.hscYear}, ${applicationData.hscMarks}, ${applicationData.hscBoard}, 
        ${applicationData.hscAttempts}, ${applicationData.additionalQualification}, 'submitted', NOW()
      ) RETURNING id
    `

    const dbId = result[0].id
    console.log(`Application saved to database with ID: ${dbId}`)

    // Send confirmation email
    try {
      await sendConfirmationEmail(
        applicationData.applicantEmail,
        applicationData.fullName,
        applicationData.applicationId,
        applicationData.courseApplied,
      )
    } catch (emailError) {
      console.error("Email sending failed, but application was saved:", emailError)
      // Continue execution even if email fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      applicationId: applicationData.applicationId,
      dbId: dbId,
    })
  } catch (error) {
    console.error("Error processing application:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit application. Please try again.",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    )
  }
}

// Optional: GET method to retrieve application status
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const applicationId = searchParams.get("applicationId")

    if (!applicationId) {
      return NextResponse.json({ success: false, message: "Application ID is required" }, { status: 400 })
    }

    const result = await sql`
      SELECT 
        application_id, full_name, course_applied, application_status, 
        created_at, applicant_email
      FROM student_applications 
      WHERE application_id = ${applicationId}
    `

    if (result.length === 0) {
      return NextResponse.json({ success: false, message: "Application not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      application: result[0],
    })
  } catch (error) {
    console.error("Error retrieving application:", error)
    return NextResponse.json({ success: false, message: "Failed to retrieve application" }, { status: 500 })
  }
}
