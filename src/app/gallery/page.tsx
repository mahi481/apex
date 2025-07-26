"use client"
import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import styles from "./page.module.css"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Photos", count: 48 },
    { id: "facilities", name: "Hospital Facilities", count: 12 },
    { id: "departments", name: "Departments", count: 15 },
    { id: "events", name: "Events & Ceremonies", count: 8 },
    { id: "staff", name: "Medical Staff", count: 10 },
    { id: "awards", name: "Awards & Recognition", count: 3 },
  ]

  const galleryImages = [
    // Hospital Facilities
    {
      id: 1,
      category: "facilities",
      title: "Main Hospital Building",
      description: "Modern 500-bed facility with state-of-the-art infrastructure",
      image: "/images/main.jpg", 
    },
    {
      id: 2,
      category: "facilities",
      title: "Emergency Department",
      description: "24/7 emergency services with advanced trauma care",
       image: "/images/emergency.jpg",
    },
    {
      id: 3,
      category: "facilities",
      title: "ICU Ward",
      description: "Intensive Care Unit with latest monitoring equipment",
       image: "/images/icu room.jpg",
    },
    {
      id: 4,
      category: "facilities",
      title: "Operation Theater",
      description: "Advanced surgical suites with robotic assistance",
       image: "/images/operation.jpg",
    },
    {
      id: 5,
      category: "facilities",
      title: "Patient Rooms",
      description: "Comfortable private and semi-private patient accommodations",
       image: "/images/room.jpg",
    },
    {
      id: 6,
      category: "facilities",
      title: "Diagnostic Center",
      description: "Complete diagnostic services under one roof",
       image: "/images/blood.jpg",
    },
    {
      id: 7,
      category: "facilities",
      title: "Pharmacy",
      description: "24/7 in-house pharmacy with comprehensive medication",
       image: "/images/pharmacy.jpg",
    },
    {
      id: 8,
      category: "facilities",
      title: "Cafeteria",
      description: "Spacious dining area for patients and visitors",
       image: "/images/food.jpg",
    },
    {
      id: 9,
      category: "facilities",
      title: "Reception Area",
      description: "Welcoming reception with patient assistance services",
       image: "/images/reception.jpg",
    },
    { id: 10, category: "facilities", title: "Waiting Lounge", description: "Comfortable waiting areas for families", image: "/images/wait.jpg", },
   
    {
      id: 12,
      category: "facilities",
      title: "Parking Facility",
      description: "Multi-level parking with 500+ vehicle capacity",
       image: "/images/parking.png",
    },

    // Departments
    {
      id: 13,
      category: "departments",
      title: "Cardiology Department",
      description: "Advanced heart care with catheterization lab",
       image: "/images/heart (2).jpg",
    },
   
   
   
    {
      id: 17,
      category: "departments",
      title: "Maternity Ward",
      description: "Modern birthing suites and neonatal care",
       image: "/images/maternity.jpg",
    },
    {
      id: 18,
      category: "departments",
      title: "Orthopedic Center",
      description: "Bone and joint treatment with rehabilitation",
       image: "/images/bone.jpg",
    },
   
    {
      id: 20,
      category: "departments",
      title: "Laboratory",
      description: "State-of-the-art pathology and diagnostic lab",
       image: "/images/lab (2).jpg",
    },
    {
      id: 21,
      category: "departments",
      title: "Physiotherapy Unit",
      description: "Rehabilitation and physical therapy services",
       image: "/images/physiotherapy.jpg",
    },
    
   
    { id: 24, category: "departments", title: "Dental Clinic", description: "Complete oral health and dental care",  image: "/images/dental.jpg", },
    {
      id: 25,
      category: "departments",
      title: "Dermatology Clinic",
      description: "Skin care and cosmetic treatment center",
       image: "/images/skin copy.jpg",
    },
   
   

    // Events & Ceremonies
    {
      id: 28,
      category: "events",
      title: "Hospital Inauguration",
      description: "Grand opening ceremony with dignitaries",
       image: "/images/main.jpg",
    },
    {
      id: 29,
      category: "events",
      title: "Medical Conference",
      description: "Annual healthcare symposium and workshops",
       image: "/images/main.jpg",
    },
    { id: 30, category: "events", title: "Health Camp", description: "Free health screening camp for community",  image: "/images/healthcamp.jpg", },
    { id: 31, category: "events", title: "Blood Donation Drive", description: "Community blood donation campaign",  image: "/images/blood.jpg", },
    {
      id: 32,
      category: "events",
      title: "Nurses Day Celebration",
      description: "Honoring our nursing staff contributions",
       image: "/images/nurse.jpg",
    },
    {
      id: 33,
      category: "events",
      title: "Patient Success Stories",
      description: "Celebrating successful treatment outcomes",
       image: "/images/main.jpg",
    },
    {
      id: 34,
      category: "events",
      title: "Medical Equipment Launch",
      description: "Introduction of new medical technology",
       image: "/images/main.jpg",
    },
    {
      id: 35,
      category: "events",
      title: "Community Outreach",
      description: "Healthcare awareness programs in villages",
       image: "/images/main.jpg",
    },

    // Medical Staff
    {
      id: 36,
      category: "staff",
      title: "Chairman",
      description: "Dr. RIZWAN UL HAQUE - Leading our medical team",
       image: "/images/sir.JPG",
    },
    { id: 37, category: "staff", title: "CEO", description: "Dr.MEHAJABEEN HAQUE-Driving growth and healthcare excellence", image: "/images/maam.jpg", },
      {
      id: 38,
      category: "staff",
      title: "Managing Director",
      description: "Dr.FAROOQ MANIYAR-Overseeing operations and hospital management",
       image: "/images/main.jpg",
    },
     { id: 39, category: "staff", title: "Nursing Staff", description: "Dedicated nurses providing compassionate care", image: "/images/nurse.jpg", },
 
    {
      id: 40,
      category: "staff",
      title: "Surgical Team",
      description: "Experienced surgeons and operation theater staff",
       image: "/images/main.jpg",
    },
    {
      id: 41,
      category: "staff",
      title: "Pediatric Specialists",
      description: "Child care experts and pediatric nurses",
       image: "/images/main.jpg",
    },
    {
      id: 42,
      category: "staff",
      title: "Laboratory Technicians",
      description: "Skilled lab professionals ensuring accurate results",
       image: "/images/main.jpg",
    },
    { id: 43, category: "staff", title: "Radiology Team", description: "Imaging specialists and technologists", image: "/images/main.jpg", },
    {
      id: 44,
      category: "staff",
      title: "Administrative Staff",
      description: "Support staff ensuring smooth operations",
       image: "/images/main.jpg",
    },
    { id: 45, category: "staff", title: "Pharmacy Team", description: "Qualified pharmacists and medication experts", image: "/images/main.jpg", },

    // Awards & Recognition
    {
      id: 46,
      category: "awards",
      title: "Best Hospital Award 2023",
      description: "State recognition for excellence in healthcare",
       image: "/images/main.JPG",
    },
    {
      id: 47,
      category: "awards",
      title: "Quality Certification",
      description: "ISO certification for quality management",
       image: "/images/main.JPG",
    },
    {
      id: 48,
      category: "awards",
      title: "Community Service Award",
      description: "Recognition for outstanding community healthcare",
       image: "/images/main.JPG",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setLightboxImage(filteredImages[newIndex].id)
  }

  const currentLightboxImage = lightboxImage ? filteredImages.find((img) => img.id === lightboxImage) : null

  return (
    <div className={styles.galleryPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Hospital Gallery</h1>
          <p>Explore our world-class facilities, dedicated medical staff, and memorable moments</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className={styles.gallerySection}>
        <div className="container">
          {/* Category Filter */}
          <div className={styles.filterSection}>
            <h2>Browse by Category</h2>
            <div className={styles.categoryTabs}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.categoryTab} ${selectedCategory === category.id ? styles.active : ""}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                  <span className={styles.count}>({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            {filteredImages.map((image) => (
              <div key={image.id} className={styles.galleryItem} onClick={() => openLightbox(image.id)}>
                <div className={styles.imageContainer}>
                  <Image
                    src={image.image ?? `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(image.title)}`}
                    alt={image.title}
                    width={400}
                    height={300}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results Info */}
          <div className={styles.resultsInfo}>
            <p>Showing {filteredImages.length} photos</p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && currentLightboxImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeLightbox}>
              <X />
            </button>

            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => navigateLightbox("prev")}>
              <ChevronLeft />
            </button>

            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={() => navigateLightbox("next")}>
              <ChevronRight />
            </button>

            <div className={styles.lightboxImage}>
              <Image
                  src={
    currentLightboxImage.image ??
    `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(currentLightboxImage.title)}`
  }
                alt={currentLightboxImage.title}
                width={800}
                height={600}
                className={styles.fullImage}
              />
            </div>

            <div className={styles.lightboxInfo}>
              <h3>{currentLightboxImage.title}</h3>
              <p>{currentLightboxImage.description}</p>
              <div className={styles.lightboxActions}>
                <button className={styles.actionBtn}>
                  <Download size={16} />
                  Download
                </button>
                <button className={styles.actionBtn}>
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
