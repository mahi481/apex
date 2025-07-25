"use client"
import { useState } from "react"
import Link from "next/link"
import { MessageCircle, Stethoscope, Calendar, Phone, X } from "lucide-react"
import styles from "./StickyElements.module.css"

const StickyElements = () => {
  const [showEmergencyPopup, setShowEmergencyPopup] = useState(false)

  return (
    <>
      {/* Sticky Bottom Buttons */}
      <div className={styles.stickyBottom}>
        <Link href="/doctors" className={styles.stickyBtn}>
          <Stethoscope size={20} />
          <span>Find Doctor</span>
        </Link>
        <Link href="/appointment" className={styles.stickyBtn}>
          <Calendar size={20} />
          <span>Book Appointment</span>
        </Link>
      </div>

      {/* Floating Chat Button */}
      <Link href="/appointment" className={styles.chatButton}>
        <MessageCircle size={24} />
        <span className={styles.chatTooltip}>Click to Book Appointment</span>
      </Link>

      {/* Emergency Contact Popup */}
      {showEmergencyPopup && (
        <div className={styles.emergencyPopup}>
          <div className={styles.popupContent}>
            <button className={styles.closeBtn} onClick={() => setShowEmergencyPopup(false)}>
              <X size={20} />
            </button>
            <h3>24/7 Emergency Contact</h3>
            <div className={styles.emergencyContacts}>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <div>
                  <strong>Emergency Helpline</strong>
                  <p>+91-9876543210</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <div>
                  <strong>Ambulance Service</strong>
                  <p>+91-9876543211</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <div>
                  <strong>Reception</strong>
                  <p>+91-9876543212</p>
                </div>
              </div>
            </div>
            <Link href="/appointment" className="btn-primary">
              Book Emergency Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default StickyElements
