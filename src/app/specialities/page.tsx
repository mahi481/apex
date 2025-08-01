import Link from "next/link"
import {
  Heart,
  Brain,
  Bone,
  Eye,
  Users,
  Shield,
  Scissors,
  Stethoscope,
  Syringe,
  TestTube,
  FlaskConical,
  Baby,
  Hospital,
  Radiation,
  Droplets
} from "lucide-react";

import styles from "./page.module.css"

const specialities = [
  { name: "Cardiology", icon: <Heart size={24} />, href: "/specialities/cardiology" },
  { name: "Neurology", icon: <Brain size={24} />, href: "/specialities/neurology" },
  { name: "Orthopedics", icon: <Bone size={24} />, href: "/specialities/orthopedics" },
  { name: "Oncology", icon: <Shield size={24} />, href: "/specialities/oncology" },
  { name: "Ophthalmology", icon: <Eye size={24} />, href: "/specialities/ophthalmology" },
  { name: "General Surgery", icon: <Scissors size={24} />, href: "/specialities/general-surgery" },
  // ok
  { name: "Breast Clinic", icon: <Baby size={24} />, href: "/specialities/breast-clinic" },
  { name: "Critical Care", icon: <Shield size={24} />, href: "/specialities/critical-care" },
  { name: "Dermatology", icon: <Eye size={24} />, href: "/specialities/dermatology" },
  { name: "Diabetology", icon: <Syringe size={24} />, href: "/specialities/diabetology" },
  { name: "Emergency and Urgent Care", icon: <Hospital size={24} />, href: "/emergency" },
  { name: "Endocrinology", icon: <FlaskConical size={24} />, href: "/specialities/endocrinology" },
  { name: "Family Clinic", icon: <Users size={24} />, href: "/specialities/family-clinic" },
  { name: "Fertility Centre (IVF)", icon: <Baby size={24} />, href: "/specialities/fertility-centre" },
  { name: "General Medicine", icon: <Stethoscope size={24} />, href: "/specialities/general-medicine" },
  { name: "Geriatrics", icon: <Users size={24} />, href: "/specialities/geriatrics" },
  { name: "Gastroenterology", icon: <FlaskConical size={24} />, href: "/specialities/gastroenterology" },
  { name: "Interventional Radiology", icon: <Radiation size={24} />, href: "/specialities/interventional-radiology" },
  { name: "Infectious Diseases", icon: <Shield size={24} />, href: "/specialities/infectious-diseases" },
  { name: "Laboratory Services", icon: <TestTube size={24} />, href: "/specialities/laboratory-services" },
  { name: "Lung Centre", icon: <Stethoscope size={24} />, href: "/specialities/lung-centre" },
  { name: "Liver Diseases", icon: <Droplets size={24} />, href: "/specialities/liver-diseases" },
  { name: "Nephrology and Urology Science", icon: <Droplets size={24} />, href: "/specialities/nephrology-urology" },
  { name: "Obstetrics and Gynecology", icon: <Baby size={24} />, href: "/specialities/obstetrics-gynecology" },
  { name: "Plastic Surgery", icon: <Scissors size={24} />, href: "/specialities/plastic-surgery" },
  { name: "Psychiatry", icon: <Brain size={24} />, href: "/specialities/psychiatry" },
  { name: "Pulmonology", icon: <Stethoscope size={24} />, href: "/specialities/pulmonology" },
  { name: "Spine Surgery", icon: <Bone size={24} />, href: "/specialities/spine-surgery" },
  { name: "Transfusion Medicine", icon: <Syringe size={24} />, href: "/specialities/transfusion-medicine" },
  { name: "Vascular Surgery", icon: <Heart size={24} />, href: "/specialities/vascular-surgery" },
 

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
