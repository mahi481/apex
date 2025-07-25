import Link from "next/link"
import { Calendar, ArrowLeft, Download, FileText, CheckCircle } from "lucide-react"
import styles from "./page.module.css"

const newsletters = [
  {
    id: 1,
    title: "Apex Health Newsletter - January 2024",
    date: "2024-01-01",
    description: "Monthly health tips, hospital updates, and medical insights",
    downloadUrl: "/newsletters/january-2024.pdf",
    size: "2.1 MB",
    content:
      "Our January newsletter covers winter health tips, updates on new medical equipment, patient success stories, and insights from our medical team on preventive healthcare.",
    highlights: [
      "Winter Health Tips",
      "New Equipment Updates",
      "Patient Success Stories",
      "Preventive Healthcare Guide",
    ],
    sections: [
      {
        title: "Winter Health & Wellness",
        description:
          "Essential tips for staying healthy during the winter months, including immune system boosting strategies and seasonal health precautions.",
      },
      {
        title: "Medical Equipment Updates",
        description:
          "Learn about the latest medical technology and equipment additions to our hospital, enhancing patient care capabilities.",
      },
      {
        title: "Patient Success Stories",
        description:
          "Inspiring stories of recovery and healing from our patients, showcasing the impact of quality healthcare.",
      },
      {
        title: "Preventive Healthcare Guide",
        description:
          "Comprehensive guide to preventive healthcare measures, including screening schedules and lifestyle recommendations.",
      },
    ],
    pageCount: 12,
    language: "English",
  },
  {
    id: 2,
    title: "Apex Health Newsletter - December 2023",
    date: "2023-12-01",
    description: "Year-end review and health resolutions for the new year",
    downloadUrl: "/newsletters/december-2023.pdf",
    size: "1.8 MB",
    content:
      "Year-end review featuring our achievements in 2023, health resolutions for the new year, and special focus on mental health during the holiday season.",
    highlights: [
      "2023 Achievements",
      "New Year Health Resolutions",
      "Holiday Mental Health",
      "Community Outreach Programs",
    ],
    sections: [
      {
        title: "2023 Year in Review",
        description:
          "Comprehensive overview of our hospital's achievements, milestones, and improvements throughout 2023.",
      },
      {
        title: "Healthy New Year Resolutions",
        description:
          "Practical and achievable health resolutions for the new year, with tips for maintaining long-term wellness goals.",
      },
      {
        title: "Holiday Mental Health",
        description:
          "Important information about managing stress and maintaining mental health during the holiday season.",
      },
      {
        title: "Community Impact",
        description:
          "Highlights of our community outreach programs and their positive impact on local health initiatives.",
      },
    ],
    pageCount: 10,
    language: "English",
  },
  {
    id: 3,
    title: "Apex Health Newsletter - November 2023",
    date: "2023-11-01",
    description: "Winter health care tips and seasonal wellness advice",
    downloadUrl: "/newsletters/november-2023.pdf",
    size: "2.3 MB",
    content:
      "November edition focuses on winter healthcare preparation, seasonal wellness advice, flu prevention strategies, and updates on our specialized departments.",
    highlights: ["Winter Healthcare Prep", "Seasonal Wellness", "Flu Prevention", "Department Updates"],
    sections: [
      {
        title: "Winter Healthcare Preparation",
        description:
          "Complete guide to preparing for winter health challenges, including vaccination schedules and health monitoring.",
      },
      {
        title: "Seasonal Wellness Strategies",
        description: "Evidence-based wellness strategies for maintaining optimal health during seasonal transitions.",
      },
      {
        title: "Flu Prevention & Management",
        description: "Comprehensive information about flu prevention, symptoms recognition, and treatment options.",
      },
      {
        title: "Department Spotlights",
        description:
          "Updates and highlights from our various specialized departments, showcasing new services and capabilities.",
      },
    ],
    pageCount: 14,
    language: "English",
  },
]

export default async function NewsletterDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const newsletter = newsletters.find((n) => n.id === Number.parseInt(id))

  if (!newsletter) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1>Newsletter Not Found</h1>
          <Link href="/news-events">Back to News & Events</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.newsletterPage} news-events-page`}>
      <div className={styles.container}>
        <div className="mb-6">
          <Link href="/news-events" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to News & Events
          </Link>
        </div>

        <div className={styles.newsletter}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <FileText size={32} className={styles.headerIcon} />
              <div>
                <div className={styles.headerMeta}>
                  <Calendar size={16} />
                  <span>{new Date(newsletter.date).toLocaleDateString()}</span>
                  <span className={styles.metaSeparator}>•</span>
                  <span>{newsletter.size}</span>
                  <span className={styles.metaSeparator}>•</span>
                  <span>{newsletter.pageCount} pages</span>
                </div>
                <h1 className={styles.headerTitle}>{newsletter.title}</h1>
                <p className={styles.headerDescription}>{newsletter.description}</p>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>
                <h2>Newsletter Overview</h2>
                <p className={styles.overview}>{newsletter.content}</p>

                <h3 className={styles.sectionsTitle}>What's Inside</h3>
                <div className={styles.sections}>
                  {newsletter.sections.map((section, index) => (
                    <div key={index} className={styles.section}>
                      <h4 className={styles.sectionTitle}>{section.title}</h4>
                      <p className={styles.sectionDescription}>{section.description}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.highlights}>
                  <h3 className={styles.highlightsTitle}>Key Highlights</h3>
                  <div className={styles.highlightsList}>
                    {newsletter.highlights.map((highlight, index) => (
                      <div key={index} className={styles.highlight}>
                        <CheckCircle size={16} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.sidebar}>
                <h3 className={styles.sidebarTitle}>Newsletter Details</h3>

                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Publication Date:</span>
                    <span className={styles.detailValue}>{new Date(newsletter.date).toLocaleDateString()}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>File Size:</span>
                    <span className={styles.detailValue}>{newsletter.size}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Pages:</span>
                    <span className={styles.detailValue}>{newsletter.pageCount}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Language:</span>
                    <span className={styles.detailValue}>{newsletter.language}</span>
                  </div>
                </div>

                <button className={styles.downloadButton}>
                  <Download size={20} />
                  Download PDF
                </button>

                <p className={styles.downloadNote}>Free download • No registration required</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/news-events" className={styles.moreButton}>
            View More Newsletters
          </Link>
        </div>
      </div>
    </div>
  )
}
