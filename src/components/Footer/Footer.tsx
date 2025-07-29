import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Hospital Info */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Apex Hospital</h3>
            <p className={styles.text}>
              Leading multi-specialty hospital in Solapur providing world-class healthcare services with compassion and
              excellence.
            </p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/profile.php?id=61578704582486" className={styles.socialLink}>
                <Facebook />
              </a>
              <a href="https://www.instagram.com/apex_hospital_solapur/" className={styles.socialLink}>
                <Instagram />
              </a>
               <a href="https://www.linkedin.com/in/apex-hospital-7a1959376/" className={styles.socialLink}>
                <Linkedin />
              </a>
              <a href="#" className={styles.socialLink}>
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/centers-of-excellence">Centers of Excellence</Link>
              </li>
              <li>
                <Link href="/specialities">Specialities</Link>
              </li>
              <li>
                <Link href="/health-packages">Health Packages</Link>
              </li>
              <li>
                <Link href="/patients-portal">Patients Portal</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/appointment">Book Appointment</Link>
              </li>
              <li>
                <Link href="/doctors">Find Doctor</Link>
              </li>
              <li>
                <Link href="/emergency">Emergency Care</Link>
              </li>
              <li>
                <Link href="/facilities">Facilities</Link>
              </li>
              <li>
                <Link href="/health-packages">Health Checkups</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact Info</h3>
            <div className={styles.contactItem}>
              <MapPin className={styles.contactIcon} />
              <span>123 Medical Center Rd, Solapur 413001</span>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <span>+91-217-2345678</span>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} />
              <span>info@apexhospital.com</span>
            </div>
            <div className={styles.contactItem}>
              <Clock className={styles.contactIcon} />
              <span>24/7 Emergency Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>© 2024 Apex Hospital. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
