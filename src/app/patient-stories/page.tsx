import Image from "next/image"
import { Heart, Star, Calendar, User } from "lucide-react"
import styles from "./page.module.css"

export default function PatientStoriesPage() {
  const stories = [
    {
      id: 1,
      name: "Rajesh Patil",
      age: 45,
      condition: "Cardiac Surgery",
      story:
        "After my heart attack, I was terrified. But the cardiac team at Apex Hospital gave me hope and a new lease on life. The surgery was successful, and the post-operative care was exceptional. Today, I am back to my normal activities and feeling stronger than ever.",
      image: "/placeholder.svg?height=300&width=300",
      date: "2024-01-10",
      rating: 5,
    },
    {
      id: 2,
      name: "Sunita Deshmukh",
      age: 38,
      condition: "Maternity Care",
      story:
        "The maternity ward at Apex Hospital made my delivery experience wonderful. The doctors and nurses were so caring and supportive. They made sure both my baby and I were comfortable throughout. I could not have asked for better care during such an important time.",
      image: "/placeholder.svg?height=300&width=300",
      date: "2024-01-05",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Kulkarni",
      age: 52,
      condition: "Orthopedic Surgery",
      story:
        "I had been suffering from knee pain for years. The orthopedic team at Apex Hospital performed a knee replacement surgery that changed my life. The rehabilitation program was excellent, and now I can walk without pain. Thank you for giving me my mobility back!",
      image: "/placeholder.svg?height=300&width=300",
      date: "2023-12-28",
      rating: 5,
    },
    {
      id: 4,
      name: "Priya Joshi",
      age: 29,
      condition: "Cancer Treatment",
      story:
        "Being diagnosed with cancer was devastating, but the oncology team at Apex Hospital stood by me throughout my treatment journey. Their expertise, compassion, and constant support helped me fight and win against cancer. I am now cancer-free and grateful for their care.",
      image: "/placeholder.svg?height=300&width=300",
      date: "2023-12-20",
      rating: 5,
    },
  ]

  return (
    <div className={styles.storiesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <Heart size={40} />
            Patient Stories
          </h1>
          <p>Real stories of hope, healing, and recovery from our patients</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.introCard}>
              <h2>Stories of Hope and Healing</h2>
              <p>
                Every patient who walks through our doors has a unique story. Here are some inspiring journeys of
                recovery, hope, and the exceptional care our patients have received at Apex Hospital. These stories
                reflect our commitment to providing compassionate, quality healthcare that makes a real difference in
                people lives.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.storiesGrid}>
              {stories.map((story) => (
                <div key={story.id} className={styles.storyCard}>
                  <div className={styles.patientInfo}>
                    <div className={styles.patientImage}>
                      <Image src={story.image || "/placeholder.svg"} alt={story.name} width={80} height={80} />
                    </div>
                    <div className={styles.patientDetails}>
                      <h3>{story.name}</h3>
                      <p className={styles.age}>Age: {story.age}</p>
                      <p className={styles.condition}>{story.condition}</p>
                      <div className={styles.rating}>
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.storyContent}>
                   <p>{story.story}</p>

                  </div>
                  <div className={styles.storyMeta}>
                    <div className={styles.date}>
                      <Calendar size={16} />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.shareStoryCard}>
              <h2>Share Your Story</h2>
              <p>
                Have you had a positive experience at Apex Hospital? We did love to hear your story and share it with
                others who might benefit from your experience.
              </p>
              <div className={styles.shareContact}>
                <div className={styles.contactMethod}>
                  <User size={20} />
                  <div>
                    <strong>Patient Relations</strong>
                    <p>Phone: +91-9876543219</p>
                    <p>Email: stories@apexhospital.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
