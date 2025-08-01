"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Kavita Sharma",
    designation: "Chief Dermatologist",
    experience: "19+ years",
    specialization: "Dermatopathology & Skin Cancer",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Dermatology), DDV, IADVL",
  },
  {
    name: "Dr. Arjun Mehta",
    designation: "Senior Dermatologist",
    experience: "14+ years",
    specialization: "Cosmetic Dermatology & Laser Therapy",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Dermatology), Fellowship in Cosmetic Dermatology",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Kavita Sharma" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Arjun Mehta" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Kavita Sharma" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Arjun Mehta" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Kavita Sharma" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function DermatologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Dermatology
              </div>
              <h1>
                <Eye size={40} />
                Dermatology Department
              </h1>
              <p>
                Comprehensive skin care services including medical dermatology, cosmetic procedures, and advanced laser treatments for all skin conditions.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Treatments</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Laser Systems</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/dermatology.jpg"
                alt="Dermatology Department"
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
            <p>Advanced dermatological care with cutting-edge technology and expert specialists</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Dermatology Department</h3>
              <p>
                Our Dermatology Department offers comprehensive skin care services from medical dermatology to advanced cosmetic procedures. We use the latest technology and evidence-based treatments for optimal results.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Medical Dermatology</li>
                <li>Skin Cancer Screening & Treatment</li>
                <li>Cosmetic Dermatology</li>
                <li>Laser Hair Removal</li>
                <li>Anti-Aging Treatments</li>
                <li>Acne & Scar Treatment</li>
                <li>Dermatosurgery</li>
                <li>Pediatric Dermatology</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Laser Suite</h4>
                  <p>Multiple laser systems for hair removal, skin resurfacing, and pigmentation treatment</p>
                </div>
                <div className={styles.facilityCard}>
                  <Eye size={24} />
                  <h4>Dermoscopy Lab</h4>
                  <p>Advanced dermoscopic examination for early skin cancer detection</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Phototherapy Unit</h4>
                  <p>UV therapy for psoriasis, vitiligo, and other skin conditions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Dermatologists</h2>
            <p>Meet our team of experienced skin specialists</p>
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
              <p>Schedule a consultation with our dermatology specialists</p>
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
                  <span>Expert Dermatologists</span>
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
