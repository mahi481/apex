"use client"

import {
  Pill,
  Clock,
  Truck,
  Phone,
  CheckCircle,
  AlertCircle,
  Heart,
  Shield,
} from "lucide-react"
import styles from "./page.module.css"

export default function PharmacyPage() {
  const services = [
    {
      title: "24/7 Availability",
      description: "Get essential medications any time, day or night, with expert pharmacist support.",
      icon: <Clock size={28} />,
    },
    {
      title: "Home Delivery",
      description: "Free delivery for medicines and medical supplies within 10 km of the hospital.",
      icon: <Truck size={28} />,
    },
    {
      title: "Medication Counseling",
      description: "Clear guidance on correct dosage, timing, and interactions for all medications.",
      icon: <Heart size={28} />,
    },
    {
      title: "Insurance Claims",
      description: "Seamless processing of health insurance claims directly from our pharmacy.",
      icon: <Shield size={28} />,
    },
  ]

  const medications = [
    {
      category: "Emergency Medicines",
      availability: "Always Stocked",
      status: "available",
    },
    {
      category: "Prescription Drugs",
      availability: "Available with Valid Prescription",
      status: "available",
    },
    {
      category: "Over-the-Counter (OTC)",
      availability: "No Prescription Needed",
      status: "available",
    },
    {
      category: "Surgical Supplies",
      availability: "Available On Request",
      status: "available",
    },
    {
      category: "Medical Equipment",
      availability: "Available for Rent & Purchase",
      status: "available",
    },
  ]

  return (
    <div className={styles.pharmacyPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            src="/images/pharmacy.jpg"
            alt="Hospital Pharmacy Banner"
            className={styles.bannerImage}
          />
          <div className={styles.headerContent}>
            <h1>
              <Pill size={40} /> Hospital Pharmacy
            </h1>
            <p>
              Delivering trusted, safe, and fast pharmaceutical care around the clock.
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <h2>Our Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Medication Categories</h2>
          <div className={styles.medicationsGrid}>
            {medications.map((med, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.statusIcon}>
                  {med.status === "available" ? (
                    <CheckCircle size={22} className={styles.available} />
                  ) : (
                    <AlertCircle size={22} className={styles.unavailable} />
                  )}
                </div>
                <h3>{med.category}</h3>
                <p>{med.availability}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.contactCard}>
            <Phone size={28} />
            <h3>Need Help?</h3>
            <p>Call our pharmacy team for queries, refills, and deliveries.</p>
            <div>
              <p><strong>Phone:</strong> +91-9876543210</p>
              <p><strong>Hours:</strong> 24/7 Available</p>
              <p><strong>Delivery:</strong> Free within 10 km</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
