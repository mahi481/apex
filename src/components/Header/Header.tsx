"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X, Phone, ChevronDown } from "lucide-react"
import styles from "./Header.module.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showSpecialities, setShowSpecialities] = useState(false)
  const [showCenters, setShowCenters] = useState(false)
  const [showHealthPackages, setShowHealthPackages] = useState(false)
  const [showNews, setShowNews] = useState(false)
  const [showEmergencyTooltip, setShowEmergencyTooltip] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState("")

  const aboutItems = ["Gallery"]
  const specialities = [
    "Cardiology",
    "Neurology", 
    "Oncology",
    "Orthopedics",
    "Dermatology",
    "Ophthalmology",
    "Psychiatry",
    "Critical Care",
    "Diabetology",
    "Emergency and Urgent Care",
    "Endocrinology",
    "Family Clinic",
    "Breast Clinic",
    "Infectious Diseases",
    "Fertility Centre (IVF)",
    "General Surgery",
    "General Medicine",
    "Geriatrics",
    "Gastroentrology",
    "Interventional Radiology",
    "Laboratory Services",
    "Lung Centre",
    "Liver Diseases",
    "Nephrology and Urology Science",
    "Obstetrics and Gynecology",
    "Plastic Surgery",
    "Pulmonology",
    "Spine Surgery",
    "Transfusion Medicine",
    "Vascular Surgery",
  ]

  const specialityDescriptions: { [key: string]: string } = {
    "Cardiology": "Heart and cardiovascular care",
    "Neurology": "Brain and nervous system",
    "Oncology": "Cancer treatment and care",
    "Orthopedics": "Bone, joint and muscle care",
    "Dermatology": "Skin, hair and nail care",
    "Ophthalmology": "Eye care and vision",
    "Psychiatry": "Mental health and wellness",
    "Critical Care": "Intensive care services",
    "Diabetology": "Diabetes management",
    "Emergency and Urgent Care": "24/7 emergency services",
    "Endocrinology": "Hormone and gland disorders",
    "Family Clinic": "Comprehensive family care",
    "Breast Clinic": "Specialized breast health",
    "Infectious Diseases": "Infection treatment",
    "Fertility Centre (IVF)": "Reproductive health",
    "General Surgery": "Surgical procedures",
    "General Medicine": "Primary healthcare",
    "Geriatrics": "Elderly care services",
    "Gastroentrology": "Digestive system care",
    "Interventional Radiology": "Minimally invasive procedures",
    "Laboratory Services": "Diagnostic testing",
    "Lung Centre": "Respiratory care",
    "Liver Diseases": "Hepatology services",
    "Nephrology and Urology Science": "Kidney and urinary care",
    "Obstetrics and Gynecology": "Women's health",
    "Plastic Surgery": "Cosmetic and reconstructive",
    "Pulmonology": "Lung and breathing care",
    "Spine Surgery": "Spinal care and surgery",
    "Transfusion Medicine": "Blood services",
    "Vascular Surgery": "Blood vessel surgery",
  }

  const specialityUrlMappings: { [key: string]: string } = {
    "Nephrology and Urology Science": "nephrology-urology",
    "Fertility Centre (IVF)": "fertility-centre",
    "Obstetrics and Gynecology": "obstetrics-gynecology",
  }

  const specialCases: { [key: string]: string } = {
    "Emergency and Urgent Care": "/emergency",
  }

  const getSpecialityUrl = (speciality: string): string => {
    if (specialCases[speciality]) {
      return specialCases[speciality]
    }
    if (specialityUrlMappings[speciality]) {
      return `/specialities/${specialityUrlMappings[speciality]}`
    }
    return `/specialities/${speciality.toLowerCase().replace(/\s+/g, "-")}`
  }

  const handleEmergencyClick = () => {
    window.location.href = "tel:+919876543210"
  }

  const toggleMobileSubmenu = (menuName: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menuName ? "" : menuName)
  }

  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const query = (e.currentTarget as HTMLInputElement).value.toLowerCase().trim()

      if (!query) return

      if (
        query.includes("dr") ||
        query.includes("doctor") ||
        query.includes("cardiology") ||
        query.includes("skin") ||
        query.includes("neuro")
      ) {
        router.push(`/doctors?q=${encodeURIComponent(query)}`)
      } else if (query.includes("checkup") || query.includes("package") || query.includes("health")) {
        router.push(`/health-packages?q=${encodeURIComponent(query)}`)
      } else if (query.includes("about") || query.includes("hospital")) {
        router.push(`/about`)
      } else if (query.includes("appointment")) {
        router.push(`/appointment`)
      } else if (query.includes("blogs") || query.includes("blog") || query.includes("Journal")) {
        router.push(`/blog`)
      } else if (query.includes("news") || query.includes("press") || query.includes("media")) {
        router.push(`/news-events`)
      } else if (query.includes("location")) {
        router.push(`/locations`)
      } else if (
        query.includes("service") ||
        query.includes("patient portal") ||
        query.includes("facility") ||
        query.includes("facilities")
      ) {
        router.push(`/patients-portal`)
      } else if (query.includes("emergency") || query.includes("ambulance") || query.includes("help")) {
        router.push(`/emergency`)
      } else if (query.includes("contact") || query.includes("address")) {
        router.push(`/contact`)
      } else {
        alert("No results found. Please try a different keyword.")
        return
      }

      setSearchTerm("")
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Main Header Grid */}
        <div className={styles.mainGridContainer}>
          {/* Logo Area */}
          <Link href="/" className={styles.logoArea} onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/Apex Logos.svg"
              alt="apex Hospital Logo"
              height={80}
              width={200}
              className={styles.logo}
              priority
            />
          </Link>

          {/* Desktop Right Content Area */}
          <div className={styles.desktopRightContentArea}>
            {/* Top Row: Search Bar and Action Buttons */}
            <div className={styles.topRowActions}>
              <div className={styles.searchBar}>
                <Search className={styles.searchIcon} size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className={styles.actionButtons}>
                <Link href="/doctors" className={styles.findDoctorBtn}>
                  Find Doctor
                </Link>
                <Link href="/appointment" className={styles.appointmentBtn}>
                  Book Appointment
                </Link>
                <div
                  className={styles.emergencyContainer}
                  onMouseEnter={() => setShowEmergencyTooltip(true)}
                  onMouseLeave={() => setShowEmergencyTooltip(false)}
                >
                  <button className={styles.emergencyBtn} onClick={handleEmergencyClick}>
                    <Phone size={16} />
                    Emergency
                    <ChevronDown size={14} />
                  </button>
                  {showEmergencyTooltip && (
                    <div className={styles.emergencyTooltip}>
                      <div className={styles.tooltipContent}>
                        <strong>Emergency Helpline</strong>
                        <span>+91-9876543210</span>
                        <small>Click to dial</small>
                      </div>
                    </div>
                  )}
                </div>
                <Link href="/contact" className={styles.contactBtn}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Bottom Row: Desktop Navigation */}
            <nav className={styles.desktopNavigation}>
              <ul className={styles.navList}>
                {/* <li>
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li> */}
                <li
                  className={styles.dropdown}
                  onMouseEnter={() => setShowAbout(true)}
                  onMouseLeave={() => setShowAbout(false)}
                >
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  {showAbout && (
                    <div className={styles.dropdownMenu}>
                      {aboutItems.map((item) => (
                        <Link
                          key={item}
                          href={`/${item.toLowerCase()}`}
                          className={styles.dropdownItem}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li
                  className={styles.dropdown}
                  onMouseEnter={() => setShowCenters(true)}
                  onMouseLeave={() => setShowCenters(false)}
                >
                  <Link href="/centers-of-excellence" onClick={() => setIsMenuOpen(false)}>
                    Centers of Excellence
                  </Link>
                </li>
                <li
                  className={styles.dropdown}
                  onMouseEnter={() => setShowSpecialities(true)}
                  onMouseLeave={() => setShowSpecialities(false)}
                >
                  <Link href="/specialities" onClick={() => setIsMenuOpen(false)}>
                    Specialities
                  </Link>
                  {showSpecialities && (
                    <div className={styles.dropdownMenu}>
                      {specialities.map((speciality) => (
                        <Link
                          key={speciality}
                          href={getSpecialityUrl(speciality)}
                          className={styles.dropdownItem}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {speciality}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <Link href="/locations" onClick={() => setIsMenuOpen(false)}>
                    Locations
                  </Link>
                </li>
                <li
                  className={styles.dropdown}
                  onMouseEnter={() => setShowHealthPackages(true)}
                  onMouseLeave={() => setShowHealthPackages(false)}
                >
                  <Link href="/health-packages" onClick={() => setIsMenuOpen(false)}>
                    Health Packages
                  </Link>
                </li>
                <li>
                  <Link href="/patients-portal" onClick={() => setIsMenuOpen(false)}>
                    Patients Portal
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                    Blog & Journal
                  </Link>
                </li>
                <li
                  className={styles.dropdown}
                  onMouseEnter={() => setShowNews(true)}
                  onMouseLeave={() => setShowNews(false)}
                >
                  <Link href="/news-events" onClick={() => setIsMenuOpen(false)}>
                    News & Events
                  </Link>
                </li>
                {/* <li>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNavigation} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
          {/* Mobile Menu Header */}
          <div className={styles.mobileMenuTopBar}>
            <div className={styles.mobileSearchBar}>
              <Search className={styles.searchIcon} size={18} />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button className={styles.mobileMenuCloseBtn} onClick={() => setIsMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Mobile Navigation List */}
          <div className={styles.mobileMenuScroll}>
            <ul className={styles.navListMobile}>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className={styles.mobileExpandable}>
                <div className={styles.navItemWrapper}>
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  <button 
                    className={`${styles.mobileExpandBtn} ${expandedMobileMenu === "about" ? styles.rotated : ""}`}
                    onClick={() => toggleMobileSubmenu("about")}
                  >
                    <ChevronDown size={20} />
                  </button>
                </div>
                {expandedMobileMenu === "about" && (
                  <div className={styles.mobileSubmenu}>
                    {aboutItems.map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className={styles.mobileSubmenuItem}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link href="/centers-of-excellence" onClick={() => setIsMenuOpen(false)}>
                  Centers of Excellence
                </Link>
              </li>
              <li className={styles.mobileExpandable}>
                <div className={styles.navItemWrapper}>
                  <Link href="/specialities" onClick={() => setIsMenuOpen(false)}>
                    Specialities
                  </Link>
                  <button 
                    className={`${styles.mobileExpandBtn} ${expandedMobileMenu === "specialities" ? styles.rotated : ""}`}
                    onClick={() => toggleMobileSubmenu("specialities")}
                  >
                    <ChevronDown size={20} />
                  </button>
                </div>
                {expandedMobileMenu === "specialities" && (
                  <div className={styles.mobileSubmenuScrollable}>
                    <div className={styles.mobileSubmenuHeader}>
                      <span>All Specialities</span>
                    </div>
                    <div className={styles.mobileSubmenuContent}>
                      {specialities.map((speciality) => (
                        <Link
                          key={speciality}
                          href={getSpecialityUrl(speciality)}
                          className={styles.mobileSubmenuItem}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className={styles.mobileSpecialityItem}>
                            <span className={styles.specialityName}>{speciality}</span>
                            <span className={styles.specialityDesc}>
                              {specialityDescriptions[speciality] || "Specialized care"}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link href="/locations" onClick={() => setIsMenuOpen(false)}>
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/health-packages" onClick={() => setIsMenuOpen(false)}>
                  Health Packages
                </Link>
              </li>
              <li>
                <Link href="/patients-portal" onClick={() => setIsMenuOpen(false)}>
                  Patients Portal
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog & Journal
                </Link>
              </li>
              <li>
                <Link href="/news-events" onClick={() => setIsMenuOpen(false)}>
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
