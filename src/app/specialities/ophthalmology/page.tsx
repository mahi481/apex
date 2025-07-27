"use client"

import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Calendar, Clock, Award, Users, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Sunita Agarwal",
    designation: "Chief Ophthalmologist",
    experience: "20+ years",
    specialization: "Cataract & Retinal Surgery",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Ophthalmology), FRCS, FICO",
  },
  {
    name: "Dr. Vikram Singh",
    designation: "Senior Eye Surgeon",
    experience: "15+ years",
    specialization: "Corneal Transplant & Glaucoma",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS (Ophthalmology), DNB, FCPS",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Sunita Agarwal" },
  { day: "Tuesday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Vikram Singh" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Sunita Agarwal" },
  { day: "Thursday", time: "9:00 AM - 7:00 PM", doctor: "Dr. Vikram Singh" },
  { day: "Friday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Sunita Agarwal" },
  { day: "Saturday", time: "8:00 AM - 4:00 PM", doctor: "Both Doctors" },
]

export default function OphthalmologyPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Ophthalmology
              </div>
              <h1>
                <Stethoscope size={40} />
                Ophthalmology Department
              </h1>
              <p>
                Comprehensive eye care services including routine eye exams, advanced surgical procedures, and treatment of complex eye conditions with state-of-the-art technology and expert care.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>8000+</span>
                  <span className={styles.statLabel}>Eye Surgeries</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ophthalmology Department"
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
            <p>Advanced eye care with precision surgery and comprehensive treatment</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Department</h3>
              <p>
                Our Ophthalmology department provides comprehensive eye care services with cutting-edge technology and highly skilled surgeons. We are committed to preserving and improving vision for patients of all ages.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Cataract Surgery</li>
                <li>Retinal Surgery</li>
                <li>Glaucoma Treatment</li>
                <li>Corneal Transplantation</li>
                <li>LASIK & Refractive Surgery</li>
                <li>Pediatric Ophthalmology</li>
                <li>Diabetic Eye Care</li>
                <li>Emergency Eye Care</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>LASIK Suite</h4>
                  <p>Advanced laser technology for vision correction surgery</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Surgical Microscopes</h4>
                  <p>High-precision microscopes for delicate eye surgeries</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>OCT Imaging</h4>
                  <p>Optical coherence tomography for detailed retinal imaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Ophthalmologists</h2>
            <p>Meet our team of experienced eye care specialists</p>
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
              <p>Schedule a comprehensive eye examination with our expert ophthalmologists</p>
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
                  <span>Expert Ophthalmologists</span>
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