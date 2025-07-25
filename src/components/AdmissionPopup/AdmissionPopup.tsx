"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import styles from "./AdmissionPopup.module.css"

const AdmissionPopup = () => {
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowPopup(true)
    }, 3000)

    return () => clearTimeout(initialTimer)
  }, [])

  const handleRegisterClick = () => {
    setShowPopup(false)
    router.push("/student-admission") // Navigate to admissions page
  }

  if (!showPopup) return null

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupBox}>
        <h3 className={styles.heading}>
          Apex Institute of Paramedical Sciences
        </h3>
        <p className={styles.message}>
          Admissions Open for Academic Year 2025–26
        </p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={handleRegisterClick}>
            Register Now
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => setShowPopup(false)}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdmissionPopup
