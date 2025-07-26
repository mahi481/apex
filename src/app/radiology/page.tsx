"use client"
import React from "react"
import Image from "next/image"
import styles from "./page.module.css"
import { Stethoscope } from "lucide-react"

const Radiology = () => {
  return (
    <section className={styles.radiologySection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/radio.jpg"
            alt="Radiology Department"
            width={1000}
            height={400}
            className={styles.radiologyImage}
          />
        </div>

        <div className={styles.text}>
          <h2><Stethoscope size={28} /> Radiology Department</h2>
          <p>
            Our Radiology Department provides reliable and accurate diagnostic imaging for patients of all ages. With a focus on safety, comfort, and efficiency, we help doctors make faster, more informed decisions.
          </p>
          <p>
            We maintain a clean, modern environment with trained technicians and radiologists working together to deliver high-quality care. All images are reviewed thoroughly to ensure diagnostic clarity.
          </p>

          <ul className={styles.features}>
            <li>✅ Comprehensive diagnostic imaging services</li>
            <li>✅ Accredited and experienced radiologists</li>
            <li>✅ Digital reporting & fast turnaround times</li>
            <li>✅ 24/7 emergency imaging support</li>
            <li>✅ Clean, safe and patient-friendly imaging suites</li>
            <li>✅ Coordination with your consulting physician</li>
            <li>✅ Reports can be collected at the front desk</li>
          </ul>

          <p className={styles.contactNote}>
            For radiology-related queries or appointments, please call us at <strong>+91-9876543210</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Radiology
