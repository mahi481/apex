"use client"
import { useState } from "react"
import type React from "react"
import { Calendar, Clock, User, Stethoscope, MessageSquare, Mail, Phone } from "lucide-react"
import styles from "./page.module.css"

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const departments = [
    "Cardiology",
    "Neurology",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "ENT",
    "Ophthalmology",
    "Psychiatry",
  ]

  const doctors = {
    Cardiology: ["Dr. Rajesh Kumar", "Dr. Priya Sharma", "Dr. Amit Patel"],
    Neurology: ["Dr. Sunita Rao", "Dr. Vikram Singh", "Dr. Meera Joshi"],
    Oncology: ["Dr. Ravi Gupta", "Dr. Kavita Nair", "Dr. Suresh Reddy"],
    // Add more doctors for other departments
  }

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "department" && { doctor: "" }),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success || response.status === 200) {
        setMessage(result.message || "Appointment booked successfully!")
        setFormData({
          name: "",
          age: "",
          email: "",
          phone: "",
          gender: "",
          department: "",
          doctor: "",
          date: "",
          time: "",
          reason: "",
        })
      } else {
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Failed to book appointment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.appointmentPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Book an Appointment</h1>
          <p>Schedule your visit with our expert doctors</p>
        </div>

        <div className={styles.appointmentContent}>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.appointmentForm}>
              <div className={styles.formGrid}>

                {/* Name */}
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

                {/* Age */}
                <div className={styles.formGroup}>
                  <label htmlFor="age">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="120"
                    placeholder="Enter your age"
                  />
                </div>

                {/* Email (NEW FIELD) */}
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

                {/* Phone (with 10-digit validation) */}
<div className={styles.formGroup}>
  <label htmlFor="phone">
    <Phone size={20} />
    Phone *
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    required
    placeholder="Enter your phone number"
    pattern="\d{10}"
    title="Please enter a valid 10-digit phone number"
  />
</div>



                {/* Gender */}
                <div className={styles.formGroup}>
                  <label htmlFor="gender">Gender *</label>
                  <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Department */}
                <div className={styles.formGroup}>
                  <label htmlFor="department">
                    <Stethoscope size={20} />
                    Department *
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor */}
                <div className={styles.formGroup}>
                  <label htmlFor="doctor">Select Doctor *</label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    required
                    disabled={!formData.department}
                  >
                    <option value="">Select Doctor</option>
                    {formData.department &&
                      doctors[formData.department as keyof typeof doctors]?.map((doctor) => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Date */}
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

                {/* Time */}
                <div className={styles.formGroup}>
                  <label htmlFor="time">
                    <Clock size={20} />
                    Preferred Time *
                  </label>
                  <select id="time" name="time" value={formData.time} onChange={handleInputChange} required>
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reason */}
              <div className={styles.formGroup}>
                <label htmlFor="reason">
                  <MessageSquare size={20} />
                  Reason for Visit
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please describe your symptoms or reason for visit (optional)"
                />
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Booking..." : "Book Appointment"}
              </button>

              {message && (
                <div className={`${styles.message} ${message.includes("success") ? styles.success : styles.error}`}>
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* Right Info Section (unchanged) */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3>Appointment Guidelines</h3>
              <ul>
                <li>Please arrive 15 minutes before your scheduled time</li>
                <li>Bring your ID proof and previous medical records</li>
                <li>Consultation fee is payable at the time of visit</li>
                <li>For emergency cases, call our 24/7 helpline</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>Contact Information</h3>
              <div className={styles.contactDetails}>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Email:</strong> appointments@apexhospital.com</p>
                <p><strong>Address:</strong> Apex Hospital, Solapur, Maharashtra</p>
                <p><strong>Hours:</strong> Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AppointmentPage
