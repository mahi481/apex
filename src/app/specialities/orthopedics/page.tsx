"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Anand Gupta",
    designation: "Chief Orthopedic Surgeon",
    experience: "19+ years",
    specialization: "Joint Replacement & Sports Medicine",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Orthopedics), DNB, FASM",
  },
  {
    name: "Dr. Meera Joshi",
    designation: "Senior Orthopedic Surgeon",
    experience: "13+ years",
    specialization: "Spine Surgery & Trauma",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Orthopedics), MCh (Spine), FIOT",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 7:00 PM", doctor: "Dr. Anand Gupta" },
  { day: "Tuesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Meera Joshi" },
  { day: "Wednesday", time: "8:00 AM - 7:00 PM", doctor: "Dr. Anand Gupta" },
  { day: "Thursday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Meera Joshi" },
  { day: "Friday", time: "8:00 AM - 7:00 PM", doctor: "Dr. Anand Gupta" },
  { day: "Saturday", time: "8:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function OrthopedicsPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Orthopedics
              </div>
              <h1>
                <Stethoscope size={40} />
                Orthopedics Department
              </h1>
              <p>
                Comprehensive bone and joint care including joint replacement, sports medicine, trauma care, and spine surgery. Our orthopedic specialists provide advanced treatment for all musculoskeletal conditions.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4200+</span>
                  <span className={styles.statLabel}>Surgeries Completed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>94%</span>
                  <span className={styles.statLabel}>Patient Satisfaction</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/ortho.jpg"
                alt="Orthopedics Department"
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
            <p>Advanced orthopedic care for bones, joints, and musculoskeletal conditions</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Orthopedics department specializes in the diagnosis and treatment of musculoskeletal conditions, from routine injuries to complex joint replacements. We combine advanced surgical techniques with comprehensive rehabilitation programs.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Joint Replacement Surgery</li>
                <li>Arthroscopic Surgery</li>
                <li>Sports Medicine</li>
                <li>Spine Surgery</li>
                <li>Trauma & Fracture Care</li>
                <li>Pediatric Orthopedics</li>
                <li>Hand & Upper Extremity</li>
                <li>Physical Therapy</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Advanced Imaging</h4>
                  <p>MRI, CT scan, and X-ray facilities for accurate diagnosis</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Arthroscopy Suite</h4>
                  <p>Minimally invasive surgery equipment for joint procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Rehabilitation Center</h4>
                  <p>Comprehensive physiotherapy and recovery programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Orthopedic Surgeons</h2>
            <p>Meet our team of experienced bone and joint specialists</p>
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
              <p>Schedule a consultation with our orthopedic specialists for comprehensive bone and joint care</p>
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
                  <span>Expert Orthopedists</span>
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
