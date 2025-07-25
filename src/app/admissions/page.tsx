import { FileText, Clock, CreditCard, Bed, Phone, CheckCircle } from "lucide-react"
import styles from "./page.module.css"

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      step: 1,
      title: "Doctor's Recommendation",
      description: "Get admission recommendation from your consulting doctor",
      icon: <FileText size={24} />,
    },
    {
      step: 2,
      title: "Admission Desk",
      description: "Visit the admission desk with required documents",
      icon: <Bed size={24} />,
    },
    {
      step: 3,
      title: "Documentation",
      description: "Complete admission forms and provide necessary documents",
      icon: <CheckCircle size={24} />,
    },
    {
      step: 4,
      title: "Payment & Insurance",
      description: "Complete payment formalities or insurance verification",
      icon: <CreditCard size={24} />,
    },
  ]

  const requiredDocuments = [
    "Valid Photo ID (Aadhar Card, Passport, Driving License)",
    "Insurance Card (if applicable)",
    "Previous medical records and reports",
    "Doctor's referral letter",
    "Emergency contact information",
    "List of current medications",
  ]

  return (
    <div className={styles.admissionsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Hospital Admissions</h1>
          <p>Complete guide to hospital admission procedures and requirements</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Admission Process</h2>
            <div className={styles.stepsGrid}>
              {admissionSteps.map((step) => (
                <div key={step.step} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Required Documents</h2>
            <div className={styles.documentsCard}>
              <ul className={styles.documentsList}>
                {requiredDocuments.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Admission Timings</h2>
            <div className={styles.timingsCard}>
              <div className={styles.timing}>
                <Clock size={20} />
                <div>
                  <h3>Regular Admissions</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className={styles.timing}>
                <Phone size={20} />
                <div>
                  <h3>Emergency Admissions</h3>
                  <p>24/7 Available</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Contact Information</h2>
            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <div>
                  <h3>Admission Desk</h3>
                  <p>+91-9876543212</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <div>
                  <h3>Emergency</h3>
                  <p>+91-9876543211</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
