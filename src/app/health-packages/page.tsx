"use client"
import { useState } from "react"
import type React from "react"

import { Check, Calendar, User, Mail, Phone, MessageSquare } from "lucide-react"
import styles from "./page.module.css"

const healthPackages = [
  {
    name: "Basic Health Checkup",
    price: "₹2,999",
    duration: "2-3 hours",
    tests: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting)",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile",
      "ECG",
      "Chest X-Ray",
      "General Physical Examination",
    ],
  },
  {
    name: "Comprehensive Health Checkup",
    price: "₹5,999",
    duration: "Half day",
    tests: [
      "All Basic Health Checkup tests",
      "HbA1c (Diabetes)",
      "Vitamin D3",
      "Vitamin B12",
      "Iron Studies",
      "Urine Analysis",
      "Stool Analysis",
      "2D Echo",
      "Ultrasound Abdomen",
      "Consultation with Physician",
    ],
  },
  {
    name: "Executive Health Checkup",
    price: "₹9,999",
    duration: "Full day",
    tests: [
      "All Comprehensive tests",
      "Stress Test (TMT)",
      "Pulmonary Function Test",
      "Bone Density Scan",
      "Tumor Markers",
      "Cardiac Risk Assessment",
      "Nutritionist Consultation",
      "Specialist Consultations",
      "Health Report & Counseling",
    ],
  },
  {
    name: "Women's Health Package",
    price: "₹4,999",
    duration: "Half day",
    tests: [
      "Basic Health Checkup tests",
      "Pap Smear",
      "Mammography",
      "Pelvic Ultrasound",
      "Bone Density",
      "Hormonal Profile",
      "Breast Examination",
      "Gynecologist Consultation",
    ],
  },
  {
    name: "Senior Citizen Package",
    price: "₹7,999",
    duration: "Full day",
    tests: [
      "Comprehensive Health tests",
      "Geriatric Assessment",
      "Memory & Cognitive Test",
      "Balance & Fall Risk",
      "Osteoporosis Screening",
      "Prostate Screening (Men)",
      "Geriatrician Consultation",
      "Physiotherapy Assessment",
    ],
  },
  {
    name: "Diabetes Care Package",
    price: "₹3,999",
    duration: "3-4 hours",
    tests: [
      "HbA1c",
      "Fasting & PP Blood Sugar",
      "Lipid Profile",
      "Kidney Function",
      "Eye Examination",
      "Foot Examination",
      "Diabetic Neuropathy Test",
      "Endocrinologist Consultation",
    ],
  },
]

export default function HealthPackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/health-packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, packageName: selectedPackage }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage(result.message)
        setFormData({ name: "", email: "", mobile: "", date: "", message: "" })
        setSelectedPackage("")
      } else {
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Failed to submit inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.healthPackagesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Health Packages</h1>
          <p>Comprehensive health checkups designed for early detection and prevention</p>
        </div>

        <div className={styles.packagesGrid}>
          {healthPackages.map((pkg) => (
            <div key={pkg.name} className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h3>{pkg.name}</h3>
                <div className={styles.price}>{pkg.price}</div>
                <div className={styles.duration}>{pkg.duration}</div>
              </div>
              <div className={styles.packageContent}>
                <h4>Includes:</h4>
                <ul className={styles.testsList}>
                  {pkg.tests.map((test, index) => (
                    <li key={index}>
                      <Check size={16} />
                      {test}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary" onClick={() => setSelectedPackage(pkg.name)}>
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPackage && (
          <div className={styles.inquiryForm}>
            <div className={styles.formContainer}>
              <h2>Book {selectedPackage}</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">
                      <User size={20} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      <Mail size={20} />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="mobile">
                      <Phone size={20} />
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="date">
                      <Calendar size={20} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    <MessageSquare size={20} />
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any specific requirements or questions (optional)"
                  />
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                  <button type="button" className={styles.cancelBtn} onClick={() => setSelectedPackage("")}>
                    Cancel
                  </button>
                </div>

                {message && (
                  <div className={`${styles.message} ${message.includes("success") ? styles.success : styles.error}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
