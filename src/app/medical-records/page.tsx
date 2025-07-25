"use client"
import React from "react"
import Image from "next/image"
import styles from "./page.module.css"
import { FileText } from "lucide-react"

const MedicalRecords = () => {
  return (
    <section className={styles.recordsSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/medical-records.jpg"
            alt="Medical Records"
            width={1000}
            height={400}
            className={styles.recordImage}
          />
        </div>

        <div className={styles.content}>
          <h2><FileText size={28} /> Medical Records Department</h2>
          <p>
            Our Medical Records Department ensures your health records are kept safe and confidential. You can request copies of your reports or discharge summaries directly from our records desk.
          </p>

          <h3>📋 How to Request Your Records:</h3>
          <ol className={styles.steps}>
            <li>Visit the Medical Records counter at the hospital</li>
            <li>Provide your patient ID or discharge slip</li>
            <li>Fill out a simple request form</li>
            <li>Allow 24-48 hours for processing</li>
            <li>Collect your documents in person with valid ID</li>
          </ol>

          <p className={styles.note}>
            For any assistance, please call our Records Helpdesk at <strong>+91-9123456780</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MedicalRecords
