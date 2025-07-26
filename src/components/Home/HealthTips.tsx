import Link from "next/link"
import Image from "next/image"
import styles from "./HealthTips.module.css"

type Tip = {
  title: string
  excerpt: string
  href: string
  img: string
}

const tips: Tip[] = [
  {
    title: "Understanding Heart Disease: Prevention and Treatment",
    excerpt: "Learn about the latest advances in cardiac care and how to maintain a healthy heart through proper diet, exercise, and medical intervention.",
    href: "/blog/1",
    img: "/images/cardio.jpg",
  },
  {
    title: "Mental Health Awareness: Breaking the Stigma",
    excerpt: "Understanding mental health issues and the importance of seeking professional help in today's fast-paced world.",
    href: "/blog/2",
    img: "/images/mental.jpg",
  },
  {
    title: "Diabetes Management: A Comprehensive Guide",
    excerpt: "Essential tips for managing diabetes and maintaining a healthy lifestyle with proper nutrition and monitoring.",
    href: "/blog/3",
    img: "/images/diabetes.jpg",
  },
]

export default function HealthTips() {
  return (
    <section className={styles.healthTips}>
      <div className="container">
        <div className={styles.header}>
          <h2>Latest Health Tips</h2>
          <p>Stay informed with advice from our medical experts</p>
        </div>

        <div className={styles.grid}>
          {tips.map((tip) => (
            <Link key={tip.title} href={tip.href} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={tip.img || "/placeholder.svg"}
                  alt={tip.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className={styles.content}>
                <h3>{tip.title}</h3>
                <p>{tip.excerpt}</p>
                <span className={styles.readMore}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link href="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
