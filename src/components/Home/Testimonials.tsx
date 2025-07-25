"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import styles from "./Testimonials.module.css"

type Testimonial = {
  name: string
  role: string
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Cardiac Patient",
    text: "The doctors at Apex Hospital saved my life. Their expertise and compassionate care made all the difference.",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Priya Deshmukh",
    role: "Orthopedic Patient",
    text: "I was able to walk again without pain thanks to the incredible ortho team. Highly recommend Apex Hospital!",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Amit Kulkarni",
    role: "Neurology Patient",
    text: "State-of-the-art facilities and friendly staff. I felt safe and cared for throughout my treatment.",
    avatar: "/placeholder.svg?height=120&width=120",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2>What Our Patients Say</h2>
          <p>Real stories of hope, healing, and exceptional care</p>
        </div>

        <div className={styles.slider}>
          {testimonials.map((t, i) => (
            <article key={t.name} className={`${styles.card} ${i === index ? styles.active : ""}`}>
              <div className={styles.quoteIcon}>
                <Quote size={32} />
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.person}>
                <div className={styles.avatar}>
                  <Image src={t.avatar || "/placeholder.svg"} alt={t.name} width={80} height={80} />
                </div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Indicators */}
        <div className={styles.indicators}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
