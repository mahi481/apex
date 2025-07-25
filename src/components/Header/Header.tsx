"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image";


import { Search, Menu, X, Calendar, Phone, ChevronDown } from "lucide-react"
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
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "ENT",
    "Ophthalmology",
    "Psychiatry",
  ]

 
  const handleEmergencyClick = () => {
    window.location.href = "tel:+919876543210"
  }

  const toggleMobileSubmenu = (menuName: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menuName ? "" : menuName)
  }

  return (
    <header className={styles.header}>
      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className="container">
          <div className={styles.headerContent}>
             <Link href="/" className={styles.logoWrapper}>
  <Image
    src="/images/apexlogo.jpg"
    alt="Apex Hospital Logo"
    fill
    className={styles.logo}
    priority
  />
</Link>


            

            {/* Search Bar */}
            <div className={styles.searchBar}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search doctors, services, health packages..."
                className={styles.searchInput}
              />
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <Link href="/doctors" className="btn-primary">
                Find Doctor
              </Link>
              <Link href="/appointment" className="btn-secondary">
                <Calendar size={16} />
                Book Appointment
              </Link>
              <div
                className={styles.emergencyContainer}
                onMouseEnter={() => setShowEmergencyTooltip(true)}
                onMouseLeave={() => setShowEmergencyTooltip(false)}
              >
                <button className={styles.emergencyBtn} onClick={handleEmergencyClick}>
                  <Phone size={16} />
                  Emergency Contact
                </button>
                {showEmergencyTooltip && (
                  <div className={styles.emergencyTooltip}>
                    <div className={styles.tooltipContent}>
                      <strong>Solapur Emergency</strong>
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

            {/* Mobile Menu Toggle */}
            <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className="container">
          <ul className={styles.navList}>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li
              className={`${styles.dropdown} ${styles.mobileExpandable}`}
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <div className={styles.navItemWrapper}>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <button className={styles.mobileExpandBtn} onClick={() => toggleMobileSubmenu("about")}>
                  <ChevronDown className={expandedMobileMenu === "about" ? styles.rotated : ""} />
                </button>
              </div>
              {/* Desktop Dropdown */}
              {showAbout && (
                <div className={`${styles.dropdownMenu} ${styles.desktopOnly}`}>
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
              {/* Mobile Expandable Menu */}
              {expandedMobileMenu === "about" && (
                <div className={`${styles.mobileSubmenu} ${styles.mobileOnly}`}>
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
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuContent}>
                    {specialities.map((speciality) => (
                      <Link
                        key={speciality}
                        href={`/specialities/${speciality.toLowerCase()}`}
                        className={styles.megaMenuItem}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {speciality}
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
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
