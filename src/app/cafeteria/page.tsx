"use client"
import React from "react"
import styles from "./page.module.css"
import { UtensilsCrossed } from "lucide-react"
import Image from "next/image"

const Cafeteria = () => {
  return (
    <div className={styles.cafeteriaSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/food.jpg" // ⬅️ Make sure this image exists in your public/images folder
            alt="Hospital Cafeteria"
            width={900}
            height={400}
            className={styles.cafeteriaImage}
          />
        </div>

        <div className={styles.header}>
          <h1><UtensilsCrossed size={34} /> Hospital Cafeteria</h1>
          <p>Nutritious, hygienic, and affordable meals for patients, visitors, and staff.</p>
        </div>

        <div className={styles.info}>
          <p>
            Our cafeteria offers a variety of healthy meal options prepared fresh daily. We maintain high hygiene standards and provide a comfortable seating area for families and staff members.
          </p>
        </div>

        <div className={styles.features}>
          <ul>
            <li>Vegetarian & Non-Vegetarian meals</li>
            <li>Snacks, beverages, and fresh juices</li>
            <li>Affordable pricing and combo meals</li>
            <li>Open 7 AM – 10 PM</li>
            <li>Indoor & outdoor seating available</li>
          </ul>
        </div>

        <div className={styles.contactNote}>
          For bulk or special meal orders, please contact: <strong>+91-9876543210</strong>
        </div>
      </div>
    </div>
  )
}

export default Cafeteria
