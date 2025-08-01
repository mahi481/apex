"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Rajesh Malhotra",
    designation: "Chief Infectious Disease Specialist",
    experience: "22+ years",
    specialization: "Tropical Diseases & HIV Care",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Medicine), DM (Infectious Diseases), FIDSA",
  },
  {
    name: "Dr. Priya Singh",
    designation: "Senior Infectious Disease Consultant",
    experience: "17+ years",
    specialization: "Hospital Infections & Antimicrobial Stewardship",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Medicine), DNB, Fellowship in Infectious Diseases",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rajesh Malhotra" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Priya Singh" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rajesh Malhotra" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Priya Singh" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rajesh Malhotra" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function InfectiousDiseasesPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Infectious Diseases
              </div>
              <h1>
                <Shield size={40} />
                Infectious Diseases Department
              </h1>
              <p>
                Specialized care for infectious diseases including diagnosis, treatment, and prevention of bacterial, viral, fungal, and parasitic infections.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4200+</span>
                  <span className={styles.statLabel}>Cases Treated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>96%</span>
                  <span className={styles.statLabel}>Recovery Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/infectious.jpg"
                alt="Infectious Diseases Department"
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
            <p>Comprehensive infectious disease management with advanced diagnostic capabilities</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Infectious Diseases Department</h3>
              <p>
                Our Infectious Diseases Department provides specialized care for complex infections, antimicrobial stewardship, and infection prevention. We handle both community-acquired and hospital-acquired infections with evidence-based treatment protocols.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>HIV/AIDS Care & Treatment</li>
                <li>Tuberculosis Management</li>
                <li>Tropical Disease Treatment</li>
                <li>Hospital Infection Control</li>
                <li>Antimicrobial Stewardship</li>
                <li>Travel Medicine</li>
                <li>Immunocompromised Host Care</li>
                <li>Outbreak Investigation</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Microbiology Lab</h4>
                  <p>Advanced diagnostic laboratory for rapid pathogen identification</p>
                </div>
                <div className={styles.facilityCard}>
                  <Shield size={24} />
                  <h4>Isolation Units</h4>
                  <p>Specialized isolation facilities for highly infectious diseases</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>HIV Clinic</h4>
                  <p>Comprehensive HIV care with counseling and support services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Infectious Disease Specialists</h2>
            <p>Meet our team of experienced infectious disease experts</p>
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
              <p>Schedule a consultation with our infectious disease specialists</p>
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
