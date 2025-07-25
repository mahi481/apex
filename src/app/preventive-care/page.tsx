import { Shield, Heart, Activity, Calendar, CheckCircle, Users } from "lucide-react"
import styles from "./page.module.css"

export default function PreventiveCarePage() {
  const screeningPrograms = [
    {
      title: "Cardiac Health Screening",
      description: "Comprehensive heart health assessment including ECG, Echo, and stress tests",
      icon: <Heart size={32} />,
      ageGroup: "40+ years",
      frequency: "Annual",
    },
    {
      title: "Cancer Screening",
      description: "Early detection programs for breast, cervical, and colorectal cancers",
      icon: <Shield size={32} />,
      ageGroup: "35+ years",
      frequency: "As recommended",
    },
    {
      title: "Diabetes Prevention",
      description: "Blood sugar monitoring and lifestyle counseling for diabetes prevention",
      icon: <Activity size={32} />,
      ageGroup: "30+ years",
      frequency: "Annual",
    },
    {
      title: "Women's Health",
      description: "Comprehensive women's health screening including mammography and pap smear",
      icon: <Users size={32} />,
      ageGroup: "21+ years",
      frequency: "Annual",
    },
  ]

  const healthTips = [
    "Maintain a balanced diet rich in fruits and vegetables",
    "Exercise regularly - at least 30 minutes daily",
    "Get adequate sleep (7-8 hours per night)",
    "Avoid smoking and limit alcohol consumption",
    "Manage stress through relaxation techniques",
    "Stay hydrated - drink plenty of water",
    "Regular health check-ups and screenings",
    "Maintain a healthy weight",
  ]

  return (
    <div className={styles.preventivePage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <Shield size={40} />
            Preventive Health Care
          </h1>
          <p>Prevention is better than cure - Stay healthy with our comprehensive screening programs</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Why Preventive Care Matters</h2>
            <div className={styles.importanceCard}>
              <p>
                Preventive healthcare focuses on preventing diseases before they occur, rather than treating them after
                they develop. Regular health screenings and lifestyle modifications can help detect health issues early
                when they're most treatable, ultimately saving lives and reducing healthcare costs.
              </p>
              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <CheckCircle size={24} />
                  <span>Early disease detection</span>
                </div>
                <div className={styles.benefit}>
                  <CheckCircle size={24} />
                  <span>Better treatment outcomes</span>
                </div>
                <div className={styles.benefit}>
                  <CheckCircle size={24} />
                  <span>Reduced healthcare costs</span>
                </div>
                <div className={styles.benefit}>
                  <CheckCircle size={24} />
                  <span>Improved quality of life</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Screening Programs</h2>
            <div className={styles.programsGrid}>
              {screeningPrograms.map((program, index) => (
                <div key={index} className={styles.programCard}>
                  <div className={styles.programIcon}>{program.icon}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className={styles.programDetails}>
                    <div className={styles.detail}>
                      <strong>Age Group:</strong> {program.ageGroup}
                    </div>
                    <div className={styles.detail}>
                      <strong>Frequency:</strong> {program.frequency}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Healthy Lifestyle Tips</h2>
            <div className={styles.tipsCard}>
              <div className={styles.tipsGrid}>
                {healthTips.map((tip, index) => (
                  <div key={index} className={styles.tipItem}>
                    <CheckCircle size={20} />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Schedule Your Screening</h2>
            <div className={styles.scheduleCard}>
              <Calendar size={32} />
              <div>
                <h3>Book Your Preventive Health Check-up</h3>
                <p>
                  Take the first step towards better health. Schedule your comprehensive health screening today and
                  invest in your long-term well-being.
                </p>
                <div className={styles.contactInfo}>
                  <p>
                    <strong>Phone:</strong> +91-9876543220
                  </p>
                  <p>
                    <strong>Email:</strong> preventive@apexhospital.com
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
