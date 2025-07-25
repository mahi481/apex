import Link from "next/link"
import { Heart, Brain, Bone, Eye, Baby, Users, Shield, Ear, Scissors, Stethoscope } from "lucide-react"
import styles from "./page.module.css"

const specialities = [
  { name: "Cardiology", icon: <Heart size={24} />, href: "/specialities/cardiology" },
  { name: "Neurology", icon: <Brain size={24} />, href: "/specialities/neurology" },
  { name: "Orthopedics", icon: <Bone size={24} />, href: "/specialities/orthopedics" },
  { name: "Oncology", icon: <Shield size={24} />, href: "/specialities/oncology" },
  { name: "Pediatrics", icon: <Baby size={24} />, href: "/specialities/pediatrics" },
  { name: "Gynecology", icon: <Users size={24} />, href: "/specialities/gynecology" },
  { name: "Ophthalmology", icon: <Eye size={24} />, href: "/specialities/ophthalmology" },
  { name: "ENT", icon: <Ear size={24} />, href: "/specialities/ent" },
  { name: "General Surgery", icon: <Scissors size={24} />, href: "/specialities/general-surgery" },
  { name: "Internal Medicine", icon: <Stethoscope size={24} />, href: "/specialities/internal-medicine" },
]

export default function SpecialitiesPage() {
  return (
    <div className={styles.specialitiesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Our Medical Specialities</h1>
          <p>Comprehensive healthcare services across multiple medical disciplines</p>
        </div>

        <div className={styles.specialitiesGrid}>
          {specialities.map((speciality) => (
            <Link key={speciality.name} href={speciality.href} className={styles.specialityCard}>
              <div className={styles.cardIcon}>{speciality.icon}</div>
              <h3>{speciality.name}</h3>
              <span className={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
