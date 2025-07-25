import { Shield, CheckCircle, Users, Award, AlertTriangle, Heart } from "lucide-react"
import styles from "./page.module.css"

export default function PatientSafetyPage() {
  const safetyMeasures = [
    {
      title: "Infection Control",
      description: "Strict hygiene protocols and sterilization procedures to prevent healthcare-associated infections",
      icon: <Shield size={32} />,
    },
    {
      title: "Medication Safety",
      description: "Advanced medication management systems to prevent errors and ensure accurate dosing",
      icon: <CheckCircle size={32} />,
    },
    {
      title: "Patient Identification",
      description: "Multiple verification processes to ensure correct patient identification at all times",
      icon: <Users size={32} />,
    },
    {
      title: "Quality Assurance",
      description: "Continuous monitoring and improvement of care quality through regular audits",
      icon: <Award size={32} />,
    },
  ]

  const safetyPolicies = [
    "Zero tolerance for preventable harm",
    "Mandatory hand hygiene compliance",
    "Double verification for high-risk procedures",
    "Regular safety training for all staff",
    "Incident reporting and analysis system",
    "Patient and family involvement in safety",
  ]

  return (
    <div className={styles.safetyPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <Shield size={40} />
            Patient Safety
          </h1>
          <p>Our unwavering commitment to providing safe, quality healthcare for every patient</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Our Safety Commitment</h2>
            <div className={styles.commitmentCard}>
              <p>
                At Apex Hospital, patient safety is our highest priority. We are committed to providing a safe
                environment where patients receive the highest quality care with minimal risk of harm. Our comprehensive
                safety program encompasses all aspects of patient care, from admission to discharge.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Safety Measures</h2>
            <div className={styles.measuresGrid}>
              {safetyMeasures.map((measure, index) => (
                <div key={index} className={styles.measureCard}>
                  <div className={styles.measureIcon}>{measure.icon}</div>
                  <h3>{measure.title}</h3>
                  <p>{measure.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Safety Policies</h2>
            <div className={styles.policiesCard}>
              <ul className={styles.policiesList}>
                {safetyPolicies.map((policy, index) => (
                  <li key={index}>{policy}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Report Safety Concerns</h2>
            <div className={styles.reportingCard}>
              <AlertTriangle size={32} />
              <div>
                <h3>Patient Safety Hotline</h3>
                <p>
                  If you have any safety concerns or witness any unsafe practices, please report them immediately. Your
                  voice matters in keeping our hospital safe.
                </p>
                <div className={styles.contactInfo}>
                  <p>
                    <strong>Phone:</strong> +91-9876543215
                  </p>
                  <p>
                    <strong>Email:</strong> safety@apexhospital.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Accreditations & Certifications</h2>
            <div className={styles.accreditationsGrid}>
              <div className={styles.accreditationCard}>
                <Award size={24} />
                <h3>NABH Accredited</h3>
                <p>National Accreditation Board for Hospitals & Healthcare Providers</p>
              </div>
              <div className={styles.accreditationCard}>
                <Heart size={24} />
                <h3>ISO 9001:2015</h3>
                <p>Quality Management System Certification</p>
              </div>
              <div className={styles.accreditationCard}>
                <Shield size={24} />
                <h3>JCI Standards</h3>
                <p>Following Joint Commission International safety standards</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
