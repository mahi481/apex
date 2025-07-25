import { Award, Users, Clock, Shield } from "lucide-react"
import styles from "./WhyChooseUs.module.css"

const highlights = [
  {
    icon: <Award size={36} />,
    title: "Award-Winning Care",
    text: "Recognized for excellence in patient care and medical innovation.",
    color: styles.primary,
  },
  {
    icon: <Users size={36} />,
    title: "Expert Medical Team",
    text: "Highly qualified doctors and healthcare professionals.",
    color: styles.secondary,
  },
  {
    icon: <Clock size={36} />,
    title: "24/7 Emergency",
    text: "Round-the-clock emergency services and critical care.",
    color: styles.tertiary,
  },
  {
    icon: <Shield size={36} />,
    title: "Advanced Technology",
    text: "State-of-the-art medical equipment and facilities.",
    color: styles.quaternary,
  },
]

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className="container">
        <div className={styles.header}>
          <h2>Why Choose Apex Hospital?</h2>
          <p>Your health and well-being are our top priorities</p>
        </div>

        <div className={styles.grid}>
          {highlights.map((item) => (
            <div key={item.title} className={`${styles.card} ${item.color}`}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
