"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Ashok Kumar",
    designation: "Chief Transfusion Medicine Specialist",
    experience: "23+ years",
    specialization: "Blood Banking & Transfusion",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Pathology), DM (Transfusion Medicine)",
  },
  {
    name: "Dr. Kavita Rao",
    designation: "Senior Blood Bank Officer",
    experience: "18+ years",
    specialization: "Apheresis & Component Therapy",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Pathology), Transfusion Medicine",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 5:00 PM", doctor: "Dr. Ashok Kumar" },
  { day: "Tuesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Kavita Rao" },
  { day: "Wednesday", time: "8:00 AM - 5:00 PM", doctor: "Dr. Ashok Kumar" },
  { day: "Thursday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Kavita Rao" },
  { day: "Friday", time: "8:00 AM - 5:00 PM", doctor: "Dr. Ashok Kumar" },
  { day: "Saturday", time: "8:00 AM - 2:00 PM", doctor: "Both Doctors" },
]

export default function TransfusionMedicinePage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Transfusion Medicine
              </div>
              <h1>
                <Stethoscope size={40} />
                Transfusion Medicine Department
              </h1>
              <p>
                Advanced blood banking and transfusion services ensuring safe blood supply, component therapy, and specialized apheresis procedures with highest safety standards.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15000+</span>
                  <span className={styles.statLabel}>Units Processed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>99.9%</span>
                  <span className={styles.statLabel}>Safety Record</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Blood</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/transfusion.png"
                alt="Transfusion Medicine Department"
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
            <p>Safe and reliable blood banking services with advanced transfusion medicine</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Transfusion Medicine department is committed to providing safe, effective blood products and transfusion services. We maintain the highest standards of quality and safety in all our procedures.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Blood Donation & Collection</li>
                <li>Blood Component Preparation</li>
                <li>Cross-matching & Compatibility Testing</li>
                <li>Platelet Apheresis</li>
                <li>Plasma Exchange Therapy</li>
                <li>Autologous Blood Collection</li>
                <li>Blood Group Serology</li>
                <li>Emergency Blood Supply</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Modern Blood Bank</h4>
                  <p>State-of-the-art blood storage and processing facilities</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Apheresis Center</h4>
                  <p>Advanced apheresis equipment for specialized procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Testing Laboratory</h4>
                  <p>Comprehensive infectious disease screening and immunohematology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Specialists</h2>
            <p>Meet our team of transfusion medicine experts</p>
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
              <p>Schedule a consultation with our transfusion medicine specialists</p>
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
