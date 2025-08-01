"use client"

import Image from "next/image"
import Link from "next/link"
import { Radiation, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Amit Sharma",
    designation: "Chief Interventional Radiologist",
    experience: "19+ years",
    specialization: "Vascular Interventions & Oncology",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Radiology), Fellowship in Interventional Radiology",
  },
  {
    name: "Dr. Kavita Patel",
    designation: "Senior Interventional Radiologist",
    experience: "14+ years",
    specialization: "Neuro-interventions & Embolization",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Radiology), DNB, FRCR",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Amit Sharma" },
  { day: "Tuesday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Kavita Patel" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Amit Sharma" },
  { day: "Thursday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Kavita Patel" },
  { day: "Friday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Amit Sharma" },
  { day: "Saturday", time: "8:00 AM - 2:00 PM", doctor: "Both Doctors" },
]

export default function InterventionalRadiologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Interventional Radiology
              </div>
              <h1>
                <Radiation size={40} />
                Interventional Radiology Department
              </h1>
              <p>
                Minimally invasive image-guided procedures for diagnosis and treatment using advanced imaging technology and precision techniques.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2800+</span>
                  <span className={styles.statLabel}>Procedures</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Service</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="//images/interventional.jpg"
                alt="Interventional Radiology Department"
                width={600}
                height={400}
                className={styles.departmentImage}
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <a href="#overview" className={styles.tab}>Overview</a>
            <a href="#doctors" className={styles.tab}>Doctors</a>
            <a href="#schedule" className={styles.tab}>Schedule</a>
            <a href="#appointment" className={styles.tab}>Book Appointment</a>
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Overview</h2>
            <p>Advanced minimally invasive procedures with precision imaging guidance</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Interventional Radiology Department</h3>
              <p>
                Our Interventional Radiology Department offers minimally invasive, image-guided procedures as alternatives to traditional surgery. We use advanced imaging technology to perform precise diagnostic and therapeutic interventions.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Angioplasty & Stenting</li>
                <li>Embolization Procedures</li>
                <li>Image-guided Biopsies</li>
                <li>Drainage Procedures</li>
                <li>Tumor Ablation</li>
                <li>Vascular Access</li>
                <li>Neuro-interventions</li>
                <li>Emergency Interventions</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Cath Lab</h4>
                  <p>State-of-the-art catheterization laboratory with advanced imaging systems</p>
                </div>
                <div className={styles.facilityCard}>
                  <Radiation size={24} />
                  <h4>CT/MRI Suite</h4>
                  <p>Advanced CT and MRI guidance for precise interventional procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Recovery Unit</h4>
                  <p>Specialized recovery area with continuous monitoring post-procedure</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Interventional Radiologists</h2>
            <p>Meet our team of experienced interventional radiology specialists</p>
          </div>

          <div className={styles.doctorsGrid}>
            {doctors.map((doctor, index) => (
              <div key={index} className={styles.doctorCard}>
                <div className={styles.doctorImage}>
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} width={300} height={300} />
                </div>
                <div className={styles.doctorInfo}>
                  <h3>{doctor.name}</h3>
                  <p className={styles.designation}>{doctor.designation}</p>
                  <p className={styles.specialization}>{doctor.specialization}</p>
                  <p className={styles.qualifications}>{doctor.qualifications}</p>
                  <p className={styles.experience}>{doctor.experience} Experience</p>
                  <Link href="/appointment" className="btn-primary">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Weekly Schedule</h2>
            <p>Doctor availability and procedure timings</p>
          </div>

          <div className={styles.scheduleTable}>
            <div className={styles.scheduleHeader}>
              <div>Day</div>
              <div>Time</div>
              <div>Doctor</div>
            </div>
            {schedule.map((item, index) => (
              <div key={index} className={styles.scheduleRow}>
                <div className={styles.day}>{item.day}</div>
                <div className={styles.time}>
                  <Clock size={16} />
                  {item.time}
                </div>
                <div className={styles.doctor}>{item.doctor}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Appointment Section */}
        <section id="appointment" className={styles.section}>
          <div className={styles.appointmentSection}>
            <div className={styles.appointmentContent}>
              <h2>Book Your Appointment</h2>
              <p>Schedule a consultation with our interventional radiology specialists</p>
              <div className={styles.appointmentFeatures}>
                <div className={styles.feature}>
                  <Calendar size={24} />
                  <span>Easy Online Booking</span>
                </div>
                <div className={styles.feature}>
                  <Clock size={24} />
                  <span>Flexible Timings</span>
                </div>
                <div className={styles.feature}>
                  <Users size={24} />
                  <span>Expert Radiologists</span>
                </div>
              </div>
              <Link href="/appointment" className="btn-primary">
                Book Appointment Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
