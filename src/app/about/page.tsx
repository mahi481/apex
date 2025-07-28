import Image from "next/image"
import { Award, Heart, Users, Target, Eye, Handshake } from "lucide-react"
import styles from "./page.module.css"

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. RIZWAN UL HAQUE",
      qualifications: "MBBS, MD, DNB, MNAMS, DM(Cardiology), FACC(USA), FSCAI(USA), FESC(Paris), FRCP(Glasgow), FCCP(USA), FRSTM(London)",
      position: "Chairman",
      specialization: "Cardiology",
      experience: "25+ years",
      image: "/images/sir.JPG",
    },
    {
      name: "Dr. MEHA JABEEN HAQ ",
      qualifications: " M.B.B.S, M.S(OBG), FMAS, DMAS",
      position: "CEO",
      specialization: "High Risk Pregnancy Gynecological Endoscopic Surgeries",
      experience: "20+ years",
      image: "/images/maam.jpg",
    },
    { 
      name: "Dr. FAROOQ MANIYAR",
      qualifications: " B.com, MBA, PhD",
      position: "Managing Director",
      specialization: "Hospital Administration",
      experience: "18+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    
  ]

  const achievements = [
    { icon: <Award />, title: "NABH Accredited", description: "National Accreditation Board for Hospitals" },
    { icon: <Heart />, title: "50,000+ Lives Saved", description: "Over two decades of service" },
    { icon: <Users />, title: "500+ Medical Staff", description: "Experienced healthcare professionals" },
    { icon: <Target />, title: "99% Success Rate", description: "In critical care procedures" },
  ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>About Apex Hospital</h1>
              <p>
                Leading healthcare excellence in Solapur with over 25 years of dedicated service to the community. We
                combine advanced medical technology with compassionate care to provide the best possible outcomes for
                our patients.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/apex.jpg"
                alt="Apex Hospital Building"
                width={600}
                height={400}
                className={styles.hospitalImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className={styles.visionMissionSection}>
        <div className="container">
          <div className={styles.visionMissionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <Eye />
              </div>
              <h3>Our Vision</h3>
              <p>
                Our unified vision is to offer a broad range of high quality cost effective tertiary care health services accessible to unique needs of individuals in the region and beyound. To establish a premier heath care facility where each of its speciality will offer its highest quality care for all diseases.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <Target />
              </div>
              <h3>Our Mission</h3>
              <p>
                Our Mission is to create world class health care facility which is committed to deliver highest quality facility medical care.Though superior medical and operational services.We are also committed to provide leadership to enhance the general health status of the population in the region.
              </p>
            </div>
            <div className={styles.valuesCard}>
              <div className={styles.cardIcon}>
                <Handshake />
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, Excellence, Compassion, Innovation, and Teamwork guide everything we do. We believe in
                treating every patient with dignity and respect while maintaining the highest ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className={styles.aboutContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h2>Excellence in Healthcare Since 1998</h2>
              <p>
                Apex Hospital has been at the forefront of healthcare innovation in Solapur for over two decades. What
                started as a small clinic has grown into a comprehensive healthcare facility serving thousands of
                patients annually.
              </p>

              <p>
                Our state-of-the-art facility houses advanced medical equipment, modern operation theaters, intensive
                care units, and comfortable patient rooms. We specialize in multiple medical disciplines including
                cardiology, neurology, oncology, orthopedics, and emergency medicine.
              </p>

              <p>
                Located in the heart of Solapur, we serve not only the local community but also patients from
                surrounding districts who seek quality healthcare. Our commitment to excellence has earned us
                recognition as one of the leading hospitals in the region.
              </p>

              <div className={styles.highlights}>
                <h3>Why Choose Apex Hospital?</h3>
                <ul>
                  <li>24/7 Emergency Services with dedicated trauma center</li>
                  <li>Advanced diagnostic and imaging facilities</li>
                  <li>Experienced team of specialist doctors</li>
                  <li>Modern operation theaters with latest technology</li>
                  <li>Comprehensive ICU and NICU facilities</li>
                  <li>Affordable healthcare with insurance support</li>
                  <li>Patient-centered care approach</li>
                  <li>Continuous medical education and research</li>
                </ul>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/1.png"
                alt="Apex Hospital Building"
                width={600}
                height={400}
                className={styles.hospitalImage}
              />
            </div>       </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.achievementsSection}>
        <div className="container">
          <h2>Our Achievements</h2>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Meet Our Leadership Team</h2>
            <p>Our experienced medical professionals are dedicated to providing exceptional healthcare</p>
          </div>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.memberImage}>
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} width={300} height={300} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                   <h4>{member.qualifications}</h4>
                  <p className={styles.position}>{member.position}</p>
                  <p className={styles.specialization}>{member.specialization}</p>
                  <p className={styles.experience}>{member.experience} Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.locationSection}>
        <div className="container">
          <div className={styles.locationContent}>
            <div className={styles.locationInfo}>
              <h2>Our Location</h2>
              <p>
                Strategically located in Solapur, Maharashtra, Apex Hospital is easily accessible from all parts of the
                city and surrounding areas.
              </p>
              <div className={styles.addressDetails}>
                <h3>Address</h3>
                <p>
                  Apex Hospital
                  <br />
                  Medical Complex, Station Road
                  <br />
                  Solapur, Maharashtra 413001
                  <br />
                  India
                </p>

                <h3>Contact Information</h3>
                <p>
                  Phone: +91-9876543210
                  <br />
                  Emergency: +91-9876543211
                  <br />
                  Email: info@apexhospital.com
                </p>

                <h3>Operating Hours</h3>
                <p>
                  24/7 Emergency Services
                  <br />
                  OPD: Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hospital Location Map"
                  width={600}
                  height={400}
                />
                <div className={styles.mapOverlay}>
                  <p>Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
