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
    title: "5 Heart-Healthy Habits You Can Start Today",
    excerpt: "Simple lifestyle changes that significantly reduce your risk of heart disease.",
    href: "/blog/heart-healthy-habits",
    img: "/placeholder.svg?height=240&width=350",
  },
  {
    title: "The Importance of Regular Health Check-ups",
    excerpt: "Early detection through routine screening can save lives—here’s why you shouldn’t skip.",
    href: "/blog/regular-health-checkups",
    img: "/placeholder.svg?height=240&width=350",
  },
  {
    title: "Managing Stress for Better Mental Health",
    excerpt: "Practical techniques to keep anxiety in check and improve overall well-being.",
    href: "/blog/stress-management-tips",
    img: "/placeholder.svg?height=240&width=350",
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
