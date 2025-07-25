"use client"

import styles from "./page.module.css"

export default function PrayerRoomPage() {
  return (
    <div className={styles.prayerPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1> Prayer Room</h1>
            <p>
              A serene space for spiritual reflection, available to patients, families, and staff of all faiths.
            </p>
          </div>
        </header>

        <section className={styles.infoSection}>
          <h2>Purpose</h2>
          <p>
            We believe healing involves not only the body, but also the mind and soul. Our prayer room offers a peaceful environment
            where visitors can reflect, meditate, or pray according to their beliefs.
          </p>
        </section>

        <section className={styles.facilitiesSection}>
          <h2>Facilities</h2>
          <ul>
            <li>Open 24/7 for all visitors</li>
            <li>Clean mats, chairs, and lighting for all needs</li>
            <li>Quiet, respectful atmosphere with minimal distractions</li>
            <li>Space for private or group prayer</li>
            <li>Accessible for people with disabilities</li>
          </ul>
        </section>

        <section className={styles.guidelinesSection}>
          <h2>Guidelines</h2>
          <ul>
            <li>Please maintain silence at all times</li>
            <li>Respect all faiths and beliefs</li>
            <li>Remove footwear before entering the room</li>
            <li>No photography or mobile use allowed</li>
            <li>Clean up after use</li>
          </ul>
        </section>

        <footer className={styles.footerNote}>
          <p>Location: Ground Floor, Block B (next to Main Lobby)</p>
          <p>For any assistance, please contact the front desk at <strong>+91-9876543210</strong></p>
        </footer>
      </div>
    </div>
  )
}
