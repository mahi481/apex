import Image from "next/image"
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react"
import styles from "./page.module.css"

export default function LocationsPage() {
  return (
    <div className={styles.locationsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Our Location</h1>
          <p>Conveniently located in the heart of Solapur, Maharashtra</p>
        </div>

        <div className={styles.locationContent}>
          <div className={styles.mapContainer}>
            <div className={styles.responsiveMap}>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.395279856629!2d75.8945497751705!3d17.63142798329793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da11b8128a47%3A0x2af0cc226d7c6ea6!2sApex%20Hospital!5e0!3m2!1sen!2sin!4v1753784306207!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2>Apex Hospital</h2>
              <div className={styles.infoItem}>
                <MapPin size={20} />
                <div>
                  <strong>Address</strong>
                  <p>
                   Plot No 1 and 6, Vijapur Rd, opp. to Galaxy Panache, Yamini Nagar, Swami Vivekanand Nagar 2, Solapur, Maharashtra 413007
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Phone size={20} />
                <div>
                  <strong>Phone Numbers</strong>
                  <p>
                    Main: 0217 260 0603
                    <br />
                    Emergency: +91-9876543211
                   
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <p>
                    apexhospital777@gmail.com
                    <br />
                    appointments@apexhospital.com
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock size={20} />
                <div>
                  <strong>Operating Hours</strong>
                  <p>
                    Emergency: 24/7
                    <br />
                    OPD: Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                    <br />
                    Sunday: Emergency Only
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Navigation size={20} />
                <div>
                  <strong>Directions</strong>
                  <p>
                    Located near Solapur Railway Station
                    <br />
                    Easy access from all major roads
                    <br />
                    Ample parking available
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.facilitiesCard}>
              <h3>Hospital Facilities</h3>
              <ul>
                <li>500+ Bed Capacity</li>
                <li>24/7 Emergency Services</li>
                <li>Advanced ICU & NICU</li>
                <li>Modern Operation Theaters</li>
                <li>Diagnostic & Imaging Center</li>
                <li>Pharmacy & Lab Services</li>
                <li>Cafeteria & Waiting Areas</li>
                <li>Free Parking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

