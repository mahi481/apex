"use client"

import styles from "./page.module.css"

export default function WheelchairSupport() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <h1>🦽 Wheelchair Support Services</h1>
        <p>Comfortable mobility assistance for patients and visitors.</p>
      </header>

      <main className={styles.content}>
        <section className={styles.description}>
          <h2>Why Choose Our Wheelchair Services?</h2>
          <ul>
            <li>24/7 availability for emergency and regular cases</li>
            <li>Dedicated support staff for safe movement</li>
            <li>Clean, sanitized, and well-maintained wheelchairs</li>
            <li>Easy access to all departments and rooms</li>
          </ul>
        </section>

        <section className={styles.contact}>
          <h2>📞 Book Wheelchair Support</h2>
          <p>You can reach us anytime for assistance:</p>
          <div className={styles.contactBox}>
            <p><strong>Emergency Support:</strong> Call Extension 2345</p>
            <p><strong>Advance Booking:</strong> +91-9876543210</p>
            <p><strong>Alternate Contact:</strong> +91-9123456789</p>
            <p><strong>Service Hours:</strong> 24x7 Available</p>
          </div>
        </section>
      </main>
    </div>
  )
}
