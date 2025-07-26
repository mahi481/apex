import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft, User } from "lucide-react"
import styles from "./page.module.css"

const pressReleases = [
  {
    id: 1,
    title: "Apex Hospital Launches New Cardiac Care Unit",
    date: "2024-01-20",
    excerpt: "State-of-the-art cardiac care facility with advanced catheterization lab now operational.",
    image: "/images/newcardiac.jpg",
    content: `Apex Hospital proudly announces the launch of its new state-of-the-art Cardiac Care Unit, featuring advanced catheterization lab facilities and cutting-edge medical equipment. This new facility represents our commitment to providing world-class cardiac care to patients in Maharashtra and surrounding regions.

The new Cardiac Care Unit spans over 5,000 square feet and includes:
• Advanced catheterization laboratory with digital imaging
• 24-bed intensive cardiac care unit
• Dedicated cardiac surgery suites
• State-of-the-art monitoring systems
• Specialized cardiac rehabilitation center

Our team of experienced cardiologists and cardiac surgeons are now equipped with the latest technology to perform complex cardiac procedures including angioplasty, bypass surgery, and minimally invasive cardiac interventions.

"This new facility will significantly enhance our ability to provide comprehensive cardiac care to our patients," said Dr. Rajesh Sharma, Chief Cardiologist. "We are committed to bringing world-class healthcare closer to our community."

The Cardiac Care Unit is now fully operational and accepting patients. For appointments and consultations, please contact our cardiac care department.`,
    author: "Dr. Rajesh Sharma, Chief Cardiologist",
    tags: ["Cardiac Care", "New Facility", "Healthcare Innovation"],
  },
  {
    id: 2,
    title: "Free Health Camp for Senior Citizens",
    date: "2024-01-15",
    excerpt: "Comprehensive health screening camp organized for senior citizens in Solapur district.",
    image: "/images/healthcamp.jpg",
    content: `Apex Hospital organized a comprehensive health screening camp specifically designed for senior citizens in the Solapur district. The camp provided free health check-ups, consultations, and health awareness sessions.

The health camp included:
• Complete health screening for over 500 senior citizens
• Free consultations with specialist doctors
• Blood pressure and diabetes screening
• Eye and dental check-ups
• Health awareness sessions on age-related conditions
• Free medications for basic ailments

The camp was held at the Community Center in Solapur and saw overwhelming participation from the local community. Our medical team conducted thorough examinations and provided valuable health advice to all participants.

"Community health is at the heart of our mission," said Dr. Priya Patel, Community Health Director. "These camps help us reach out to those who need healthcare the most and ensure early detection of health issues."

Based on the success of this camp, Apex Hospital plans to organize similar health camps in other districts throughout the year.`,
    author: "Dr. Priya Patel, Community Health Director",
    tags: ["Community Health", "Senior Citizens", "Free Health Camp"],
  },
  {
   id: 3,
  title: "Apex Hospital Enhances Quality Care Standards",
  date: "2024-01-10",
  excerpt: "Hospital steps forward in strengthening healthcare quality and patient safety.",
  image: "/images/maam.jpg",
  content: `Apex Hospital has undertaken major initiatives to enhance its quality of care and patient safety standards, reflecting our unwavering commitment to clinical excellence and compassionate service.

Recent improvements at Apex Hospital include:
• Upgrading medical infrastructure and diagnostic technology  
• Strengthening infection control and hygiene protocols  
• Enhancing patient experience and support services  
• Conducting regular staff training and skills development  
• Streamlining hospital operations for better efficiency  

These quality-focused efforts ensure a safer, more responsive environment for patients and their families. From outpatient services to emergency care, every touchpoint is aligned with global best practices.

“Our commitment to continuous improvement drives everything we do,” said the Hospital Administration. “Patients can trust that they’re receiving advanced, personalized, and safe medical care with us.”

Apex Hospital will continue to monitor, evaluate, and improve its practices to stay at the forefront of healthcare excellence.`,
  author: "Hospital Administration",
  tags: ["Quality Care", "Patient Safety", "Hospital Improvement"],

  },
]

export default async function PressReleaseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const pressRelease = pressReleases.find((pr) => pr.id === Number.parseInt(id))

  if (!pressRelease) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1>Press Release Not Found</h1>
          <Link href="/news-events">Back to News & Events</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.pressReleasePage} news-events-page`}>
      <div className={styles.container}>
        <div className="mb-6">
          <Link href="/news-events" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to News & Events
          </Link>
        </div>

        <article className={styles.article}>
          <div className={styles.heroImage}>
            <Image
              src={pressRelease.image || "/placeholder.svg"}
              alt={pressRelease.title}
              fill
              className="object-cover"
            />
            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <div className={styles.heroMeta}>
                  <Calendar size={16} />
                  <span>{new Date(pressRelease.date).toLocaleDateString()}</span>
                </div>
                <h1 className={styles.heroTitle}>{pressRelease.title}</h1>
                <p className={styles.heroExcerpt}>{pressRelease.excerpt}</p>
              </div>
            </div>
          </div>

          <div className={styles.articleContent}>
            <div className={styles.authorInfo}>
              <User size={16} />
              <span>{pressRelease.author}</span>
            </div>

            <div className={styles.prose}>
              {pressRelease.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.tagsSection}>
              <h3 className={styles.tagsTitle}>Tags</h3>
              <div className={styles.tags}>
                {pressRelease.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/news-events" className={styles.moreButton}>
            View More Press Releases
          </Link>
        </div>
      </div>
    </div>
  )
}
