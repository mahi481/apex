"use client"

import Image from "next/image"
import Link from "next/link"
import { Droplets, Calendar, Clock, Award, Users, Stethoscope } from "lucide-react"
import styles from "../cardiology/page.module.css"

const doctors = [
  {
    name: "Dr. Rajesh Hepatologist",
    designation: "Chief Hepatologist",
    experience: "23+ years",
    specialization: "Liver Transplant & Hepatitis Management",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Hepatology), FRCP",
  },
  {
    name: "Dr. Meera Liver",
    designation: "Senior Liver Specialist",
    experience: "18+ years",
    specialization: "Cirrhosis & Liver Cancer Treatment",
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Hepatology), FACG",
  },
]

const schedule = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rajesh Hepatologist" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Meera Liver" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rajesh Hepatologist" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM", doctor: "Dr. Meera Liver" },
  { day: "Friday", time: "9:00 AM - 6:00 PM", doctor: "Dr. Rajesh Hepatologist" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM", doctor: "Both Doctors" },
]

export default function LiverDiseasesPage() {
  return (
    <div className={styles.specialityPage}>
      <div className="container">
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link href="/specialities">Specialities</Link> / Liver Diseases
              </div>
              <h1>
                <Droplets size={40} />
                Liver Diseases Department
              </h1>
              <p>
                Specialized care for liver diseases including hepatitis, cirrhosis, liver cancer, and liver transplant services with advanced diagnostic and treatment facilities.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2500+</span>
                  <span className={styles.statLabel}>Patients Treated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>92%</span>
                  <span className={styles.statLabel}>Treatment Success</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Care</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/liver.jpg"
                alt="Liver Diseases Department"
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
            <p>Comprehensive liver care with advanced diagnostic and treatment capabilities</p>
          </div>

          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>About Our Liver Diseases Department</h3>
              <p>
                Our Liver Diseases Department provides comprehensive care for all types of liver conditions, from acute hepatitis to chronic liver disease and liver transplantation. We offer advanced diagnostic services and personalized treatment plans.
              </p>

              <h3>Services We Offer</h3>
              <ul className={styles.servicesList}>
                <li>Hepatitis B & C Treatment</li>
                <li>Liver Cirrhosis Management</li>
                <li>Liver Cancer Treatment</li>
                <li>Liver Transplant Services</li>
                <li>Fatty Liver Disease Care</li>
                <li>Liver Biopsy & Imaging</li>
                <li>Portal Hypertension Treatment</li>
                <li>Nutritional Counseling</li>
              </ul>

              <h3>Advanced Facilities</h3>
              <div className={styles.facilitiesGrid}>
                <div className={styles.facilityCard}>
                  <Award size={24} />
                  <h4>Liver Transplant Unit</h4>
                  <p>State-of-the-art liver transplant facility with experienced surgical team</p>
                </div>
                <div className={styles.facilityCard}>
                  <Droplets size={24} />
                  <h4>Hepatology Lab</h4>
                  <p>Advanced liver function testing and viral load monitoring</p>
                </div>
                <div className={styles.facilityCard}>
                  <Stethoscope size={24} />
                  <h4>Imaging Center</h4>
                  <p>Specialized liver imaging including MRI, CT, and ultrasound</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Liver Specialists</h2>
            <p>Meet our team of experienced hepatologists</p>
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
              <p>Schedule a consultation with our liver disease specialists</p>
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
                  <span>Expert Hepatologists</span>
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
