"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Bone,
  Calendar,
  Clock,
  Award,
  Users,
  Stethoscope
} from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Arjun Mehra",
    designation: "Chief Orthopedic Surgeon",
    experience: "20+ years",
    specialization: "Joint Replacement & Trauma Surgery",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MBBS, MS (Ortho), Fellowship in Joint Replacement",
  },
  {
    name: "Dr. Priya Nair",
    designation: "Consultant Orthopedic Surgeon",
    experience: "14+ years",
    specialization: "Sports Injuries & Arthroscopy",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MBBS, DNB (Orthopedics)",
  },
]

const schedule = [
  { day: "Monday", time: "10:00 AM - 5:00 PM", doctor: "Dr. Arjun Mehra" },
  { day: "Tuesday", time: "11:00 AM - 6:00 PM", doctor: "Dr. Priya Nair" },
  { day: "Wednesday", time: "10:00 AM - 5:00 PM", doctor: "Dr. Arjun Mehra" },
  { day: "Thursday", time: "11:00 AM - 6:00 PM", doctor: "Dr. Priya Nair" },
  { day: "Friday", time: "10:00 AM - 5:00 PM", doctor: "Dr. Arjun Mehra" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM", doctor: "Both Doctors" },
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
                <Bone size={40} />
                Orthopedics Department
              </h1>
              <p>
                Advanced care for bones, joints, and muscles. We offer total joint replacement, trauma surgery, and sports injury management by leading orthopedic experts.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3000+</span>
                  <span className={styles.statLabel}>Successful Surgeries</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Recovery Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Trauma Services</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=600"
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
            <p>Comprehensive orthopedic care with advanced technology</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                The Orthopedics Department is dedicated to the diagnosis and treatment of musculoskeletal disorders. We provide advanced surgical and non-surgical care for joint pain, fractures, spine issues, and sports injuries.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Total Knee & Hip Replacement</li>
                <li>Fracture and Trauma Surgery</li>
                <li>Arthroscopy & Sports Injury Management</li>
                <li>Spinal Surgery</li>
                <li>Pediatric Orthopedic Care</li>
                <li>Joint Preservation Procedures</li>
                <li>Bone Tumor Management</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Computer-Assisted Surgery</h4>
                  <p>Precision joint replacement with robotic navigation</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Rehab & Physiotherapy Unit</h4>
                  <p>Dedicated recovery programs post-surgery</p>
                </div>
                <div className={styles.facilityCard}>
                  <Bone size={24} />
                  <h4>Trauma Care</h4>
                  <p>24/7 emergency orthopedic and fracture services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Orthopedic Surgeons</h2>
            <p>Highly experienced surgeons committed to your mobility</p>
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
            <p>Consultation hours for orthopedic specialists</p>
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
              <p>Get expert orthopedic care today</p>
              <div className={styles.appointmentFeatures}>
                <div className={styles.feature}>
                  <Calendar size={24} />
                  <span>Easy Online Booking</span>
                </div>
                <div className={styles.feature}>
                  <Clock size={24} />
                  <span>Flexible Consultation Hours</span>
                </div>
                <div className={styles.feature}>
                  <Users size={24} />
                  <span>Trusted Orthopedic Experts</span>
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
