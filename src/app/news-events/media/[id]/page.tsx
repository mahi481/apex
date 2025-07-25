import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft, ExternalLink, Building2 } from "lucide-react"
import styles from "./page.module.css"

const mediaNews = [
  {
    id: 1,
    title: "Leading Hospital in Maharashtra - Times of India",
    publication: "Times of India",
    date: "2024-01-18",
    link: "#",
    excerpt: "Apex Hospital recognized for excellence in patient care and medical innovation.",
    content: `Times of India features Apex Hospital as one of the leading healthcare institutions in Maharashtra, highlighting our commitment to excellence in patient care and continuous medical innovation.

The article highlights several key achievements:
• Recognition as a leading healthcare provider in Maharashtra
• Excellence in patient care and satisfaction ratings
• Continuous investment in medical technology and innovation
• Commitment to community health and outreach programs
• Outstanding performance in various medical specialties

The feature article discusses how Apex Hospital has consistently maintained high standards of healthcare delivery while expanding its services to reach more patients across the region. The hospital's focus on patient-centered care and adoption of cutting-edge medical technologies has earned recognition from healthcare industry experts.

"We are honored to be recognized by Times of India," said the hospital spokesperson. "This recognition motivates us to continue our mission of providing world-class healthcare to our community."

The article also mentions the hospital's recent expansions, including the new cardiac care unit and plans for further development of specialized medical services.`,
    image: "/placeholder.svg?height=400&width=800&text=Times+of+India+Feature",
    category: "Recognition",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Healthcare Excellence Award - Maharashtra Today",
    publication: "Maharashtra Today",
    date: "2024-01-12",
    link: "#",
    excerpt: "Hospital receives prestigious award for outstanding healthcare services.",
    content: `Maharashtra Today covers Apex Hospital's recent recognition with the Healthcare Excellence Award, acknowledging our outstanding healthcare services and patient satisfaction rates.

The award recognizes:
• Exceptional patient care standards
• Innovation in healthcare delivery
• Community health initiatives
• Staff excellence and training programs
• Sustainable healthcare practices

The Healthcare Excellence Award is presented annually to institutions that demonstrate exceptional commitment to healthcare quality and patient satisfaction. Apex Hospital was selected from among numerous healthcare providers across Maharashtra.

The award ceremony was attended by healthcare industry leaders, government officials, and medical professionals. The recognition comes as a result of the hospital's consistent performance in patient care metrics and community health initiatives.

"This award belongs to our entire team," said the Chief Medical Officer. "It reflects our collective commitment to providing the best possible care to our patients and serving our community with dedication."

The hospital's innovative approaches to healthcare delivery and patient engagement were particularly noted by the award committee.`,
    image: "/placeholder.svg?height=400&width=800&text=Excellence+Award",
    category: "Award",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Medical Breakthrough in Cardiac Surgery - Health News",
    publication: "Health News India",
    date: "2024-01-08",
    link: "#",
    excerpt: "Successful complex cardiac procedure performed using minimally invasive techniques.",
    content: `Health News India reports on a groundbreaking cardiac surgery performed at Apex Hospital using minimally invasive techniques, showcasing our advanced surgical capabilities.

The breakthrough procedure involved:
• Complex cardiac surgery using minimally invasive techniques
• Reduced recovery time for the patient
• Lower risk of complications
• Advanced surgical technology and expertise
• Successful outcome with excellent patient recovery

The surgery was performed by our team of expert cardiac surgeons using state-of-the-art equipment in our newly launched cardiac care unit. The minimally invasive approach resulted in significantly reduced trauma to the patient and faster recovery times.

"This successful procedure demonstrates our commitment to adopting the latest surgical techniques," said the lead surgeon. "Minimally invasive cardiac surgery offers numerous benefits to patients, including shorter hospital stays and quicker return to normal activities."

The patient, who had been suffering from a complex cardiac condition, made a full recovery and was discharged within a week of the surgery. This case has been documented as a reference for future similar procedures.

The success of this procedure has attracted attention from medical professionals across the country and positions Apex Hospital as a leader in advanced cardiac care.`,
    image: "/placeholder.svg?height=400&width=800&text=Cardiac+Surgery",
    category: "Medical Breakthrough",
    readTime: "5 min read",
  },
]

export default async function MediaDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const media = mediaNews.find((m) => m.id === Number.parseInt(id))

  if (!media) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1>Media Article Not Found</h1>
          <Link href="/news-events">Back to News & Events</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.mediaPage} news-events-page`}>
      <div className={styles.container}>
        <div className="mb-6">
          <Link href="/news-events" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to News & Events
          </Link>
        </div>

        <article className={styles.article}>
          <div className={styles.heroImage}>
            <Image src={media.image || "/placeholder.svg"} alt={media.title} fill className="object-cover" />
            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <div className={styles.heroMeta}>
                  <div className={styles.metaItem}>
                    <Building2 size={16} />
                    <span className={styles.publicationName}>{media.publication}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Calendar size={16} />
                    <span>{new Date(media.date).toLocaleDateString()}</span>
                  </div>
                  <span className={styles.readTime}>{media.readTime}</span>
                </div>
                <h1 className={styles.heroTitle}>{media.title}</h1>
                <p className={styles.heroExcerpt}>{media.excerpt}</p>
              </div>
            </div>
          </div>

          <div className={styles.articleContent}>
            <div className={styles.articleHeader}>
              <span className={styles.categoryBadge}>{media.category}</span>
              <a href={media.link} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                <ExternalLink size={16} />
                Read Original Article
              </a>
            </div>

            <div className={styles.prose}>
              {media.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.publicationInfo}>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>About the Publication</h3>
                <div className={styles.publicationDetails}>
                  <Building2 size={20} />
                  <div>
                    <p className={styles.publicationName}>{media.publication}</p>
                    <p className={styles.publicationDescription}>
                      Leading news publication covering healthcare and medical innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/news-events" className={styles.moreButton}>
            View More Media Coverage
          </Link>
        </div>
      </div>
    </div>
  )
}
