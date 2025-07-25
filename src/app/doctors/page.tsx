"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Calendar, Star, MapPin } from "lucide-react"
import styles from "./page.module.css"

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiology",
    designation: "Chief Cardiologist",
    experience: "25+ years",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Cardiology), FACC",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹800",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "Neurology",
    designation: "Senior Neurologist",
    experience: "20+ years",
    rating: 4.8,
    reviews: 142,
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Neurology), FIAN",
    availability: "Tue, Thu, Sat",
    consultationFee: "₹750",
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    specialization: "Orthopedics",
    designation: "Orthopedic Surgeon",
    experience: "18+ years",
    rating: 4.7,
    reviews: 98,
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MS, MCh (Orthopedics)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹700",
  },
  {
    id: 4,
    name: "Dr. Sunita Rao",
    specialization: "Pediatrics",
    designation: "Head of Pediatrics",
    experience: "22+ years",
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD (Pediatrics), IAP",
    availability: "Mon to Sat",
    consultationFee: "₹600",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    specialization: "Oncology",
    designation: "Medical Oncologist",
    experience: "15+ years",
    rating: 4.8,
    reviews: 87,
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DM (Oncology)",
    availability: "Tue, Thu, Sat",
    consultationFee: "₹900",
  },
  {
    id: 6,
    name: "Dr. Kavita Nair",
    specialization: "Gynecology",
    designation: "Senior Gynecologist",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/placeholder.svg?height=300&width=300",
    qualifications: "MD, DGO",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
]

const specializations = [
  "All Specializations",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
  "Gynecology",
  "Dermatology",
  "ENT",
  "Ophthalmology",
]

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [filteredDoctors, setFilteredDoctors] = useState(doctors)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterDoctors(term, selectedSpecialization)
  }

  const handleSpecializationFilter = (specialization: string) => {
    setSelectedSpecialization(specialization)
    filterDoctors(searchTerm, specialization)
  }

  const filterDoctors = (term: string, specialization: string) => {
    let filtered = doctors

    if (term) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(term.toLowerCase()) ||
          doctor.specialization.toLowerCase().includes(term.toLowerCase()),
      )
    }

    if (specialization !== "All Specializations") {
      filtered = filtered.filter((doctor) => doctor.specialization === specialization)
    }

    setFilteredDoctors(filtered)
  }

  return (
    <div className={styles.doctorsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Find a Doctor</h1>
          <p>Connect with our experienced medical professionals</p>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by doctor name or specialization..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterSection}>
            <Filter size={20} />
            <select
              value={selectedSpecialization}
              onChange={(e) => handleSpecializationFilter(e.target.value)}
              className={styles.filterSelect}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.resultsSection}>
          <p className={styles.resultsCount}>
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
          </p>

          <div className={styles.doctorsGrid}>
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className={styles.doctorCard}>
                <div className={styles.doctorImage}>
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} width={300} height={300} />
                </div>
                <div className={styles.doctorInfo}>
                  <h3>{doctor.name}</h3>
                  <p className={styles.specialization}>{doctor.specialization}</p>
                  <p className={styles.designation}>{doctor.designation}</p>
                  <p className={styles.qualifications}>{doctor.qualifications}</p>
                  <p className={styles.experience}>{doctor.experience} Experience</p>

                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      <Star size={16} fill="currentColor" />
                      <span>{doctor.rating}</span>
                    </div>
                    <span className={styles.reviews}>({doctor.reviews} reviews)</span>
                  </div>

                  <div className={styles.availability}>
                    <MapPin size={16} />
                    <span>Available: {doctor.availability}</span>
                  </div>

                  <div className={styles.consultationFee}>
                    <span>Consultation Fee: {doctor.consultationFee}</span>
                  </div>

                  <Link href="/appointment" className="btn-primary">
                    <Calendar size={16} />
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className={styles.noResults}>
              <h3>No doctors found</h3>
              <p>Try adjusting your search criteria or browse all doctors.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
