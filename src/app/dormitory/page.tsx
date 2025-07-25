"use client"
import {
  BedDouble,
  Clock,
  ShieldCheck,
  Fan,
  Zap,
  Wifi,
  Smile,
  Phone
} from "lucide-react"
import styles from "./page.module.css"

export default function DormitoryPage() {
  const features = [
    { title: "24/7 Monitoring", icon: <Clock size={28} />, desc: "Staff available round-the-clock for patient support" },
    { title: "Clean & Hygienic", icon: <ShieldCheck size={28} />, desc: "Regularly sanitized rooms for maximum hygiene" },
    { title: "Air Conditioning", icon: <Fan size={28} />, desc: "Well-ventilated dorms with air conditioning" },
    { title: "Power Backup", icon: <Zap size={28} />, desc: "Uninterrupted power supply for patient comfort" },
    { title: "Wi-Fi Access", icon: <Wifi size={28} />, desc: "High-speed internet for patients and caregivers" },
    { title: "Comfortable Beds", icon: <BedDouble size={28} />, desc: "Ergonomic beds designed for recovery" },
  ]

  return (
    <div className={styles.dormitoryPage}>
      <div className="container">
        <header className={styles.header}>
          <img
            src="/images/dormitory.jpg"
            alt="Dormitory Room"
            className={styles.heroImage}
          />
          <div className={styles.headerText}>
            <h1> Hospital Dormitory</h1>
            <p>Safe, clean, and comfortable shared accommodation for patients and their families.</p>
          </div>
        </header>

        <section className={styles.featuresSection}>
          <h2>Key Features</h2>
          <div className={styles.grid}>
            {features.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.infoSection}>
          <Smile size={32} />
          <h3>Affordable Stay for Every Patient</h3>
          <p>
            Our dormitory is designed for patients seeking economical yet quality accommodation during treatment.
            Facilities are patient-centric, ensuring restful recovery and ease for caregivers.
          </p>
        </section>

        {/* ✅ Room Booking Contact Section */}
        <section className={styles.contactSection}>
          <Phone size={28} />
          <h3>Room Booking Contact</h3>
          <p>For room booking, please call: <strong>+91 98765 43210</strong></p>
        </section>

      </div>
    </div>
  )
}
