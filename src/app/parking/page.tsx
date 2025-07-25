"use client"
import React from "react"
import Image from "next/image"
import styles from "./page.module.css"
import { ParkingCircle } from "lucide-react"

const Parking = () => {
  return (
    <div className={styles.parkingSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/parking.png"  // ⬅️ Add this image in /public/images/
            alt="Hospital Parking"
            width={900}
            height={400}
            className={styles.parkingImage}
          />
        </div>

        <div className={styles.header}>
          <h1><ParkingCircle size={32} /> Hospital Parking</h1>
          <p>Spacious and secure parking available 24/7 for patients and visitors.</p>
        </div>

        <div className={styles.details}>
          <ul>
            <li><strong>Location:</strong> Basement & Ground Floor Zones</li>
            <li><strong>Capacity:</strong> 100+ vehicles (2 & 4 wheelers)</li>
            <li><strong>Timing:</strong> Open 24 Hours</li>
            <li><strong>Security:</strong> CCTV & Guard Patrolling</li>
            <li><strong>Accessibility:</strong> Wheelchair-friendly parking bays</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Parking
