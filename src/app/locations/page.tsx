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
          <div className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Apex Hospital Location Map"
                width={600}
                height={400}
                className={styles.mapImage}
              />
              <div className={styles.mapOverlay}>
                <MapPin size={32} />
                <p>Interactive Map</p>
              </div>
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
                    Medical Complex, Station Road
                    <br />
                    Solapur, Maharashtra 413001
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Phone size={20} />
                <div>
                  <strong>Phone Numbers</strong>
                  <p>
                    Main: +91-9876543210
                    <br />
                    Emergency: +91-9876543211
                    <br />
                    Appointments: +91-9876543212
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <p>
                    info@apexhospital.com
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
