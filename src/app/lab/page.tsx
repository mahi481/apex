import { TestTube, Microscope, Clock, FileText, Shield, Award, Heart, Brain } from "lucide-react"
import styles from "./page.module.css"

export default function LabPage() {
  const services = [
    {
      title: "Blood Tests",
      description: "Complete blood count, blood chemistry, and specialized blood tests",
      icon: <TestTube size={24} />,
      tests: ["CBC", "Lipid Profile", "Liver Function", "Kidney Function"],
    },
    {
      title: "Pathology",
      description: "Tissue examination and biopsy analysis for accurate diagnosis",
      icon: <Microscope size={24} />,
      tests: ["Biopsy", "Cytology", "Histopathology", "Immunohistochemistry"],
    },
    {
      title: "Microbiology",
      description: "Infection detection and antibiotic sensitivity testing",
      icon: <Shield size={24} />,
      tests: ["Culture & Sensitivity", "Viral Studies", "Fungal Tests", "TB Tests"],
    },
    {
      title: "Cardiology Tests",
      description: "Heart-related diagnostic tests and cardiac markers",
      icon: <Heart size={24} />,
      tests: ["ECG", "Echo", "Stress Test", "Cardiac Enzymes"],
    },
  ]

  const features = [
    {
      title: "24/7 Emergency Lab",
      description: "Round-the-clock laboratory services for emergency cases",
      icon: <Clock size={24} />,
    },
    {
      title: "Digital Reports",
      description: "Online report access and digital delivery system",
      icon: <FileText size={24} />,
    },
    {
      title: "NABL Accredited",
      description: "Quality assured testing with international standards",
      icon: <Award size={24} />,
    },
    {
      title: "Expert Pathologists",
      description: "Experienced pathologists for accurate diagnosis",
      icon: <Brain size={24} />,
    },
  ]

  return (
    <div className={styles.labPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <img
            src="/images/lab.jpg"
            alt="Diagnostic Laboratory"
            className={styles.headerImage}
          />
          <div className={styles.headerContent}>
            <h1>
              <TestTube size={40} />
              Diagnostic Laboratory
            </h1>
            <p>Advanced diagnostic services with state-of-the-art equipment and expert pathologists</p>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Laboratory Services</h2>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className={styles.testsList}>
                    {service.tests.map((test, idx) => (
                      <span key={idx} className={styles.testTag}>
                        {test}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Why Choose Our Lab</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.timingSection}>
            <div className={styles.timingCard}>
              <h3>Lab Timings & Contact</h3>
              <div className={styles.timingGrid}>
                <div className={styles.timingItem}>
                  <h4>Regular Hours</h4>
                  <p>Monday - Saturday: 6:00 AM - 10:00 PM</p>
                  <p>Sunday: 7:00 AM - 8:00 PM</p>
                </div>
                <div className={styles.timingItem}>
                  <h4>Emergency Lab</h4>
                  <p>24/7 Available</p>
                  <p>Critical tests anytime</p>
                </div>
                <div className={styles.timingItem}>
                  <h4>Contact Info</h4>
                  <p>Phone: +91-9876543210</p>
                  <p>Email: lab@apexhospital.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
