"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    designation: "Chief Physician",
    experience: "25+ years",
    specialization: "Internal Medicine & Preventive Care",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Medicine), FICP, FACP",
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Senior General Physician",
    experience: "18+ years",
    specialization: "Chronic Disease Management",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Medicine), DNB, MRCP",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 8:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Tuesday", time: "8:00 AM - 8:00 PM", doctor: "Dr. Priya Sharma" },
  { day: "Wednesday", time: "8:00 AM - 8:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Thursday", time: "8:00 AM - 8:00 PM", doctor: "Dr. Priya Sharma" },
  { day: "Friday", time: "8:00 AM - 8:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Saturday", time: "8:00 AM - 4:00 PM", doctor: "Both Doctors" },
]

export default function GeneralMedicinePage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / General Medicine
              </div>
              <h1>
                <Stethoscope size={40} />
                General Medicine Department
              </h1>
              <p>
                Comprehensive primary healthcare services including preventive care, chronic disease management, and treatment of common medical conditions.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15000+</span>
                  <span className={styles.statLabel}>Patients Treated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Patient Satisfaction</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/generalmedicine.jpg"
                alt="General Medicine Department"
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
            <p>Comprehensive primary healthcare with focus on prevention and wellness</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our General Medicine Department</h3>
              <p>
                Our General Medicine Department serves as the foundation of healthcare, providing comprehensive medical care for adults. We focus on prevention, early detection, and management of various health conditions.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Routine Health Check-ups</li>
                <li>Chronic Disease Management</li>
                <li>Preventive Care & Screening</li>
                <li>Vaccination Services</li>
                <li>Health Risk Assessment</li>
                <li>Lifestyle Counseling</li>
                <li>Minor Procedures</li>
                <li>Referral Coordination</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Diagnostic Center</h4>
                  <p>Comprehensive diagnostic services including lab tests and imaging</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Health Screening</h4>
                  <p>Complete health assessment and preventive screening programs</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Wellness Center</h4>
                  <p>Lifestyle counseling and wellness programs for optimal health</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our General Physicians</h2>
            <p>Meet our team of experienced internal medicine specialists</p>
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
              <p>Schedule a consultation with our general medicine specialists</p>
              <div className={styles.appointmentFeatures}>
                <div className={styles.feature}>
                  <Calendar size={24} />
                  <span>Easy Online Booking</span>
                </div>
                <div className={styles.feature}>
                  <Clock size={24} />
                  <span>Extended Hours</span>
                </div>
                <div className={styles.feature}>
                  <Users size={24} />
                  <span>Expert Physicians</span>
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
