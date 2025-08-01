"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Arun Sharma",
    designation: "Chief Pulmonologist",
    experience: "21+ years",
    specialization: "Lung Cancer & Interventional Pulmonology",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Pulmonology), FCCP, FAPSR",
  },
  {
    name: "Dr. Kavita Gupta",
    designation: "Senior Chest Physician",
    experience: "16+ years",
    specialization: "Asthma & COPD Management",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Pulmonology), DNB, FICP",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Arun Sharma" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Kavita Gupta" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Arun Sharma" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Kavita Gupta" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Arun Sharma" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function LungCentrePage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Lung Centre
              </div>
              <h1>
                <Stethoscope size={40} />
                Lung Centre Department
              </h1>
              <p>
                Comprehensive respiratory care including diagnosis and treatment of lung diseases, breathing disorders, and advanced pulmonary interventions.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3800+</span>
                  <span className={styles.statLabel}>Patients Treated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>94%</span>
                  <span className={styles.statLabel}>Treatment Success</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/lungcentre.jpg"
                alt="Lung Centre Department"
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
            <p>Advanced respiratory care with comprehensive diagnostic and treatment facilities</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Lung Centre</h3>
              <p>
                Our Lung Centre provides comprehensive respiratory care for all types of lung and breathing disorders. We combine advanced diagnostic capabilities with personalized treatment approaches for optimal patient outcomes.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Asthma & COPD Management</li>
                <li>Lung Cancer Screening & Treatment</li>
                <li>Sleep Apnea Diagnosis</li>
                <li>Bronchoscopy & Lung Biopsy</li>
                <li>Pulmonary Function Testing</li>
                <li>Tuberculosis Treatment</li>
                <li>Interstitial Lung Disease Care</li>
                <li>Respiratory Rehabilitation</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Bronchoscopy Suite</h4>
                  <p>Advanced bronchoscopy equipment for diagnostic and therapeutic procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>PFT Lab</h4>
                  <p>Comprehensive pulmonary function testing for lung capacity assessment</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Sleep Lab</h4>
                  <p>Sleep study facility for diagnosis of sleep-related breathing disorders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Pulmonologists</h2>
            <p>Meet our team of experienced respiratory specialists</p>
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
              <p>Schedule a consultation with our lung specialists</p>
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
