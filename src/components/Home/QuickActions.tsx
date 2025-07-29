"use client"

import Link from "next/link"
import { Stethoscope, Calendar, Phone, User } from "lucide-react"
import { useState } from "react"
import styles from "./QuickActions.module.css"

export default function QuickActions() {
  const [showTooltip, setShowTooltip] = useState(false)

  const actions = [
    {
      title: "Book Appointment",
      href: "/appointment",
      icon: <Calendar size={28} />,
      className: styles.bookAppointment,
    },
    {
      title: "Emergency Contact",
      href: "tel:+919876543210",
      icon: <Phone size={28} />,
      className: styles.emergency,
      isEmergency: true,
    },
     {
      title: "Health Checkup",
      href: "/health-packages",
      icon: <User size={28} />,
      className: styles.findDoctor,
    },
     {
      title: "Find Doctor",
      href: "/doctors",
      icon: <Stethoscope size={28} />,
      className: styles.findDoctor,
    },
  ]

  return (
    <section className={styles.quickActions}>
      <div className="container">
        <div className={styles.grid}>
          {actions.map((action) => (
            <div key={action.title} className={styles.actionWrapper}>
              <Link
                href={action.href}
                className={`${styles.card} ${action.className}`}
                onMouseEnter={() => action.isEmergency && setShowTooltip(true)}
                onMouseLeave={() => action.isEmergency && setShowTooltip(false)}
              >
                <div className={styles.icon}>{action.icon}</div>
                <h3>{action.title}</h3>
              </Link>

              {action.isEmergency && showTooltip && (
                <div className={styles.emergencyTooltip}>
                  <div className={styles.tooltipContent}>
                    <div className={styles.location}>Solapur Emergency</div>
                    <div className={styles.phoneNumber}>+91-9876543210</div>
                    <div className={styles.instruction}>Click to dial</div>
                  </div>
                  <div className={styles.tooltipArrow}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
