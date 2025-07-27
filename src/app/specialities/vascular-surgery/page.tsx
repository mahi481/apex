"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Manish Gupta",
    designation: "Chief Vascular Surgeon",
    experience: "21+ years",
    specialization: "Endovascular Surgery & Aneurysm Repair",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Surgery), MCh (Vascular Surgery), FICS",
  },
  {
    name: "Dr. Deepika Singh",
    designation: "Senior Vascular Surgeon",
    experience: "16+ years",
    specialization: "Varicose Veins & Diabetic Foot",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Surgery), DNB (Vascular Surgery)",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Manish Gupta" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Deepika Singh" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Manish Gupta" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Deepika Singh" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Manish Gupta" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function VascularSurgeryPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Vascular Surgery
              </div>
              <h1>
                <Stethoscope size={40} />
                Vascular Surgery Department
              </h1>
              <p>
                Comprehensive vascular care including treatment of arterial and venous diseases, minimally invasive endovascular procedures, and advanced surgical interventions.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1600+</span>
                  <span className={styles.statLabel}>Surgeries</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>96%</span>
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
                alt="Vascular Surgery Department"
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
            <p>Advanced vascular surgery with minimally invasive techniques</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Vascular Surgery department specializes in the diagnosis and treatment of diseases affecting the circulatory system. We offer both traditional open surgical procedures and minimally invasive endovascular treatments.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Aneurysm Repair (Open & Endovascular)</li>
                <li>Carotid Artery Surgery</li>
                <li>Peripheral Artery Disease Treatment</li>
                <li>Varicose Vein Treatment</li>
                <li>Diabetic Foot Care</li>
                <li>Deep Vein Thrombosis Treatment</li>
                <li>Arterial Bypass Surgery</li>
                <li>Dialysis Access Creation</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Hybrid OR</h4>
                  <p>Advanced hybrid operating rooms for complex vascular procedures</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Vascular Lab</h4>
                  <p>Non-invasive vascular testing and diagnostic imaging</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Endovascular Suite</h4>
                  <p>Minimally invasive catheter-based treatments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Surgeons</h2>
            <p>Meet our team of experienced vascular surgeons</p>
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
              <p>Schedule a consultation with our vascular surgery specialists</p>
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
                  <span>Expert Surgeons</span>
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