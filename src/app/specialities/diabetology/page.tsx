"use client"

import Image from "next/image"
import Link from "next/link"
import { Syringe, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Ramesh Patel",
    designation: "Chief Diabetologist",
    experience: "22+ years",
    specialization: "Type 1 & Type 2 Diabetes Management",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Medicine), DM (Endocrinology), MRCP",
  },
  {
    name: "Dr. Anjali Singh",
    designation: "Senior Diabetes Specialist",
    experience: "17+ years",
    specialization: "Diabetic Complications & Gestational Diabetes",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Medicine), DNB (Endocrinology), FICP",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Ramesh Patel" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Anjali Singh" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Ramesh Patel" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Anjali Singh" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Ramesh Patel" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function DiabetologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Diabetology
              </div>
              <h1>
                <Syringe size={40} />
                Diabetology Department
              </h1>
              <p>
                Comprehensive diabetes care and management with advanced monitoring, treatment protocols, and lifestyle counseling for optimal blood sugar control.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>8000+</span>
                  <span className={styles.statLabel}>Patients Managed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>92%</span>
                  <span className={styles.statLabel}>Control Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Support</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Diabetology Department"
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
            <p>Advanced diabetes management with comprehensive care and education</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Diabetology Department</h3>
              <p>
                Our Diabetology Department provides comprehensive diabetes care including diagnosis, treatment, monitoring, and education. We focus on personalized treatment plans to help patients achieve optimal blood sugar control.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Type 1 & Type 2 Diabetes Management</li>
                <li>Gestational Diabetes Care</li>
                <li>Diabetic Complication Screening</li>
                <li>Insulin Pump Therapy</li>
                <li>Continuous Glucose Monitoring</li>
                <li>Diabetic Foot Care</li>
                <li>Nutritional Counseling</li>
                <li>Diabetes Education Programs</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Diabetes Lab</h4>
                  <p>Comprehensive testing including HbA1c, glucose monitoring, and lipid profiles</p>
                </div>
                <div className={styles.facilityCard}>
                  <Syringe size={24} />
                  <h4>Insulin Clinic</h4>
                  <p>Insulin initiation, adjustment, and pump therapy management</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Complication Screening</h4>
                  <p>Regular screening for diabetic eye, kidney, and nerve complications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Diabetologists</h2>
            <p>Meet our team of experienced diabetes specialists</p>
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
              <p>Schedule a consultation with our diabetes specialists</p>
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
                  <span>Expert Diabetologists</span>
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