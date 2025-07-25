"use client"

import type React from "react"

import { useState } from "react"
import styles from "./admission.module.css"

interface FormData {
  // Course
  courseApplied: string

  // Applicant Details
  fullName: string
  initialExpansion: string
  gender: string
  bloodGroup: string
  religion: string
  nationality: string
  motherTongue: string
  community: string
  physicallyDisabled: string
  reasonForCourse: string
  applicantEmail: string

  // Present Address
  presentAddress: string
  presentLandline: string
  presentMobile: string

  // Permanent Address
  permanentAddress: string
  permanentDistrict: string
  permanentPincode: string
  permanentLandline: string
  permanentMobile: string
  permanentState: string
  permanentEmail: string

  // Parent/Guardian Details
  guardianName: string
  guardianOccupation: string
  guardianContact: string

  // Last School/College
  lastInstitution: string
  lastInstitutionPlace: string
  lastInstitutionYear: string

  // Payment Details
  paymentMode: string
  paymentReference: string
  paymentDate: string

  // Educational Qualification
  sslcSchool: string
  sslcYear: string
  sslcMarks: string
  sslcBoard: string
  sslcAttempts: string

  hscSchool: string
  hscYear: string
  hscMarks: string
  hscBoard: string
  hscAttempts: string

  additionalQualification: string
}

export default function StudentAdmission() {
  const [formData, setFormData] = useState<FormData>({
    courseApplied: "",
    fullName: "",
    initialExpansion: "",
    gender: "",
    bloodGroup: "",
    religion: "",
    nationality: "Indian",
    motherTongue: "",
    community: "",
    physicallyDisabled: "no",
    reasonForCourse: "",
    applicantEmail: "",
    presentAddress: "",
    presentLandline: "",
    presentMobile: "",
    permanentAddress: "",
    permanentDistrict: "",
    permanentPincode: "",
    permanentLandline: "",
    permanentMobile: "",
    permanentState: "",
    permanentEmail: "",
    guardianName: "",
    guardianOccupation: "",
    guardianContact: "",
    lastInstitution: "",
    lastInstitutionPlace: "",
    lastInstitutionYear: "",
    paymentMode: "",
    paymentReference: "",
    paymentDate: new Date().toISOString().split("T")[0],
    sslcSchool: "",
    sslcYear: "",
    sslcMarks: "",
    sslcBoard: "",
    sslcAttempts: "1",
    hscSchool: "",
    hscYear: "",
    hscMarks: "",
    hscBoard: "",
    hscAttempts: "1",
    additionalQualification: "",
  })

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    paymentProof: null,
    tenthMarksheet: null,
    twelfthMarksheet: null,
    communityCertificate: null,
    eligibilityCertificate: null,
    passportPhoto: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copyToPermanent, setCopyToPermanent] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [field]: file }))
  }

  const copyPresentToPermanent = () => {
    if (copyToPermanent) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.presentAddress,
        permanentLandline: prev.presentLandline,
        permanentMobile: prev.presentMobile,
        permanentEmail: prev.applicantEmail,
      }))
    }
  }

  const handleCopyAddressChange = (checked: boolean) => {
    setCopyToPermanent(checked)
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.presentAddress,
        permanentLandline: prev.presentLandline,
        permanentMobile: prev.presentMobile,
        permanentEmail: prev.applicantEmail,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const submitData = new FormData()

      // Add form data
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value)
      })

      // Add files
      Object.entries(files).forEach(([key, file]) => {
        if (file) {
          submitData.append(key, file)
        }
      })

      const response = await fetch("/api/student-admission", {
        method: "POST",
        body: submitData,
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(
          `Application submitted successfully! Your Application ID is: ${result.applicationId}. Check your email for confirmation.`,
        )
        setMessageType("success")

        // Reset form after successful submission
        setFormData({
          courseApplied: "",
          fullName: "",
          initialExpansion: "",
          gender: "",
          bloodGroup: "",
          religion: "",
          nationality: "Indian",
          motherTongue: "",
          community: "",
          physicallyDisabled: "no",
          reasonForCourse: "",
          applicantEmail: "",
          presentAddress: "",
          presentLandline: "",
          presentMobile: "",
          permanentAddress: "",
          permanentDistrict: "",
          permanentPincode: "",
          permanentLandline: "",
          permanentMobile: "",
          permanentState: "",
          permanentEmail: "",
          guardianName: "",
          guardianOccupation: "",
          guardianContact: "",
          lastInstitution: "",
          lastInstitutionPlace: "",
          lastInstitutionYear: "",
          paymentMode: "",
          paymentReference: "",
          paymentDate: new Date().toISOString().split("T")[0],
          sslcSchool: "",
          sslcYear: "",
          sslcMarks: "",
          sslcBoard: "",
          sslcAttempts: "1",
          hscSchool: "",
          hscYear: "",
          hscMarks: "",
          hscBoard: "",
          hscAttempts: "1",
          additionalQualification: "",
        })

        setFiles({
          paymentProof: null,
          tenthMarksheet: null,
          twelfthMarksheet: null,
          communityCertificate: null,
          eligibilityCertificate: null,
          passportPhoto: null,
        })

        // Reset file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>
        fileInputs.forEach((input) => {
          input.value = ""
        })
      } else {
        setMessage(result.message || "Failed to submit application. Please try again.")
        setMessageType("error")
      }
    } catch (error) {
      setMessage("Error submitting application. Please try again.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>🔖 Paramedical Course Application Form – Apex Institute</h1>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`${styles.message} ${messageType === "success" ? styles.successMessage : styles.errorMessage}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Course Applied For */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🎓 Course Applied For</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.formGroup}>
              <label htmlFor="courseApplied" className={styles.label}>
                Select Course *
              </label>
              <select
                id="courseApplied"
                value={formData.courseApplied}
                onChange={(e) => handleInputChange("courseApplied", e.target.value)}
                required
                className={styles.select}
              >
                <option value="">Select Course</option>
                <option value="B.Sc. Physician Assistant">B.Sc. Physician Assistant</option>
                <option value="B.Sc. Dialysis Technology">B.Sc. Dialysis Technology</option>
                <option value="B.Sc. Cardiac Technology">B.Sc. Cardiac Technology</option>
                <option value="B.Sc. Operation Theatre & Anaesthesia Technology">
                  B.Sc. Operation Theatre & Anaesthesia Technology
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Applicant Details */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🧑‍🎓 Applicant Details</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="initialExpansion" className={styles.label}>
                  Initial & Expansion
                </label>
                <input
                  type="text"
                  id="initialExpansion"
                  value={formData.initialExpansion}
                  onChange={(e) => handleInputChange("initialExpansion", e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="gender" className={styles.label}>
                  Gender *
                </label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  required
                  className={styles.select}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="bloodGroup" className={styles.label}>
                  Blood Group
                </label>
                <select
                  id="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={(e) => handleInputChange("bloodGroup", e.target.value)}
                  className={styles.select}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="religion" className={styles.label}>
                  Religion
                </label>
                <input
                  type="text"
                  id="religion"
                  value={formData.religion}
                  onChange={(e) => handleInputChange("religion", e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="nationality" className={styles.label}>
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange("nationality", e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="motherTongue" className={styles.label}>
                  Mother Tongue
                </label>
                <input
                  type="text"
                  id="motherTongue"
                  value={formData.motherTongue}
                  onChange={(e) => handleInputChange("motherTongue", e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="community" className={styles.label}>
                  Community
                </label>
                <select
                  id="community"
                  value={formData.community}
                  onChange={(e) => handleInputChange("community", e.target.value)}
                  className={styles.select}
                >
                  <option value="">Select Community</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="physicallyDisabled" className={styles.label}>
                  Are you Physically Challenged?
                </label>
                <select
                  id="physicallyDisabled"
                  value={formData.physicallyDisabled}
                  onChange={(e) => handleInputChange("physicallyDisabled", e.target.value)}
                  className={styles.select}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="applicantEmail" className={styles.label}>
                  Applicant Email * (📧 required for confirmation mail)
                </label>
                <input
                  type="email"
                  id="applicantEmail"
                  value={formData.applicantEmail}
                  onChange={(e) => handleInputChange("applicantEmail", e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="reasonForCourse" className={styles.label}>
                Reason for Choosing this Course
              </label>
              <textarea
                id="reasonForCourse"
                value={formData.reasonForCourse}
                onChange={(e) => handleInputChange("reasonForCourse", e.target.value)}
                rows={3}
                className={styles.textarea}
              />
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🏠 Address Details</h2>
          </div>
          <div className={styles.sectionContent}>
            {/* Present Address */}
            <div className={styles.addressSection}>
              <h3 className={styles.subTitle}>a. Present Address</h3>
              <div className={styles.grid}>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="presentAddress" className={styles.label}>
                    Address *
                  </label>
                  <textarea
                    id="presentAddress"
                    value={formData.presentAddress}
                    onChange={(e) => handleInputChange("presentAddress", e.target.value)}
                    required
                    rows={2}
                    className={styles.textarea}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="presentLandline" className={styles.label}>
                    Landline
                  </label>
                  <input
                    type="text"
                    id="presentLandline"
                    value={formData.presentLandline}
                    onChange={(e) => handleInputChange("presentLandline", e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="presentMobile" className={styles.label}>
                    Mobile *
                  </label>
                  <input
                    type="text"
                    id="presentMobile"
                    value={formData.presentMobile}
                    onChange={(e) => handleInputChange("presentMobile", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            {/* Copy Address Checkbox */}
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="copyAddress"
                checked={copyToPermanent}
                onChange={(e) => handleCopyAddressChange(e.target.checked)}
                className={styles.checkbox}
              />
              <label htmlFor="copyAddress" className={styles.checkboxLabel}>
                Same as Present Address
              </label>
            </div>

            {/* Permanent Address */}
            <div className={styles.addressSection}>
              <h3 className={styles.subTitle}>b. Permanent Address</h3>
              <div className={styles.grid}>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="permanentAddress" className={styles.label}>
                    Address *
                  </label>
                  <textarea
                    id="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={(e) => handleInputChange("permanentAddress", e.target.value)}
                    required
                    rows={2}
                    className={styles.textarea}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="permanentDistrict" className={styles.label}>
                    District
                  </label>
                  <input
                    type="text"
                    id="permanentDistrict"
                    value={formData.permanentDistrict}
                    onChange={(e) => handleInputChange("permanentDistrict", e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="permanentPincode" className={styles.label}>
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="permanentPincode"
                    value={formData.permanentPincode}
                    onChange={(e) => handleInputChange("permanentPincode", e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="permanentLandline" className={styles.label}>
                    Landline
                  </label>
                  <input
                    type="text"
                    id="permanentLandline"
                    value={formData.permanentLandline}
                    onChange={(e) => handleInputChange("permanentLandline", e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="permanentMobile" className={styles.label}>
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="permanentMobile"
                    value={formData.permanentMobile}
                    onChange={(e) => handleInputChange("permanentMobile", e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="permanentState" className={styles.label}>
                    Native State
                  </label>
                  <input
                    type="text"
                    id="permanentState"
                    value={formData.permanentState}
                    onChange={(e) => handleInputChange("permanentState", e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="permanentEmail" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="permanentEmail"
                    value={formData.permanentEmail}
                    onChange={(e) => handleInputChange("permanentEmail", e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parent/Guardian Details */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>👨‍👩‍👧 Parent/Guardian Details</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="guardianName" className={styles.label}>
                  Father's/Mother's/Guardian's Name *
                </label>
                <input
                  type="text"
                  id="guardianName"
                  value={formData.guardianName}
                  onChange={(e) => handleInputChange("guardianName", e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="guardianOccupation" className={styles.label}>
                  Occupation
                </label>
                <input
                  type="text"
                  id="guardianOccupation"
                  value={formData.guardianOccupation}
                  onChange={(e) => handleInputChange("guardianOccupation", e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="guardianContact" className={styles.label}>
                  Contact No *
                </label>
                <input
                  type="text"
                  id="guardianContact"
                  value={formData.guardianContact}
                  onChange={(e) => handleInputChange("guardianContact", e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Last School/College */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🏫 Last School/College Attended</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="lastInstitution" className={styles.label}>
                  Name of Institution *
                </label>
                <input
                  type="text"
                  id="lastInstitution"
                  value={formData.lastInstitution}
                  onChange={(e) => handleInputChange("lastInstitution", e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastInstitutionPlace" className={styles.label}>
                  Place & Year of Study
                </label>
                <input
                  type="text"
                  id="lastInstitutionPlace"
                  value={formData.lastInstitutionPlace}
                  onChange={(e) => handleInputChange("lastInstitutionPlace", e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastInstitutionYear" className={styles.label}>
                  Year of Study
                </label>
                <input
                  type="text"
                  id="lastInstitutionYear"
                  value={formData.lastInstitutionYear}
                  onChange={(e) => handleInputChange("lastInstitutionYear", e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>💳 Payment Details</h2>
            <div className={styles.paymentNote}>
              💡 Note: Please pay the application fee of ₹1000 via any mode and enter the payment reference below.
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="paymentMode" className={styles.label}>
                  ✅ Payment Mode *
                </label>
                <select
                  id="paymentMode"
                  value={formData.paymentMode}
                  onChange={(e) => handleInputChange("paymentMode", e.target.value)}
                  required
                  className={styles.select}
                >
                  <option value="">Select Payment Mode</option>
                  <option value="UPI / GPay / PhonePe">UPI / GPay / PhonePe</option>
                  <option value="NEFT / Bank Transfer">NEFT / Bank Transfer</option>
                  <option value="Cash Deposit">Cash Deposit</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="paymentReference" className={styles.label}>
                  ✅ Payment Reference Number *
                </label>
                <input
                  type="text"
                  id="paymentReference"
                  value={formData.paymentReference}
                  onChange={(e) => handleInputChange("paymentReference", e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="amount" className={styles.label}>
                  ❌ Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  value="₹1000"
                  readOnly
                  className={`${styles.input} ${styles.readOnly}`}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="paymentDate" className={styles.label}>
                  🗓️ Payment Date
                </label>
                <input
                  type="date"
                  id="paymentDate"
                  value={formData.paymentDate}
                  readOnly
                  className={`${styles.input} ${styles.readOnly}`}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="paymentProof" className={styles.label}>
                  📎 Upload Payment Proof (PDF only) *
                </label>
                <input
                  type="file"
                  id="paymentProof"
                  accept=".pdf"
                  onChange={(e) => handleFileChange("paymentProof", e.target.files?.[0] || null)}
                  required
                  className={styles.fileInput}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Educational Qualification */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>📚 Educational Qualification</h2>
          </div>
          <div className={styles.sectionContent}>
            {/* SSLC / 10th */}
            <div className={styles.educationSection}>
              <h3 className={styles.subTitle}>SSLC / 10th</h3>
              <div className={styles.grid}>
                <div className={styles.formGroup}>
                  <label htmlFor="sslcSchool" className={styles.label}>
                    School Name *
                  </label>
                  <input
                    type="text"
                    id="sslcSchool"
                    value={formData.sslcSchool}
                    onChange={(e) => handleInputChange("sslcSchool", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="sslcYear" className={styles.label}>
                    Year of Passing *
                  </label>
                  <input
                    type="text"
                    id="sslcYear"
                    value={formData.sslcYear}
                    onChange={(e) => handleInputChange("sslcYear", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="sslcMarks" className={styles.label}>
                    Marks *
                  </label>
                  <input
                    type="text"
                    id="sslcMarks"
                    value={formData.sslcMarks}
                    onChange={(e) => handleInputChange("sslcMarks", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="sslcBoard" className={styles.label}>
                    Board *
                  </label>
                  <input
                    type="text"
                    id="sslcBoard"
                    value={formData.sslcBoard}
                    onChange={(e) => handleInputChange("sslcBoard", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="sslcAttempts" className={styles.label}>
                    Number of Attempts
                  </label>
                  <select
                    id="sslcAttempts"
                    value={formData.sslcAttempts}
                    onChange={(e) => handleInputChange("sslcAttempts", e.target.value)}
                    className={styles.select}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* HSC / 12th */}
            <div className={styles.educationSection}>
              <h3 className={styles.subTitle}>HSC / 12th</h3>
              <div className={styles.grid}>
                <div className={styles.formGroup}>
                  <label htmlFor="hscSchool" className={styles.label}>
                    School Name *
                  </label>
                  <input
                    type="text"
                    id="hscSchool"
                    value={formData.hscSchool}
                    onChange={(e) => handleInputChange("hscSchool", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="hscYear" className={styles.label}>
                    Year of Passing *
                  </label>
                  <input
                    type="text"
                    id="hscYear"
                    value={formData.hscYear}
                    onChange={(e) => handleInputChange("hscYear", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="hscMarks" className={styles.label}>
                    Marks *
                  </label>
                  <input
                    type="text"
                    id="hscMarks"
                    value={formData.hscMarks}
                    onChange={(e) => handleInputChange("hscMarks", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="hscBoard" className={styles.label}>
                    Board *
                  </label>
                  <input
                    type="text"
                    id="hscBoard"
                    value={formData.hscBoard}
                    onChange={(e) => handleInputChange("hscBoard", e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="hscAttempts" className={styles.label}>
                    Number of Attempts
                  </label>
                  <select
                    id="hscAttempts"
                    value={formData.hscAttempts}
                    onChange={(e) => handleInputChange("hscAttempts", e.target.value)}
                    className={styles.select}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Qualifications */}
            <div className={styles.educationSection}>
              <h3 className={styles.subTitle}>Additional Qualifications (if any)</h3>
              <div className={styles.formGroup}>
                <textarea
                  value={formData.additionalQualification}
                  onChange={(e) => handleInputChange("additionalQualification", e.target.value)}
                  placeholder="Enter any additional qualifications..."
                  rows={3}
                  className={styles.textarea}
                />
              </div>
            </div>

            {/* Document Uploads */}
            <div className={styles.uploadSection}>
              <h3 className={styles.subTitle}>📎 Upload Documents:</h3>
              <div className={styles.grid}>
                <div className={styles.formGroup}>
                  <label htmlFor="tenthMarksheet" className={styles.label}>
                    10th Marksheet (PDF) *
                  </label>
                  <input
                    type="file"
                    id="tenthMarksheet"
                    accept=".pdf"
                    onChange={(e) => handleFileChange("tenthMarksheet", e.target.files?.[0] || null)}
                    required
                    className={styles.fileInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="twelfthMarksheet" className={styles.label}>
                    12th Marksheet (PDF) *
                  </label>
                  <input
                    type="file"
                    id="twelfthMarksheet"
                    accept=".pdf"
                    onChange={(e) => handleFileChange("twelfthMarksheet", e.target.files?.[0] || null)}
                    required
                    className={styles.fileInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="communityCertificate" className={styles.label}>
                    Community Certificate (PDF)
                  </label>
                  <input
                    type="file"
                    id="communityCertificate"
                    accept=".pdf"
                    onChange={(e) => handleFileChange("communityCertificate", e.target.files?.[0] || null)}
                    className={styles.fileInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="eligibilityCertificate" className={styles.label}>
                    Eligibility Certificate (PDF)
                  </label>
                  <input
                    type="file"
                    id="eligibilityCertificate"
                    accept=".pdf"
                    onChange={(e) => handleFileChange("eligibilityCertificate", e.target.files?.[0] || null)}
                    className={styles.fileInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="passportPhoto" className={styles.label}>
                    Passport Size Photo (JPG only) *
                  </label>
                  <input
                    type="file"
                    id="passportPhoto"
                    accept=".jpg,.jpeg"
                    onChange={(e) => handleFileChange("passportPhoto", e.target.files?.[0] || null)}
                    required
                    className={styles.fileInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🔶 Bank Details (Static Info at Bottom)</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.bankDetails}>
              <h3 className={styles.subTitle}>Account for Payment:</h3>
              <div className={styles.bankInfo}>
                <p>
                  <strong>Account Name:</strong> Apex Hospital
                </p>
                <p>
                  <strong>Bank Name:</strong> State Bank of India
                </p>
                <p>
                  <strong>Account No.:</strong> 2573736373
                </p>
                <p>
                  <strong>IFSC Code:</strong> CDEXXXXXX
                </p>
                <p>
                  <strong>Branch Code:</strong> (Optional)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Declaration & Submit */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>📋 Declaration & Submit</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.enclosures}>
              <h3 className={styles.subTitle}>✅ List of Enclosures (shown as summary at end):</h3>
              <ul className={styles.enclosureList}>
                <li>10th & 12th Marksheet</li>
                <li>Community Certificate</li>
                <li>Eligibility Certificate</li>
                <li>Payment Proof</li>
                <li>Passport Size Photo</li>
              </ul>
            </div>

            <div className={styles.submitSection}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""}`}
              >
                {isSubmitting ? "Submitting..." : "✅ Submit Button"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
