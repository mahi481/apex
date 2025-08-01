"use client"

import Image from "next/image"
import Link from "next/link"
import { Baby, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Priya Sharma",
    designation: "Chief Breast Surgeon",
    experience: "18+ years",
    specialization: "Breast Cancer Surgery & Reconstruction",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS, MCh (Surgical Oncology), FACS",
  },
  {
    name: "Dr. Neha Gupta",
    designation: "Senior Breast Specialist",
    experience: "12+ years",
    specialization: "Breast Imaging & Interventional Procedures",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Radiology), FRCR",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Priya Sharma" },
  { day: "Tuesday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Neha Gupta" },
  { day: "Wednesday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Priya Sharma" },
  { day: "Thursday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Neha Gupta" },
  { day: "Friday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Priya Sharma" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM", doctor: "Dr. Neha Gupta" },
]

export default function BreastClinicPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Breast Clinic
              </div>
              <h1>
                <Baby size={40} />
                Breast Clinic Department
              </h1>
              <p>
                Comprehensive breast health services including screening, diagnosis, and treatment of breast conditions with advanced technology and compassionate care.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2500+</span>
                  <span className={styles.statLabel}>Screenings</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Detection Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/breastclinic.jpg"
                alt="Breast Clinic Department"
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
            <p>Advanced breast health services with state-of-the-art diagnostic and treatment facilities</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Breast Clinic</h3>
              <p>
                Our Breast Clinic provides comprehensive breast health services from screening and early detection to advanced surgical treatments. We offer personalized care with the latest technology and minimally invasive procedures.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Breast Cancer Screening & Mammography</li>
                <li>Breast Biopsy & Fine Needle Aspiration</li>
                <li>Breast Cancer Surgery</li>
                <li>Breast Reconstruction</li>
                <li>Genetic Counseling & Testing</li>
                <li>Breast MRI & Ultrasound</li>
                <li>Oncoplastic Surgery</li>
                <li>Lactation Consulting</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Digital Mammography</h4>
                  <p>Advanced 3D mammography for early breast cancer detection with minimal radiation</p>
                </div>
                <div className={styles.facilityCard}>
                  <Baby size={24} />
                  <h4>Breast MRI Suite</h4>
                  <p>High-resolution MRI imaging for detailed breast tissue evaluation and monitoring</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Surgical Suite</h4>
                  <p>Specialized operating rooms equipped for breast surgery and reconstruction procedures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Breast Specialists</h2>
            <p>Meet our team of experienced breast health specialists</p>
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
              <p>Schedule a consultation with our breast health specialists</p>
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
