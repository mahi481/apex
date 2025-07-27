"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Sunita Agarwal",
    designation: "Chief Gynecologist",
    experience: "22+ years",
    specialization: "High-Risk Pregnancy & Fertility",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Obs & Gyn), DGO, FICOG",
  },
  {
    name: "Dr. Meera Joshi",
    designation: "Senior Obstetrician",
    experience: "17+ years",
    specialization: "Minimally Invasive Gynecologic Surgery",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Obs & Gyn), DNB, FMAS",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Sunita Agarwal" },
  { day: "Tuesday", time: "10:00 AM - 8:00 PM", doctor: "Dr. Meera Joshi" },
  { day: "Wednesday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Sunita Agarwal" },
  { day: "Thursday", time: "10:00 AM - 8:00 PM", doctor: "Dr. Meera Joshi" },
  { day: "Friday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Sunita Agarwal" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM", doctor: "Both Doctors" },
]

export default function ObstetricsGynecologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Obstetrics & Gynecology
              </div>
              <h1>
                <Stethoscope size={40} />
                Obstetrics & Gynecology Department
              </h1>
              <p>
                Comprehensive women's healthcare including pregnancy care, fertility treatments, gynecological surgeries, and preventive health services for all stages of life.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5200+</span>
                  <span className={styles.statLabel}>Deliveries</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Safe Deliveries</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Maternity Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Obstetrics & Gynecology Department"
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
            <p>Complete women's healthcare with advanced obstetric and gynecological services</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Obstetrics & Gynecology department provides comprehensive healthcare for women at every stage of life. From adolescence through menopause, we offer personalized care with advanced medical technology.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Prenatal & Postnatal Care</li>
                <li>High-Risk Pregnancy Management</li>
                <li>Fertility Treatments & IVF</li>
                <li>Minimally Invasive Gynecologic Surgery</li>
                <li>Menopause Management</li>
                <li>Gynecologic Cancer Screening</li>
                <li>Family Planning Services</li>
                <li>Adolescent Gynecology</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Labor & Delivery Suite</h4>
                  <p>Modern labor rooms with advanced monitoring and pain management</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>NICU</h4>
                  <p>Level III Neonatal Intensive Care Unit for premature and sick newborns</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>IVF Center</h4>
                  <p>State-of-the-art fertility center with advanced reproductive technologies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Specialists</h2>
            <p>Meet our team of experienced obstetricians and gynecologists</p>
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
              <p>Schedule a consultation with our women's health specialists</p>
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
                  <span>Expert Gynecologists</span>
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