import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Brain, Bone } from "lucide-react"
import styles from "./FeaturedServices.module.css"

type ServiceCard = {
  name: string
  description: string
  icon: React.ReactNode
  href: string
  img: string
  bg: string
}

const services: ServiceCard[] = [
  {
    name: "Cardiology",
    description: "Advanced cardiac care with cutting-edge technology and experienced cardiologists.",
    icon: <Heart size={28} />,
    href: "/specialities/cardiology",
    img: "/images/heart (2).jpg",
    bg: styles.cardio,
  },
  {
    name: "Neurology",
    description: "Comprehensive neurological care for brain and nervous-system disorders.",
    icon: <Brain size={28} />,
    href: "/specialities/neurology",
    img: "/images/brain.jpg",
    bg: styles.neuro,
  },
  {
    name: "Orthopedics",
    description: "Expert bone and joint care with minimally invasive surgical techniques.",
    icon: <Bone size={28} />,
    href: "/specialities/orthopedics",
    img: "/images/bone.jpg",
    bg: styles.ortho,
  },
]

export default function FeaturedServices() {
  return (
    <section className={styles.featured}>
      <div className="container">
        <div className={styles.header}>
          <h2>Our Medical Services</h2>
          <p>Comprehensive healthcare delivered by experienced professionals using state-of-the-art technology</p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link key={service.name} href={service.href} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={service.img || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className={styles.link}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link href="/specialities" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
