"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Download, ArrowRight } from "lucide-react"
import styles from "./page.module.css"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Heart Disease: Prevention and Treatment",
    excerpt:
      "Learn about the latest advances in cardiac care and how to maintain a healthy heart through proper diet, exercise, and medical intervention.",
    author: "Dr. Rajesh Kumar",
    date: "2024-01-15",
    category: "Cardiology",
    image: "/images/cardio.jpg",
    readTime: "5 min read",
    tags: ["Heart Health", "Prevention", "Treatment"],
  },
  {
    id: 2,
    title: "Mental Health Awareness: Breaking the Stigma",
    excerpt:
      "Understanding mental health issues and the importance of seeking professional help in today's fast-paced world.",
    author: "Dr. Priya Sharma",
    date: "2024-01-10",
    category: "Psychiatry",
    image: "/images/mental.jpg",
    readTime: "7 min read",
    tags: ["Mental Health", "Awareness", "Stigma"],
  },
  {
    id: 3,
    title: "Diabetes Management: A Comprehensive Guide",
    excerpt:
      "Essential tips for managing diabetes and maintaining a healthy lifestyle with proper nutrition and monitoring.",
    author: "Dr. Amit Patel",
    date: "2024-01-05",
    category: "Endocrinology",
    image: "/images/diabetes.jpg",
    readTime: "6 min read",
    tags: ["Diabetes", "Management", "Lifestyle"],
  },
  {
    id: 4,
    title: "Pediatric Care: Child Development Milestones",
    excerpt: "Understanding important developmental milestones in children and when to seek professional guidance.",
    author: "Dr. Sunita Rao",
    date: "2024-01-12",
    category: "Pediatrics",
    image: "/images/childcare.jpg",
    readTime: "4 min read",
    tags: ["Pediatrics", "Development", "Children"],
  },
]

const journalArticles = [
  {
    id: 1,
    title: "Advances in Minimally Invasive Cardiac Surgery",
    authors: "Dr. Kumar R., Dr. Sharma P., Dr. Patel A.",
    journal: "Indian Journal of Cardiology",
    date: "2024-01-20",
    abstract:
      "This study examines the outcomes of minimally invasive cardiac procedures and their impact on patient recovery times and long-term health outcomes.",
    doi: "10.1016/j.ijcard.2024.01.001",
    citations: 15,
  },
  {
    id: 2,
    title: "Neuroplasticity in Stroke Recovery",
    authors: "Dr. Rao S., Dr. Singh V.",
    journal: "Neurology India",
    date: "2024-01-18",
    abstract:
      "Research on brain plasticity and its role in post-stroke rehabilitation, including innovative therapy approaches and recovery protocols.",
    doi: "10.1016/j.neuroindia.2024.01.002",
    citations: 8,
  },
  {
    id: 3,
    title: "Telemedicine in Rural Healthcare Delivery",
    authors: "Dr. Gupta M., Dr. Verma K.",
    journal: "Healthcare Management",
    date: "2024-01-16",
    abstract:
      "Analysis of telemedicine implementation in rural areas and its effectiveness in improving healthcare accessibility and outcomes.",
    doi: "10.1016/j.healthman.2024.01.003",
    citations: 12,
  },
]

const brochures = [
  {
    id: 1,
    title: "Patient Guide to Cardiac Care",
    description: "Comprehensive guide for cardiac patients and their families covering pre and post-operative care",
    pages: "24 pages",
    size: "2.5 MB",
    downloadUrl: "/brochures/cardiac-care-guide.pdf",
    category: "Patient Care",
  },
  {
    id: 2,
    title: "Maternity Services Handbook",
    description: "Everything you need to know about our maternity services, from prenatal to postnatal care",
    pages: "32 pages",
    size: "3.2 MB",
    downloadUrl: "/brochures/maternity-handbook.pdf",
    category: "Maternity",
  },
  {
    id: 3,
    title: "Emergency Procedures Guide",
    description: "Quick reference guide for common emergency procedures and protocols",
    pages: "16 pages",
    size: "1.8 MB",
    downloadUrl: "/brochures/emergency-guide.pdf",
    category: "Emergency",
  },
]

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("blog")

  const tabs = [
    { id: "blog", label: "Blog Posts", count: blogPosts.length },
    { id: "journal", label: "Journal Articles", count: journalArticles.length },
    { id: "journal-brochure", label: "Journal Collection", count: 1 },
    { id: "brochure", label: "Brochures", count: brochures.length },
  ]

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.pageTitle}>Medical Blog & Resources</h1>
            <p className={styles.pageSubtitle}>
              Stay updated with the latest medical insights, research, and health information from our expert team
            </p>
          </div>
          <div className={styles.headerStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{blogPosts.length}</span>
              <span className={styles.statLabel}>Blog Posts</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{journalArticles.length}</span>
              <span className={styles.statLabel}>Articles</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{brochures.length}</span>
              <span className={styles.statLabel}>Resources</span>
            </div>
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabLabel}>{tab.label}</span>
                <span className={styles.tabCount}>{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "blog" && (
            <div className={styles.blogSection}>
              <div className={styles.sectionHeader}>
                <h2>Latest Blog Posts</h2>
                <p>Expert insights and health tips from our medical professionals</p>
              </div>
              <div className={styles.blogGrid}>
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className={styles.blogCard}>
                    <div className={styles.cardImage}>
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className={styles.category}>{post.category}</div>
                      <div className={styles.readTime}>{post.readTime}</div>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTags}>
                        {post.tags.map((tag, index) => (
                          <span key={index} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <div className={styles.cardMeta}>
                        <div className={styles.metaItem}>
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className={styles.cardAction}>
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "journal" && (
            <div className={styles.journalSection}>
              <div className={styles.sectionHeader}>
                <h2>Published Research</h2>
                <p>Peer-reviewed articles and clinical studies from our research team</p>
              </div>
              <div className={styles.journalList}>
                {journalArticles.map((article) => (
                  <Link key={article.id} href={`/blog/journal/${article.id}`} className={styles.journalCard}>
                    <div className={styles.journalHeader}>
                      <h3 className={styles.journalTitle}>{article.title}</h3>
                      <div className={styles.journalBadge}>
                        <span>{article.citations} citations</span>
                      </div>
                    </div>
                    <div className={styles.journalMeta}>
                      <span className={styles.authors}>{article.authors}</span>
                      <span className={styles.journal}>{article.journal}</span>
                      <span className={styles.date}>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <p className={styles.abstract}>{article.abstract}</p>
                    <div className={styles.journalFooter}>
                      <span className={styles.doi}>DOI: {article.doi}</span>
                      <div className={styles.cardAction}>
                        <span>Read Full Article</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "journal-brochure" && (
            <div className={styles.collectionSection}>
              <div className={styles.sectionHeader}>
                <h2>Medical Journal Collection</h2>
                <p>Comprehensive collection of our published research and studies</p>
              </div>
              <div className={styles.collectionGrid}>
                <div className={styles.collectionCard}>
                  <div className={styles.collectionIcon}>
                    <Download size={48} />
                  </div>
                  <h3>Complete Research Collection</h3>
                  <p>
                    Access our comprehensive collection of published medical research, case studies, and clinical trials
                    from the past year.
                  </p>
                  <div className={styles.collectionStats}>
                    <div className={styles.collectionStat}>
                      <span className={styles.statNumber}>50+</span>
                      <span className={styles.statLabel}>Articles</span>
                    </div>
                    <div className={styles.collectionStat}>
                      <span className={styles.statNumber}>Monthly</span>
                      <span className={styles.statLabel}>Updates</span>
                    </div>
                    <div className={styles.collectionStat}>
                      <span className={styles.statNumber}>15 MB</span>
                      <span className={styles.statLabel}>Size</span>
                    </div>
                  </div>
                  <button className={styles.downloadBtn}>
                    <Download size={16} />
                    Download Collection
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "brochure" && (
            <div className={styles.brochureSection}>
              <div className={styles.sectionHeader}>
                <h2>Patient Resources</h2>
                <p>Downloadable guides and brochures for patients and families</p>
              </div>
              <div className={styles.brochureGrid}>
                {brochures.map((brochure) => (
                  <div key={brochure.id} className={styles.brochureCard}>
                    <div className={styles.brochureHeader}>
                      <div className={styles.brochureIcon}>
                        <Download size={32} />
                      </div>
                      <span className={styles.brochureCategory}>{brochure.category}</span>
                    </div>
                    <h3 className={styles.brochureTitle}>{brochure.title}</h3>
                    <p className={styles.brochureDescription}>{brochure.description}</p>
                    <div className={styles.brochureDetails}>
                      <span className={styles.brochureDetail}>{brochure.pages}</span>
                      <span className={styles.brochureDetail}>{brochure.size}</span>
                    </div>
                    <button className={styles.downloadBtn}>
                      <Download size={16} />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
