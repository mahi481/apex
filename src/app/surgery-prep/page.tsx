import { Stethoscope, Clock, Heart, AlertCircle } from "lucide-react"
import styles from "./page.module.css"

export default function SurgeryPrepPage() {
  const preOpInstructions = [
    {
      title: "24 Hours Before Surgery",
      instructions: [
        "Stop eating solid foods after midnight",
        "Take prescribed medications as directed",
        "Arrange for someone to drive you home",
        "Get a good night's sleep",
        "Remove nail polish and jewelry",
      ],
    },
    {
      title: "Day of Surgery",
      instructions: [
        "Arrive at the hospital 2 hours early",
        "Bring your ID and insurance cards",
        "Wear comfortable, loose-fitting clothes",
        "Do not eat or drink anything",
        "Take only approved medications",
      ],
    },
  ]

  const whatToBring = [
    "Photo identification",
    "Insurance cards",
    "List of current medications",
    "Advance directives (if applicable)",
    "Comfortable clothes for going home",
    "Personal items (glasses, hearing aids)",
  ]

  return (
    <div className={styles.surgeryPrepPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <Stethoscope size={40} />
            Preparing for Surgery
          </h1>
          <p>Important information to help you prepare for your surgical procedure</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Pre-Operative Instructions</h2>
            <div className={styles.instructionsGrid}>
              {preOpInstructions.map((period, index) => (
                <div key={index} className={styles.instructionCard}>
                  <h3>{period.title}</h3>
                  <ul>
                    {period.instructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>What to Bring</h2>
            <div className={styles.bringCard}>
              <ul className={styles.bringList}>
                {whatToBring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Important Reminders</h2>
            <div className={styles.remindersGrid}>
              <div className={styles.reminderCard}>
                <AlertCircle size={24} />
                <h3>Medications</h3>
                <p>Inform your surgeon about all medications, supplements, and herbal remedies you are taking.</p>
              </div>
              <div className={styles.reminderCard}>
                <Heart size={24} />
                <h3>Medical Conditions</h3>
                <p>Notify us of any changes in your health condition before surgery.</p>
              </div>
              <div className={styles.reminderCard}>
                <Clock size={24} />
                <h3>Arrival Time</h3>
                <p>Arrive at the scheduled time. Late arrival may result in surgery postponement.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
