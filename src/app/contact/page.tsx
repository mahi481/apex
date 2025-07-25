"use client"
import { useState } from "react"
import type React from "react"

import { MapPin, Phone, Mail, Clock, User, MessageSquare } from "lucide-react"
import styles from "./page.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setMessage(result.message)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Contact Us</h1>
          <p>Get in touch with us for any inquiries, appointments, or feedback</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h2>Get in Touch</h2>
              <p>
                We're here to help you with all your healthcare needs. Reach out to us through any of the following
                ways:
              </p>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Address</h3>
                  <p>
                    Apex Hospital
                    <br />
                    Medical Complex, Station Road
                    <br />
                    Solapur, Maharashtra 413001
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Phone Numbers</h3>
                  <p>
                    Main: +91-9876543210
                    <br />
                    Emergency: +91-9876543211
                    <br />
                    Appointments: +91-9876543212
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Email</h3>
                  <p>
                    General: info@apexhospital.com
                    <br />
                    Appointments: appointments@apexhospital.com
                    <br />
                    Emergency: emergency@apexhospital.com
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Clock size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Operating Hours</h3>
                  <p>
                    Emergency: 24/7
                    <br />
                    OPD: Monday - Saturday, 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Emergency Only
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.emergencyCard}>
              <h3>Emergency Contact</h3>
              <p>For medical emergencies, call our 24/7 helpline:</p>
              <div className={styles.emergencyNumber}>
                <Phone size={20} />
                <span>+91-9876543211</span>
              </div>
              <p className={styles.emergencyNote}>
                Our emergency team is always ready to provide immediate medical assistance.
              </p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <div className={styles.formCard}>
              <h2>Send us a Message</h2>
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">
                      <Phone size={20} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject *</label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required>
                      <option value="">Select Subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="billing">Billing Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    <MessageSquare size={20} />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Please describe your inquiry or message in detail"
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {message && (
                  <div className={`${styles.message} ${message.includes("success") ? styles.success : styles.error}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
