import Image from "next/image"
import Link from "next/link"
import { Heart, Brain, Bone, Eye, Baby, Scissors, Ear, Shield, Users } from "lucide-react"
import styles from "./page.module.css"

const centers = [
  {
    name: "Cardiology",
    description: "Advanced cardiac care with state-of-the-art catheterization lab and experienced cardiologists.",
    icon: <Heart size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Cardiology",
    href: "/specialities/cardiology",
    stats: { procedures: "5000+", success: "98%" },
  },
  {
    name: "Neurology",
    description: "Comprehensive neurological care for brain, spine, and nervous system disorders.",
    icon: <Brain size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Neurology",
    href: "/specialities/neurology",
    stats: { procedures: "3000+", success: "96%" },
  },
  {
    name: "Orthopedics",
    description: "Expert bone and joint care with minimally invasive surgical techniques.",
    icon: <Bone size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Orthopedics",
    href: "/specialities/orthopedics",
    stats: { procedures: "4000+", success: "97%" },
  },
  {
    name: "Oncology",
    description: "Comprehensive cancer care with advanced treatment options and support services.",
    icon: <Shield size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Oncology",
    href: "/specialities/oncology",
    stats: { procedures: "2000+", success: "94%" },
  },
  {
    name: "Pediatrics",
    description: "Specialized healthcare for children from newborns to adolescents.",
    icon: <Baby size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Pediatrics",
    href: "/specialities/pediatrics",
    stats: { procedures: "6000+", success: "99%" },
  },
  {
    name: "Gynecology",
    description: "Women's health services including maternity care and gynecological procedures.",
    icon: <Users size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Gynecology",
    href: "/specialities/gynecology",
    stats: { procedures: "3500+", success: "98%" },
  },
  {
    name: "Ophthalmology",
    description: "Complete eye care services including cataract surgery and retinal treatments.",
    icon: <Eye size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Ophthalmology",
    href: "/specialities/ophthalmology",
    stats: { procedures: "2500+", success: "99%" },
  },
  {
    name: "ENT",
    description: "Ear, nose, and throat treatments with advanced endoscopic procedures.",
    icon: <Ear size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=ENT",
    href: "/specialities/ent",
    stats: { procedures: "1800+", success: "97%" },
  },
  {
    name: "General Surgery",
    description: "Comprehensive surgical services with minimally invasive techniques.",
    icon: <Scissors size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Surgery",
    href: "/specialities/general-surgery",
    stats: { procedures: "4500+", success: "98%" },
  },
]

export default function CentersOfExcellence() {
  return (
    <div className={styles.centersPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Centers of Excellence</h1>
          <p>World-class medical care across multiple specialties with cutting-edge technology and expert physicians</p>
        </div>

        <div className={styles.centersGrid}>
          {centers.map((center) => (
            <Link key={center.name} href={center.href} className={styles.centerCard}>
              <div className={styles.cardImage}>
                <Image src={center.image || "/placeholder.svg"} alt={center.name} fill style={{ objectFit: "cover" }} />
                <div className={styles.cardOverlay}>
                  <div className={styles.cardIcon}>{center.icon}</div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{center.name}</h3>
                <p>{center.description}</p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>{center.stats.procedures}</span>
                    <span className={styles.statLabel}>Procedures</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>{center.stats.success}</span>
                    <span className={styles.statLabel}>Success Rate</span>
                  </div>
                </div>
                <span className={styles.learnMore}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Need Expert Medical Care?</h2>
            <p>
              Our centers of excellence are equipped with the latest technology and staffed by world-class physicians.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/appointment" className={styles.primaryBtn}>
                Book Appointment
              </Link>
              <Link href="/doctors" className={styles.secondaryBtn}>
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
