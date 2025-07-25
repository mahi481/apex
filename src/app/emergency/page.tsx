import { Phone, Clock, MapPin, AlertTriangle, Heart, Ambulance } from "lucide-react"
import styles from "./page.module.css"

export default function EmergencyPage() {
  const emergencyServices = [
    {
      title: "24/7 Emergency Department",
      description: "Round-the-clock emergency medical care with experienced emergency physicians",
      icon: <Clock size={32} />,
    },
    {
      title: "Trauma Center",
      description: "Advanced trauma care for critical injuries and accidents",
      icon: <AlertTriangle size={32} />,
    },
    {
      title: "Cardiac Emergency",
      description: "Specialized cardiac emergency care with immediate intervention",
      icon: <Heart size={32} />,
    },
    {
      title: "Ambulance Service",
      description: "24/7 ambulance service with trained paramedics and life support equipment",
      icon: <Ambulance size={32} />,
    },
  ]

  const emergencyNumbers = [
    { service: "Emergency Helpline", number: "+91-9876543211" },
    { service: "Ambulance Service", number: "+91-9876543210" },
    { service: "Trauma Center", number: "+91-9876543213" },
    { service: "Cardiac Emergency", number: "+91-9876543214" },
  ]

  return (
    <div className={styles.emergencyPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className={styles.emergencyAlert}>
            <AlertTriangle size={40} />
            <h1>Emergency & Urgent Care</h1>
          </div>
          <p>24/7 emergency medical services when you need them most</p>
        </div>

        <div className={styles.emergencyNumbers}>
          <h2>Emergency Contact Numbers</h2>
          <div className={styles.numbersGrid}>
            {emergencyNumbers.map((contact, index) => (
              <div key={index} className={styles.numberCard}>
                <Phone size={24} />
                <div>
                  <h3>{contact.service}</h3>
                  <a href={`tel:${contact.number}`} className={styles.phoneNumber}>
                    {contact.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.servicesSection}>
          <h2>Emergency Services</h2>
          <div className={styles.servicesGrid}>
            {emergencyServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.locationSection}>
          <h2>Emergency Department Location</h2>
          <div className={styles.locationCard}>
            <MapPin size={32} />
            <div>
              <h3>Apex Hospital Emergency Department</h3>
              <p>
                Medical Complex, Station Road
                <br />
                Solapur, Maharashtra 413001
              </p>
              <p className={styles.directions}>
                <strong>Directions:</strong> Main entrance, Ground floor - Follow emergency signs
              </p>
            </div>
          </div>
        </div>

        <div className={styles.whenToVisit}>
          <h2>When to Visit Emergency</h2>
          <div className={styles.conditionsGrid}>
            <div className={styles.conditionCard}>
              <h3>Life-Threatening Conditions</h3>
              <ul>
                <li>Chest pain or heart attack symptoms</li>
                <li>Difficulty breathing</li>
                <li>Severe bleeding</li>
                <li>Loss of consciousness</li>
                <li>Severe burns</li>
                <li>Stroke symptoms</li>
              </ul>
            </div>
            <div className={styles.conditionCard}>
              <h3>Urgent Conditions</h3>
              <ul>
                <li>High fever with severe symptoms</li>
                <li>Severe abdominal pain</li>
                <li>Broken bones</li>
                <li>Deep cuts requiring stitches</li>
                <li>Severe allergic reactions</li>
                <li>Eye injuries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
