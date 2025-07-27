"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Neha Sharma",
    designation: "Chief Psychiatrist",
    experience: "16+ years",
    specialization: "Depression & Anxiety Disorders",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Psychiatry), MRCPsych, DPM",
  },
  {
    name: "Dr. Amit Khanna",
    designation: "Senior Psychiatrist",
    experience: "12+ years",
    specialization: "Child & Adolescent Psychiatry",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Psychiatry), DNB, FIPM",
  },
]

const schedule = [
  { day: "Monday", time: "10:00 AM - 8:00 PM", doctor: "Dr. Neha Sharma" },
  { day: "Tuesday", time: "11:00 AM - 7:00 PM", doctor: "Dr. Amit Khanna" },
  { day: "Wednesday", time: "10:00 AM - 8:00 PM", doctor: "Dr. Neha Sharma" },
  { day: "Thursday", time: "11:00 AM - 7:00 PM", doctor: "Dr. Amit Khanna" },
  { day: "Friday", time: "10:00 AM - 8:00 PM", doctor: "Dr. Neha Sharma" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM", doctor: "Both Doctors" },
]

export default function PsychiatryPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Psychiatry
              </div>
              <h1>
                <Stethoscope size={40} />
                Psychiatry Department
              </h1>
              <p>
                Comprehensive mental health care including diagnosis and treatment of psychiatric disorders, counseling services, and psychological support in a compassionate environment.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3200+</span>
                  <span className={styles.statLabel}>Patients Helped</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>92%</span>
                  <span className={styles.statLabel}>Recovery Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Crisis Support</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Psychiatry Department"
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
            <p>Compassionate mental health care with evidence-based treatments</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Psychiatry department provides comprehensive mental health services with a focus on evidence-based treatments and compassionate care. We believe in reducing stigma and promoting mental wellness for all ages.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Depression & Anxiety Treatment</li>
                <li>Bipolar Disorder Management</li>
                <li>Schizophrenia Care</li>
                <li>Child & Adolescent Psychiatry</li>
                <li>Addiction Treatment</li>
                <li>PTSD & Trauma Therapy</li>
                <li>Cognitive Behavioral Therapy</li>
                <li>Family Counseling</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Therapy Rooms</h4>
                  <p>Private, comfortable spaces designed for therapeutic sessions</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Group Therapy</h4>
                  <p>Specialized rooms for group sessions and support meetings</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Crisis Center</h4>
                  <p>24/7 emergency psychiatric care and crisis intervention</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Psychiatrists</h2>
            <p>Meet our team of experienced mental health professionals</p>
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
              <p>Schedule a confidential consultation with our mental health specialists</p>
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
                  <span>Expert Psychiatrists</span>
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