"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Calendar, Clock, Award, Stethoscope, Heart } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Ashok Kumar",
    designation: "Chief Family Physician",
    experience: "25+ years",
    specialization: "Family Medicine & Preventive Care",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MBBS, MD (Family Medicine), MRCGP",
  },
  {
    name: "Dr. Sunita Verma",
    designation: "Senior Family Physician",
    experience: "20+ years",
    specialization: "Women's Health & Pediatric Care",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MBBS, MD (Family Medicine), DCH",
  },
]

const schedule = [
  { day: "Monday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Ashok Kumar" },
  { day: "Tuesday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Sunita Verma" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Ashok Kumar" },
  { day: "Thursday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Sunita Verma" },
  { day: "Friday", time: "8:00 AM - 6:00 PM", doctor: "Dr. Ashok Kumar" },
  { day: "Saturday", time: "8:00 AM - 4:00 PM", doctor: "Both Doctors" },
]

export default function FamilyClinicPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Family Clinic
              </div>
              <h1>
                <Users size={40} />
                Family Clinic Department
              </h1>
              <p>
                Comprehensive primary healthcare for the entire family, from newborns to seniors, with preventive care, health screenings, and continuity of care.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10000+</span>
                  <span className={styles.statLabel}>Families Served</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Satisfaction Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>All Ages</span>
                  <span className={styles.statLabel}>Comprehensive Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/familyclinic.jpg"
                alt="Family Clinic Department"
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
            <p>Primary healthcare services for all family members with personalized care</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Family Clinic</h3>
              <p>
                Our Family Clinic provides comprehensive primary healthcare services for patients of all ages. We focus on building long-term relationships with families to provide continuous, coordinated care that addresses both immediate health needs and long-term wellness goals.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Routine Health Check-ups</li>
                <li>Immunizations & Vaccinations</li>
                <li>Chronic Disease Management</li>
                <li>Preventive Care Screenings</li>
                <li>Minor Injuries & Illness Treatment</li>
                <li>Womens Health Services</li>
                <li>Pediatric Care</li>
                <li>Geriatric Care</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Electronic Health Records</h4>
                  <p>Comprehensive digital health records for continuity of family care</p>
                </div>
                <div className={styles.facilityCard}>
                  <Users size={24} />
                  <h4>Family Care Coordination</h4>
                  <p>Coordinated care plans for entire families with shared health goals</p>
                </div>
                <div className={styles.facilityCard}>
                  <Heart size={24} />
                  <h4>Preventive Care Programs</h4>
                  <p>Comprehensive wellness programs and health maintenance schedules</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Family Physicians</h2>
            <p>Meet our team of experienced family medicine specialists</p>
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
              <p>Schedule a consultation with our family medicine specialists</p>
              <div className={styles.appointmentFeatures}>
                <div className={styles.feature}>
                  <Calendar size={24} />
                  <span>Easy Online Booking</span>
                </div>
                <div className={styles.feature}>
                  <Clock size={24} />
                  <span>Extended Hours</span>
                </div>
                <div className={styles.feature}>
                  <Users size={24} />
                  <span>Family-Centered Care</span>
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
