import Image from "next/image"
import Link from "next/link"
import { Brain, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Sunita Rao",
    designation: "Chief Neurologist",
    experience: "22+ years",
    specialization: "Stroke & Cerebrovascular Disease",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Neurology), FIAN",
  },
  {
    name: "Dr. Vikram Singh",
    designation: "Senior Neurologist",
    experience: "15+ years",
    specialization: "Epilepsy & Movement Disorders",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Neurology), FICP",
  },
]

const schedule = [
  { day: "Monday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Sunita Rao" },
  { day: "Tuesday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Vikram Singh" },
  { day: "Wednesday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Sunita Rao" },
  { day: "Thursday", time: "9:00 AM - 5:00 PM", doctor: "Dr. Vikram Singh" },
  { day: "Friday", time: "10:00 AM - 6:00 PM", doctor: "Dr. Sunita Rao" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM", doctor: "Dr. Vikram Singh" },
]

export default function NeurologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Neurology
              </div>
              <h1>
                <Brain size={40} />
                Neurology Department
              </h1>
              <p>
                Comprehensive neurological care for brain, spine, and nervous system disorders with advanced diagnostic
                and treatment facilities.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3000+</span>
                  <span className={styles.statLabel}>Procedures</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>96%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Stroke Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/neuro.jpg"
                alt="Neurology Department"
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
            <p>Advanced neurological care with cutting-edge technology and expert neurologists</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Neurology Department</h3>
              <p>
                Our Neurology Department provides comprehensive care for disorders of the brain, spinal cord, and
                nervous system. We combine advanced diagnostic capabilities with personalized treatment approaches to
                deliver the best possible outcomes for our patients.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Stroke Care & Prevention</li>
                <li>Epilepsy Management</li>
                <li>Movement Disorders (Parkinsons, etc.)</li>
                <li>Headache & Migraine Treatment</li>
                <li>Memory Disorders & Dementia Care</li>
                <li>Neuromuscular Disorders</li>
                <li>Sleep Disorders</li>
                <li>Neurological Rehabilitation</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>EEG Lab</h4>
                  <p>Advanced electroencephalography for brain activity monitoring and epilepsy diagnosis</p>
                </div>
                <div className={styles.facilityCard}>
                  <Brain size={24} />
                  <h4>Stroke Unit</h4>
                  <p>Specialized stroke care unit with 24/7 monitoring and rapid intervention capabilities</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>EMG/NCV Lab</h4>
                  <p>Electromyography and nerve conduction studies for neuromuscular disorders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Neurologists</h2>
            <p>Meet our team of experienced neurological specialists</p>
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
              <p>Schedule a consultation with our neurological specialists</p>
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
                  <span>Expert Neurologists</span>
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
