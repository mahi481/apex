"use client"

import Image from "next/image"
import Link from "next/link"
import { FlaskConical, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Vikash Gupta",
    designation: "Chief Gastroenterologist",
    experience: "21+ years",
    specialization: "Liver Diseases & Endoscopy",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Gastroenterology), FACG",
  },
  {
    name: "Dr. Sunita Rao",
    designation: "Senior Gastroenterologist",
    experience: "16+ years",
    specialization: "IBD & Therapeutic Endoscopy",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Gastroenterology), MRCP",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Vikash Gupta" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Sunita Rao" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Vikash Gupta" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Sunita Rao" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Vikash Gupta" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function GastroenterologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Gastroenterology
              </div>
              <h1>
                <FlaskConical size={40} />
                Gastroenterology Department
              </h1>
              <p>
                Comprehensive digestive health services including advanced endoscopy, liver disease management, and treatment of gastrointestinal disorders.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4500+</span>
                  <span className={styles.statLabel}>Procedures</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>97%</span>
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
                src="/placeholder.svg?height=400&width=600"
                alt="Gastroenterology Department"
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
            <p>Advanced digestive care with state-of-the-art endoscopy and treatment facilities</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Gastroenterology Department</h3>
              <p>
                Our Gastroenterology Department provides comprehensive care for digestive system disorders, from routine screening to complex therapeutic procedures. We use advanced endoscopic techniques for diagnosis and treatment.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Upper & Lower Endoscopy</li>
                <li>Colonoscopy & Cancer Screening</li>
                <li>Liver Disease Management</li>
                <li>Inflammatory Bowel Disease Care</li>
                <li>ERCP & Biliary Procedures</li>
                <li>Therapeutic Endoscopy</li>
                <li>Hepatitis Treatment</li>
                <li>Nutritional Counseling</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Endoscopy Suite</h4>
                  <p>State-of-the-art endoscopy equipment for diagnostic and therapeutic procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <FlaskConical size={24} />
                  <h4>Liver Clinic</h4>
                  <p>Specialized care for liver diseases including hepatitis and cirrhosis</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>IBD Center</h4>
                  <p>Comprehensive inflammatory bowel disease management and treatment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Gastroenterologists</h2>
            <p>Meet our team of experienced digestive health specialists</p>
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
              <p>Schedule a consultation with our gastroenterology specialists</p>
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
                  <span>Expert Gastroenterologists</span>
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