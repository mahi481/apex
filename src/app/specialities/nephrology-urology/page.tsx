"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    designation: "Chief Nephrologist",
    experience: "18+ years",
    specialization: "Kidney Transplant & Dialysis",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Nephrology), DM, FNAMS",
  },
  {
    name: "Dr. Priya Verma",
    designation: "Senior Urologist",
    experience: "14+ years",
    specialization: "Minimally Invasive Urology",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Urology), MCh, FICS",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 5:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Tuesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Priya Verma" },
  { day: "Wednesday", time: "8:00 AM - 5:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Thursday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Priya Verma" },
  { day: "Friday", time: "8:00 AM - 5:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM", doctor: "Both Doctors" },
]

export default function NephrologyUrologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Nephrology & Urology
              </div>
              <h1>
                <Stethoscope size={40} />
                Nephrology & Urology Department
              </h1>
              <p>
                Comprehensive kidney and urinary tract care including advanced treatments for kidney diseases, urological disorders, and minimally invasive surgical procedures.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2500+</span>
                  <span className={styles.statLabel}>Patients Treated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>96%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Dialysis Support</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Nephrology & Urology Department"
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
            <p>Advanced nephrology and urology care with state-of-the-art facilities</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Nephrology & Urology department provides comprehensive care for kidney diseases and urological disorders. We offer advanced diagnostic and treatment options with a focus on minimally invasive procedures.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Chronic Kidney Disease Management</li>
                <li>Hemodialysis & Peritoneal Dialysis</li>
                <li>Kidney Transplantation</li>
                <li>Urological Stone Treatment</li>
                <li>Prostate Disorders Care</li>
                <li>Bladder & Kidney Cancer Treatment</li>
                <li>Pediatric Urology</li>
                <li>Male Fertility Treatment</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Dialysis Center</h4>
                  <p>24/7 hemodialysis facility with modern machines and expert care</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Lithotripsy Unit</h4>
                  <p>Non-invasive kidney stone treatment using advanced shock wave technology</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Endourology Suite</h4>
                  <p>Minimally invasive urological procedures with latest equipment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Specialists</h2>
            <p>Meet our team of experienced nephrologists and urologists</p>
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
            <p>Doctor availability and consultation timings</p>
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
              <p>Schedule a consultation with our kidney and urology specialists</p>
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
                  <span>Expert Specialists</span>
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