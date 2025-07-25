import Link from "next/link"
import {
  Calendar,
  FileText,
  Heart,
  Shield,
  CreditCard,
  Bed,
  Phone,
  Stethoscope,
  HelpCircle,
  Building,
  Pill,
  TestTube,
  Camera,
  ShipWheelIcon as Wheelchair,
  Church,
  Coffee,
  Car,
} from "lucide-react"
import styles from "./page.module.css"

const portalSections = [
  {
    title: "Appointments",
    description: "Schedule and manage your medical appointments online",
    icon: <Calendar size={32} />,
    href: "/appointment",
    category: "services",
  },
  {
    title: "Admissions",
    description: "Information about hospital admission procedures and requirements",
    icon: <FileText size={32} />,
    href: "/admissions",
    category: "services",
  },
  {
    title: "Preparing for Surgery",
    description: "Pre-operative instructions and what to expect during surgery",
    icon: <Stethoscope size={32} />,
    href: "/surgery-prep",
    category: "services",
  },
  {
    title: "Emergency & Urgent Care",
    description: "24/7 emergency services and urgent care information",
    icon: <Phone size={32} />,
    href: "/emergency",
    category: "services",
  },
  {
    title: "Patient Safety",
    description: "Our commitment to patient safety and quality care",
    icon: <Shield size={32} />,
    href: "/patient-safety",
    category: "services",
  },
  {
    title: "Billing & Insurance",
    description: "Payment options, insurance coverage, and billing information",
    icon: <CreditCard size={32} />,
    href: "/billing",
    category: "services",
  },
  {
    title: "Amenities",
    description: "Hospital amenities and services for patient comfort",
    icon: <Bed size={32} />,
    href: "/amenities",
    category: "services",
  },
  {
    title: "Medical Records",
    description: "Access and manage your medical records securely",
    icon: <FileText size={32} />,
    href: "/medical-records",
    category: "services",
  },
  {
    title: "Patient Stories",
    description: "Read inspiring stories from our patients",
    icon: <Heart size={32} />,
    href: "/patient-stories",
    category: "community",
  },
  {
    title: "Preventive Health Care",
    description: "Health screening and preventive care programs",
    icon: <Shield size={32} />,
    href: "/preventive-care",
    category: "community",
  },
  {
    title: "Ask Your Doctor",
    description: "Submit questions to our medical experts",
    icon: <HelpCircle size={32} />,
    href: "/ask-doctor",
    category: "community",
  },
]

const facilities = [
  {
    title: "Facilities",
    description: "Modern medical facilities and equipment",
    icon: <Building size={32} />,
    href: "/facilities",
  },
  {
    title: "Pharmacy",
    description: "24/7 pharmacy services with home delivery",
    icon: <Pill size={32} />,
    href: "/pharmacy",
  },
  {
    title: "Lab",
    description: "Advanced diagnostic and pathology services",
    icon: <TestTube size={32} />,
    href: "/lab",
  },
  {
    title: "Radiology",
    description: "Complete imaging services including MRI, CT, X-Ray",
    icon: <Camera size={32} />,
    href: "/radiology",
  },
  {
    title: "Dormitory",
    description: "Comfortable accommodation for patient attendants",
    icon: <Bed size={32} />,
    href: "/dormitory",
  },
  {
    title: "Wheelchair Support",
    description: "Wheelchair assistance and mobility support",
    icon: <Wheelchair size={32} />,
    href: "/wheelchair-support",
  },
  {
    title: "Prayer Room",
    description: "Peaceful prayer and meditation spaces",
    icon: <Church size={32} />,
    href: "/prayer-room",
  },
  {
    title: "Cafeteria",
    description: "Healthy meals and refreshments for patients and visitors",
    icon: <Coffee size={32} />,
    href: "/cafeteria",
  },
  {
    title: "Parking Area",
    description: "Ample parking space for patients and visitors",
    icon: <Car size={32} />,
    href: "/parking",
  },
]

export default function PatientsPortalPage() {
  return (
    <div className={styles.portalPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Patients Portal</h1>
          <p>Your comprehensive guide to hospital services and patient care</p>
        </div>

        <div className={styles.sectionsContainer}>
          <section className={styles.section}>
            <h2>Patient Services</h2>
            <div className={styles.cardsGrid}>
              {portalSections.map((item) => (
                <Link key={item.title} href={item.href} className={styles.portalCard}>
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className={styles.readMore}>Learn More</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Hospital Facilities</h2>
            <div className={styles.cardsGrid}>
              {facilities.map((facility) => (
                <Link key={facility.title} href={facility.href} className={styles.portalCard}>
                  <div className={styles.cardIcon}>{facility.icon}</div>
                  <div className={styles.cardContent}>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                    <span className={styles.readMore}>Learn More</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
