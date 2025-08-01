"use client"

import Image from "next/image"
import Link from "next/link"
import { Baby, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Rekha Sharma",
    designation: "Chief Fertility Specialist",
    experience: "20+ years",
    specialization: "IVF & Reproductive Endocrinology",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DGO, Fellowship in Reproductive Medicine",
  },
  {
    name: "Dr. Amit Gupta",
    designation: "Senior Embryologist",
    experience: "15+ years",
    specialization: "Embryology & Laboratory Sciences",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "PhD (Embryology), Clinical Embryologist",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rekha Sharma" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Amit Gupta" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rekha Sharma" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Amit Gupta" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rekha Sharma" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function FertilityCentrePage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Fertility Centre (IVF)
              </div>
              <h1>
                <Baby size={40} />
                Fertility Centre (IVF)
              </h1>
              <p>
                Advanced fertility treatments including IVF, IUI, and reproductive endocrinology services with state-of-the-art laboratory facilities and personalized care.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>75%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2000+</span>
                  <span className={styles.statLabel}>Happy Families</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/ivf.jpg"
                alt="Fertility Centre"
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
            <p>Comprehensive fertility treatments with advanced reproductive technology</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Fertility Centre</h3>
              <p>
                Our Fertility Centre offers comprehensive reproductive health services with cutting-edge technology and personalized treatment plans. We provide hope and support to couples on their journey to parenthood.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>In Vitro Fertilization (IVF)</li>
                <li>Intrauterine Insemination (IUI)</li>
                <li>Egg Freezing & Preservation</li>
                <li>Sperm Banking</li>
                <li>Genetic Testing (PGT)</li>
                <li>Fertility Counseling</li>
                <li>Male Infertility Treatment</li>
                <li>Reproductive Surgery</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>IVF Laboratory</h4>
                  <p>State-of-the-art embryology lab with advanced incubation systems</p>
                </div>
                <div className={styles.facilityCard}>
                  <Baby size={24} />
                  <h4>Cryopreservation</h4>
                  <p>Advanced freezing technology for eggs, sperm, and embryos</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Surgical Suite</h4>
                  <p>Minimally invasive reproductive surgery facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Fertility Specialists</h2>
            <p>Meet our team of experienced reproductive medicine experts</p>
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
              <p>Schedule a consultation with our fertility specialists</p>
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
