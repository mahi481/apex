"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Award, Users, Clock, Heart } from "lucide-react"
import styles from "./Hero.module.css"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Leading Healthcare Excellence in Solapur",
      subtitle: "Advanced Medical Care with Compassionate Service",
      image: "/images/patient client.jpg",
      cta: "Explore Our Services",
      link: "/specialities",
    },
    {
      title: "24/7 Emergency Care Available",
      subtitle: "Round-the-clock medical assistance when you need it most",
      image: "/images/lab.jpg",
      cta: "Emergency Contact",
      link: "/emergency",
    },
    {
      title: "Expert Doctors, Advanced Technology",
      subtitle: "World-class medical professionals with cutting-edge equipment",
      image: "/images/pharmacy.jpg",
      cta: "Meet Our Doctors",
      link: "/doctors",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className={styles.hero}>
      <div className={styles.heroSlider}>
        {slides.map((slide, index) => (
          <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}>
            <div className={styles.slideImage}>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
              <div className={styles.overlay} />
            </div>
            <div className={styles.container}>
              <div className={styles.slideContent}>
                <h1 className={styles.heroTitle}>{slide.title}</h1>
                <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                <div className={styles.heroActions}>
                  <Link href={slide.link} className={styles.primaryButton}>
                    {slide.cta}
                  </Link>
                  <button className={styles.playButton}>
                    <Play size={20} />
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className={styles.slideIndicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <Users />
              </div>
              <div className={styles.statContent}>
                <h3>50,000+</h3>
                <p>Patients Treated</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <Award />
              </div>
              <div className={styles.statContent}>
                <h3>25+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <Heart />
              </div>
              <div className={styles.statContent}>
                <h3>100+</h3>
                <p>Expert Doctors</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <Clock />
              </div>
              <div className={styles.statContent}>
                <h3>24/7</h3>
                <p>Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
