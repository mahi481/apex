import { Bed, Coffee, Car, Wifi, Tv, Phone, Bath, Wind } from "lucide-react"
import styles from "./page.module.css"

export default function AmenitiesPage() {
  const roomAmenities = [
    {
      title: "Private Rooms",
      description: "Comfortable private rooms with modern furnishing and patient-friendly design",
      icon: <Bed size={32} />,
    },
    {
      title: "Air Conditioning",
      description: "Climate-controlled rooms for optimal comfort throughout your stay",
      icon: <Wind size={32} />,
    },
    {
      title: "Television",
      description: "LCD TV with cable channels for entertainment during recovery",
      icon: <Tv size={32} />,
    },
    {
      title: "Private Bathroom",
      description: "Attached bathrooms with hot water and essential amenities",
      icon: <Bath size={32} />,
    },
  ]

  const hospitalAmenities = [
    {
      title: "Cafeteria",
      description: "Multi-cuisine cafeteria serving healthy and nutritious meals",
      icon: <Coffee size={32} />,
    },
    {
      title: "Free WiFi",
      description: "Complimentary high-speed internet access throughout the hospital",
      icon: <Wifi size={32} />,
    },
    {
      title: "Parking",
      description: "Ample parking space for patients and visitors with security",
      icon: <Car size={32} />,
    },
    {
      title: "24/7 Reception",
      description: "Round-the-clock reception and information desk services",
      icon: <Phone size={32} />,
    },
  ]

  return (
    <div className={styles.amenitiesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <Bed size={40} />
            Hospital Amenities
          </h1>
          <p>Comfort and convenience designed around your healthcare needs</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Room Amenities</h2>
            <div className={styles.amenitiesGrid}>
              {roomAmenities.map((amenity, index) => (
                <div key={index} className={styles.amenityCard}>
                  <div className={styles.amenityIcon}>{amenity.icon}</div>
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Hospital Facilities</h2>
            <div className={styles.amenitiesGrid}>
              {hospitalAmenities.map((amenity, index) => (
                <div key={index} className={styles.amenityCard}>
                  <div className={styles.amenityIcon}>{amenity.icon}</div>
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Additional Services</h2>
            <div className={styles.servicesCard}>
              <div className={styles.servicesList}>
                <div className={styles.serviceItem}>
                  <h3>Laundry Service</h3>
                  <p>Professional laundry service for patient clothing and linens</p>
                </div>
                <div className={styles.serviceItem}>
                  <h3>Pharmacy</h3>
                  <p>24/7 in-house pharmacy with all essential medications</p>
                </div>
                <div className={styles.serviceItem}>
                  <h3>ATM Services</h3>
                  <p>ATM facility available in the hospital premises</p>
                </div>
                <div className={styles.serviceItem}>
                  <h3>Wheelchair Assistance</h3>
                  <p>Complimentary wheelchair service for patient mobility</p>
                </div>
                <div className={styles.serviceItem}>
                  <h3>Patient Transport</h3>
                  <p>Internal transport service for patient movement within hospital</p>
                </div>
                <div className={styles.serviceItem}>
                  <h3>Visitor Lounge</h3>
                  <p>Comfortable waiting areas for patient families and visitors</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Room Types</h2>
            <div className={styles.roomTypesGrid}>
              <div className={styles.roomCard}>
                <h3>General Ward</h3>
                <p>Shared accommodation with basic amenities</p>
                <ul>
                  <li>Shared bathroom facilities</li>
                  <li>Basic furniture</li>
                  <li>Nursing care</li>
                  <li>Visitor hours: 4-6 PM</li>
                </ul>
              </div>
              <div className={styles.roomCard}>
                <h3>Semi-Private Room</h3>
                <p>Shared room with enhanced comfort</p>
                <ul>
                  <li>Shared with one other patient</li>
                  <li>TV and AC facilities</li>
                  <li>Attached bathroom</li>
                  <li>Extended visitor hours</li>
                </ul>
              </div>
              <div className={styles.roomCard}>
                <h3>Private Room</h3>
                <p>Individual room with premium amenities</p>
                <ul>
                  <li>Complete privacy</li>
                  <li>All modern amenities</li>
                  <li>Attendant accommodation</li>
                  <li>24/7 visitor access</li>
                </ul>
              </div>
              <div className={styles.roomCard}>
                <h3>Deluxe Suite</h3>
                <p>Luxury accommodation with premium services</p>
                <ul>
                  <li>Spacious suite with living area</li>
                  <li>Premium furnishing</li>
                  <li>Dedicated nursing care</li>
                  <li>Complimentary meals</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
