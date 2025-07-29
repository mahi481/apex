import Image from "next/image"
import Link from "next/link"
import { Heart, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "./page.module.css"

const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    designation: "Chief Cardiologist",
    experience: "25+ years",
    specialization: "Interventional Cardiology",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Cardiology), FACC",
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Senior Cardiologist",
    experience: "18+ years",
    specialization: "Pediatric Cardiology",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Cardiology), FICC",
  },
  {
    name: "Dr. Amit Patel",
    designation: "Cardiac Surgeon",
    experience: "20+ years",
    specialization: "Cardiac Surgery",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS, MCh (CTVS), FICS",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Tuesday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Priya Sharma" },
  { day: "Wednesday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Rajesh Kumar" },
  { day: "Thursday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Amit Patel" },
  { day: "Friday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Priya Sharma" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM", doctor: "Dr. Rajesh Kumar" },
]

export default function CardiologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Cardiology
              </div>
              <h1>
                <Heart size={40} />
                Cardiology Department
              </h1>
              <p>
                Advanced cardiac care with state-of-the-art facilities and experienced cardiologists dedicated to heart
                health and cardiovascular wellness.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Procedures</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="images/heart (2).jpg"
                alt="Cardiology Department"
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
            <a href="#overview" className={styles.tab}>
              Overview
            </a>
            <a href="#doctors" className={styles.tab}>
              Doctors
            </a>
            <a href="#schedule" className={styles.tab}>
              Schedule
            </a>
            <a href="#appointment" className={styles.tab}>
              Book Appointment
            </a>
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Overview</h2>
            <p>Comprehensive cardiac care with advanced technology and expert medical professionals</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Cardiology Department</h3>
              <p>
                Our Cardiology Department is equipped with the latest technology and staffed by highly experienced
                cardiologists and cardiac surgeons. We provide comprehensive cardiac care ranging from preventive
                cardiology to complex cardiac interventions.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Diagnostic Cardiology (ECG, Echo, Stress Tests)</li>
                <li>Interventional Cardiology (Angioplasty, Stenting)</li>
                <li>Cardiac Surgery (Bypass Surgery, Valve Replacement)</li>
                <li>Pediatric Cardiology</li>
                <li>Cardiac Rehabilitation</li>
                <li>24/7 Emergency Cardiac Care</li>
                <li>Preventive Cardiology Programs</li>
                <li>Heart Failure Management</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Cath Lab</h4>
                  <p>State-of-the-art catheterization laboratory for diagnostic and therapeutic procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Cardiac ICU</h4>
                  <p>Specialized intensive care unit for cardiac patients with advanced monitoring</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Echo Lab</h4>
                  <p>Advanced echocardiography services including 3D and stress echo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Cardiologists</h2>
            <p>Meet our team of experienced cardiac specialists</p>
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
              <p>Schedule a consultation with our cardiac specialists</p>
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
                  <span>Expert Cardiologists</span>
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
