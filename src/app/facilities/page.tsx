import { Building, Heart, Brain, Microscope, Camera, Pill, TestTube, Bed } from "lucide-react"
import styles from "./page.module.css"

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Advanced Operation Theaters",
      description: "State-of-the-art operation theaters with latest surgical equipment and laminar air flow",
      icon: <Building size={32} />,
      features: [
        "Modular OT design",
        "Advanced anesthesia workstations",
        "Integrated surgical systems",
        "Real-time monitoring",
      ],
    },
    {
      title: "Intensive Care Units",
      description: "Specialized ICU with advanced life support systems and 24/7 monitoring",
      icon: <Heart size={32} />,
      features: ["Multi-parameter monitors", "Ventilator support", "Defibrillators", "Central monitoring station"],
    },
    {
      title: "Emergency Department",
      description: "24/7 emergency services with trauma care and critical care facilities",
      icon: <Brain size={32} />,
      features: ["Trauma bay", "Resuscitation equipment", "Emergency pharmacy", "Ambulance services"],
    },
    {
      title: "Diagnostic Laboratory",
      description: "Comprehensive laboratory services with automated analyzers and quality control",
      icon: <Microscope size={32} />,
      features: ["Biochemistry lab", "Hematology lab", "Microbiology lab", "Pathology services"],
    },
    {
      title: "Radiology & Imaging",
      description: "Advanced imaging services including MRI, CT scan, X-ray, and ultrasound",
      icon: <Camera size={32} />,
      features: ["MRI scanner", "CT scanner", "Digital X-ray", "Ultrasound machines"],
    },
    {
      title: "Pharmacy Services",
      description: "24/7 pharmacy with comprehensive medication management and counseling",
      icon: <Pill size={32} />,
      features: ["24/7 availability", "Drug information", "Medication counseling", "Home delivery"],
    },
  ]

  return (
    <div className={styles.facilitiesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <Building size={40} />
            Hospital Facilities
          </h1>
          <p>Modern medical facilities equipped with cutting-edge technology</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.facilitiesGrid}>
              {facilities.map((facility, index) => (
                <div key={index} className={styles.facilityCard}>
                  <div className={styles.facilityIcon}>{facility.icon}</div>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                  <div className={styles.features}>
                    <h4>Key Features:</h4>
                    <ul>
                      {facility.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Infrastructure Highlights</h2>
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightCard}>
                <Bed size={24} />
                <h3>500+ Bed Capacity</h3>
                <p>Spacious patient rooms with modern amenities</p>
              </div>
              <div className={styles.highlightCard}>
                <TestTube size={24} />
                <h3>NABH Accredited</h3>
                <p>Quality healthcare standards certification</p>
              </div>
              <div className={styles.highlightCard}>
                <Heart size={24} />
                <h3>24/7 Services</h3>
                <p>Round-the-clock medical care and support</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
