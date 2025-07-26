"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ExternalLink, Download } from "lucide-react"
import styles from "./page.module.css"

const pressReleases = [
  {
    id: 1,
    title: "Apex Hospital Launches New Cardiac Care Unit",
    date: "2024-01-20",
    excerpt: "State-of-the-art cardiac care facility with advanced catheterization lab now operational.",
    image: "/images/newcardiac.jpg",
    content:
      "Apex Hospital proudly announces the launch of its new state-of-the-art Cardiac Care Unit, featuring advanced catheterization lab facilities and cutting-edge medical equipment. This new facility represents our commitment to providing world-class cardiac care to patients in Maharashtra and surrounding regions.",
    author: "Dr. Rajesh Sharma, Chief Cardiologist",
  },
  {
    id: 2,
    title: "Free Health Camp for Senior Citizens",
    date: "2024-01-15",
    excerpt: "Comprehensive health screening camp organized for senior citizens in Solapur district.",
    image: "/images/healthcamp.jpg",
    content:
      "Apex Hospital organized a comprehensive health screening camp specifically designed for senior citizens in the Solapur district. The camp provided free health check-ups, consultations, and health awareness sessions.",
    author: "Dr. Priya Patel, Community Health Director",
  },
  {
   id: 3,
title: "Apex Hospital Enhances Quality Care Standards",
date: "2024-01-10",
excerpt: "Hospital steps forward in strengthening healthcare quality and patient safety.",
image: "/images/maam.jpg",
content:
  "Apex Hospital has recently taken significant steps to improve healthcare quality and patient safety. This achievement reflects our ongoing commitment to excellence in patient care, advanced facilities, and medical best practices.",
author: "Hospital Administration",

  },
]

const mediaNews = [
  {
    id: 1,
    title: "Leading Hospital in Maharashtra - Times of India",
    publication: "Times of India",
    date: "2024-01-18",
    link: "#",
    excerpt: "Apex Hospital recognized for excellence in patient care and medical innovation.",
    content:
      "Times of India features Apex Hospital as one of the leading healthcare institutions in Maharashtra, highlighting our commitment to excellence in patient care and continuous medical innovation.",
    image: "/placeholder.svg?height=300&width=400&text=Times+of+India+Feature",
  },
  {
    id: 2,
    title: "Healthcare Excellence Award - Maharashtra Today",
    publication: "Maharashtra Today",
    date: "2024-01-12",
    link: "#",
    excerpt: "Hospital receives prestigious award for outstanding healthcare services.",
    content:
      "Maharashtra Today covers Apex Hospital's recent recognition with the Healthcare Excellence Award, acknowledging our outstanding healthcare services and patient satisfaction rates.",
    image: "/placeholder.svg?height=300&width=400&text=Excellence+Award",
  },
  {
    id: 3,
    title: "Medical Breakthrough in Cardiac Surgery - Health News",
    publication: "Health News India",
    date: "2024-01-08",
    link: "#",
    excerpt: "Successful complex cardiac procedure performed using minimally invasive techniques.",
    content:
      "Health News India reports on a groundbreaking cardiac surgery performed at Apex Hospital using minimally invasive techniques, showcasing our advanced surgical capabilities.",
    image: "/placeholder.svg?height=300&width=400&text=Cardiac+Surgery",
  },
]

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
  },
]

export default function NewsEventsPage() {
  const [activeTab, setActiveTab] = useState("press-releases")

  const tabs = [
    { id: "press-releases", label: "Press Releases" },
    { id: "in-the-media", label: "In the Media" },
    { id: "newsletters", label: "Newsletters" },
  ]

  return (
    <div className={styles.newsPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageHeader}>News & Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from Apex Hospital
          </p>
        </div>

        <div className="mb-8">
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "press-releases" && (
            <div className={styles.contentSection}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Press Releases</h2>
              <div className={styles.newsGrid}>
                {pressReleases.map((news) => (
                  <Link key={news.id} href={`/news-events/press-releases/${news.id}`} className={styles.newsCard}>
                    <div className={styles.cardImage}>
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardDate}>
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(news.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                      <span className={styles.readMore}>Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "in-the-media" && (
            <div className={styles.contentSection}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">In the Media</h2>
              <div className={styles.mediaList}>
                {mediaNews.map((media) => (
                  <Link key={media.id} href={`/news-events/media/${media.id}`} className={styles.mediaCard}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-32 rounded-lg overflow-hidden">
                          <Image
                            src={media.image || "/placeholder.svg"}
                            alt={media.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className={styles.mediaContent}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {media.title}
                        </h3>
                        <div className={styles.mediaMeta}>
                          <span className={styles.publication}>{media.publication}</span>
                          <span>{new Date(media.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{media.excerpt}</p>
                        <div className={styles.externalLink}>
                          <ExternalLink size={16} className="mr-2" />
                          Read Full Article
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "newsletters" && (
            <div className={styles.contentSection}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Newsletters</h2>
              <div className={styles.newsletterGrid}>
                {newsletters.map((newsletter) => (
                  <Link
                    key={newsletter.id}
                    href={`/news-events/newsletters/${newsletter.id}`}
                    className={styles.newsletterCard}
                  >
                    <div className="text-center mb-4">
                      <div className={styles.newsletterIcon}>
                        <Download size={32} className="text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {newsletter.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{newsletter.description}</p>
                    </div>
                    <div className={styles.newsletterMeta}>
                      <span>{new Date(newsletter.date).toLocaleDateString()}</span>
                      <span>{newsletter.size}</span>
                    </div>
                    <div className="text-center">
                      <span className={styles.btnPrimary}>
                        <Download size={16} className="mr-2" />
                        View Details
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
