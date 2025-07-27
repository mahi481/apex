"use client"

import Image from "next/image"
import Link from "next/link"
import { FlaskConical, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Sanjay Agarwal",
    designation: "Chief Endocrinologist",
    experience: "24+ years",
    specialization: "Thyroid Disorders & Hormone Replacement",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Endocrinology), FACE",
  },
  {
    name: "Dr. Priya Malhotra",
    designation: "Senior Endocrinologist",
    experience: "18+ years",
    specialization: "Reproductive Endocrinology & PCOS",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Endocrinology), MRCOG",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Sanjay Agarwal" },
  { day: "Tuesday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Priya Malhotra" },
  { day: "Wednesday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Sanjay Agarwal" },
  { day: "Thursday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Priya Malhotra" },
  { day: "Friday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Sanjay Agarwal" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM", doctor: "Both Doctors" },
]

export default function EndocrinologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Endocrinology
              </div>
              <h1>
                <FlaskConical size={40} />
                Endocrinology Department
              </h1>
              <p>
                Comprehensive hormonal disorder management including thyroid, diabetes, reproductive hormones, and metabolic conditions with advanced diagnostic facilities.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>6000+</span>
                  <span className={styles.statLabel}>Patients Treated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>95%</span>
                  <span className={styles.statLabel}>Treatment Success</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Hormone Tests</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Endocrinology Department"
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
            <p>Advanced endocrine care with comprehensive hormone testing and treatment</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Endocrinology Department</h3>
              <p>
                Our Endocrinology Department specializes in diagnosing and treating hormonal disorders affecting the endocrine system. We provide comprehensive care for conditions involving thyroid, adrenal, pituitary, and reproductive hormones.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Thyroid Disorders Management</li>
                <li>Diabetes & Metabolic Syndrome</li>
                <li>Adrenal Gland Disorders</li>
                <li>Pituitary Disorders</li>
                <li>Reproductive Hormone Issues</li>
                <li>PCOS Management</li>
                <li>Osteoporosis Treatment</li>
                <li>Growth Hormone Disorders</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Hormone Lab</h4>
                  <p>Comprehensive hormone testing with rapid results and precision analysis</p>
                </div>
                <div className={styles.facilityCard}>
                  <FlaskConical size={24} />
                  <h4>Thyroid Clinic</h4>
                  <p>Specialized thyroid function testing, ultrasound, and biopsy services</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>DEXA Scan</h4>
                  <p>Bone density measurement for osteoporosis screening and monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Endocrinologists</h2>
            <p>Meet our team of experienced hormone specialists</p>
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
              <p>Schedule a consultation with our endocrinology specialists</p>
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
                  <span>Expert Endocrinologists</span>
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