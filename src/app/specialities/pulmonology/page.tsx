"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Ravi Malhotra",
    designation: "Chief Pulmonologist",
    experience: "20+ years",
    specialization: "Respiratory Critical Care",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Pulmonology), FCCP, FICP",
  },
  {
    name: "Dr. Sanjana Patel",
    designation: "Senior Pulmonologist",
    experience: "15+ years",
    specialization: "Interventional Pulmonology",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Pulmonology), DNB, FAPSR",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Ravi Malhotra" },
  { day: "Tuesday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Sanjana Patel" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Ravi Malhotra" },
  { day: "Thursday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Sanjana Patel" },
  { day: "Friday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Ravi Malhotra" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function PulmonologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Pulmonology
              </div>
              <h1>
                <Stethoscope size={40} />
                Pulmonology Department
              </h1>
              <p>
                Advanced respiratory medicine focusing on diagnosis and treatment of lung diseases, breathing disorders, and critical care for patients with respiratory complications.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4200+</span>
                  <span className={styles.statLabel}>Patients Treated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>95%</span>
                  <span className={styles.statLabel}>Treatment Success</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>ICU Support</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/pulmonology.jpg"
                alt="Pulmonology Department"
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
            <p>Comprehensive respiratory care with advanced diagnostic and treatment capabilities</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Pulmonology department specializes in the diagnosis and treatment of respiratory system disorders. We provide comprehensive care for both acute and chronic respiratory conditions using the latest medical technologies.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Chronic Obstructive Pulmonary Disease (COPD)</li>
                <li>Asthma Management</li>
                <li>Lung Cancer Diagnosis & Treatment</li>
                <li>Pneumonia & Respiratory Infections</li>
                <li>Sleep Apnea Testing</li>
                <li>Pulmonary Rehabilitation</li>
                <li>Tuberculosis Treatment</li>
                <li>Critical Care Medicine</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Respiratory ICU</h4>
                  <p>Specialized intensive care for critically ill respiratory patients</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Bronchoscopy Lab</h4>
                  <p>Advanced diagnostic and therapeutic bronchoscopy procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Pulmonary Function Lab</h4>
                  <p>Complete lung function testing and respiratory assessments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Pulmonologists</h2>
            <p>Meet our team of experienced respiratory medicine specialists</p>
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
              <p>Schedule a consultation with our respiratory medicine specialists</p>
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
                  <span>Expert Pulmonologists</span>
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
