"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Vikram Singh",
    designation: "Chief Plastic Surgeon",
    experience: "19+ years",
    specialization: "Aesthetic & Reconstructive Surgery",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (General Surgery), MCh (Plastic Surgery)",
  },
  {
    name: "Dr. Anjali Mehta",
    designation: "Senior Plastic Surgeon",
    experience: "13+ years",
    specialization: "Cosmetic Surgery & Burn Care",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Surgery), MCh (Plastic Surgery), FICS",
  },
]

const schedule = [
  { day: "Monday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Vikram Singh" },
  { day: "Tuesday", time: "11:00 AM - 7:00 PM", doctor: "Dr. Anjali Mehta" },
  { day: "Wednesday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Vikram Singh" },
  { day: "Thursday", time: "11:00 AM - 7:00 PM", doctor: "Dr. Anjali Mehta" },
  { day: "Friday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Vikram Singh" },
  { day: "Saturday", time: "10:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function PlasticSurgeryPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Plastic Surgery
              </div>
              <h1>
                <Stethoscope size={40} />
                Plastic Surgery Department
              </h1>
              <p>
                Advanced aesthetic and reconstructive surgery services including cosmetic procedures, burn treatment, and complex reconstructive surgeries with natural-looking results.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1800+</span>
                  <span className={styles.statLabel}>Surgeries</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>97%</span>
                  <span className={styles.statLabel}>Patient Satisfaction</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Procedures Offered</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/plasticsurgery.jpg"
                alt="Plastic Surgery Department"
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
            <p>Excellence in aesthetic and reconstructive plastic surgery</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Plastic Surgery department combines artistry with advanced surgical techniques to provide exceptional aesthetic and reconstructive results. We focus on enhancing natural beauty while ensuring patient safety and satisfaction.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Facial Cosmetic Surgery</li>
                <li>Breast Enhancement & Reconstruction</li>
                <li>Body Contouring Procedures</li>
                <li>Burn Care & Reconstruction</li>
                <li>Hand Surgery & Microsurgery</li>
                <li>Cleft Lip & Palate Repair</li>
                <li>Scar Revision Surgery</li>
                <li>Non-Surgical Aesthetic Treatments</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Modern OR Suites</h4>
                  <p>State-of-the-art operating rooms with advanced surgical equipment</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Recovery Center</h4>
                  <p>Comfortable post-operative care with specialized nursing staff</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Consultation Suites</h4>
                  <p>Private consultation rooms with 3D imaging technology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Surgeons</h2>
            <p>Meet our team of skilled plastic and reconstructive surgeons</p>
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
              <p>Schedule a consultation with our plastic surgery specialists</p>
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
                  <span>Expert Surgeons</span>
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
