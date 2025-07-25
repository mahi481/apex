"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Heart } from "lucide-react"
import styles from "./page.module.css"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Heart Disease: Prevention and Treatment",
    content: `
      <h2>Introduction to Heart Disease</h2>
      <p>Heart disease remains one of the leading causes of death worldwide, but with proper understanding and preventive measures, many cases can be avoided or effectively managed. This comprehensive guide will walk you through everything you need to know about heart health.</p>
      
      <h2>Types of Heart Disease</h2>
      <p>Heart disease encompasses several conditions that affect the heart and blood vessels:</p>
      <ul>
        <li><strong>Coronary Artery Disease:</strong> The most common type, caused by narrowed or blocked coronary arteries</li>
        <li><strong>Heart Failure:</strong> When the heart cannot pump blood effectively</li>
        <li><strong>Arrhythmias:</strong> Irregular heartbeats that can be too fast, too slow, or erratic</li>
        <li><strong>Valvular Heart Disease:</strong> Problems with one or more of the heart's valves</li>
      </ul>
      
      <h2>Prevention Strategies</h2>
      <p>Prevention is always better than cure. Here are key strategies to maintain heart health:</p>
      
      <h3>1. Maintain a Healthy Diet</h3>
      <p>A heart-healthy diet should include:</p>
      <ul>
        <li>Plenty of fruits and vegetables</li>
        <li>Whole grains instead of refined grains</li>
        <li>Lean proteins like fish, poultry, and legumes</li>
        <li>Healthy fats from nuts, seeds, and olive oil</li>
        <li>Limited sodium, sugar, and saturated fats</li>
      </ul>
      
      <h3>2. Regular Physical Activity</h3>
      <p>Aim for at least 150 minutes of moderate-intensity aerobic activity per week. This can include brisk walking, swimming, cycling, or dancing.</p>
      
      <h3>3. Manage Stress</h3>
      <p>Chronic stress can contribute to heart disease. Practice stress-reduction techniques such as meditation, deep breathing, yoga, or regular exercise.</p>
      
      <h2>Treatment Options</h2>
      <p>Modern medicine offers various treatment options for heart disease:</p>
      
      <h3>Medications</h3>
      <ul>
        <li>Blood thinners to prevent clots</li>
        <li>Beta-blockers to slow heart rate</li>
        <li>ACE inhibitors to lower blood pressure</li>
        <li>Statins to lower cholesterol</li>
      </ul>
      
      <h3>Surgical Procedures</h3>
      <ul>
        <li>Angioplasty and stent placement</li>
        <li>Coronary artery bypass surgery</li>
        <li>Heart valve repair or replacement</li>
        <li>Pacemaker or defibrillator implantation</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Heart disease is a serious condition, but with proper prevention, early detection, and appropriate treatment, people can live full, healthy lives. Regular check-ups with your healthcare provider, maintaining a healthy lifestyle, and being aware of the warning signs are crucial steps in protecting your heart health.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "2024-01-15",
    category: "Cardiology",
    image: "/placeholder.svg?height=400&width=800",
    readTime: "5 min read",
    tags: ["Heart Health", "Prevention", "Treatment"],
    authorBio:
      "Dr. Rajesh Kumar is a leading cardiologist with over 15 years of experience in cardiac care and preventive medicine.",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Mental Health Awareness: Breaking the Stigma",
    content: `
      <h2>Understanding Mental Health</h2>
      <p>Mental health is just as important as physical health, yet it often doesn't receive the same attention or care. Mental health encompasses our emotional, psychological, and social well-being, affecting how we think, feel, and act.</p>
      
      <h2>Common Mental Health Conditions</h2>
      <p>Mental health conditions are more common than many people realize:</p>
      <ul>
        <li><strong>Depression:</strong> Persistent feelings of sadness, hopelessness, and loss of interest</li>
        <li><strong>Anxiety Disorders:</strong> Excessive worry, fear, or panic that interferes with daily life</li>
        <li><strong>Bipolar Disorder:</strong> Extreme mood swings between manic and depressive episodes</li>
        <li><strong>PTSD:</strong> Trauma-related symptoms following a distressing event</li>
      </ul>
      
      <h2>Breaking the Stigma</h2>
      <p>One of the biggest barriers to mental health treatment is stigma. Here's how we can work to break it:</p>
      
      <h3>Education and Awareness</h3>
      <p>Understanding that mental health conditions are medical conditions, not character flaws or weaknesses, is crucial for reducing stigma.</p>
      
      <h3>Open Conversations</h3>
      <p>Talking openly about mental health helps normalize these discussions and encourages others to seek help when needed.</p>
      
      <h3>Supporting Others</h3>
      <p>Showing compassion and support to those struggling with mental health issues can make a significant difference in their recovery journey.</p>
      
      <h2>When to Seek Help</h2>
      <p>It's important to seek professional help when:</p>
      <ul>
        <li>Symptoms interfere with daily activities</li>
        <li>You're having thoughts of self-harm</li>
        <li>Relationships are being affected</li>
        <li>You're using substances to cope</li>
        <li>Sleep or appetite patterns change significantly</li>
      </ul>
      
      <h2>Treatment Options</h2>
      <p>Effective treatments for mental health conditions include:</p>
      
      <h3>Therapy</h3>
      <ul>
        <li>Cognitive Behavioral Therapy (CBT)</li>
        <li>Dialectical Behavior Therapy (DBT)</li>
        <li>Psychodynamic therapy</li>
        <li>Group therapy</li>
      </ul>
      
      <h3>Medication</h3>
      <p>When appropriate, medications can be very effective in treating mental health conditions. These should always be prescribed and monitored by a qualified healthcare provider.</p>
      
      <h2>Self-Care Strategies</h2>
      <p>While professional help is often necessary, self-care plays an important role in mental health:</p>
      <ul>
        <li>Regular exercise and physical activity</li>
        <li>Adequate sleep and rest</li>
        <li>Healthy nutrition</li>
        <li>Mindfulness and meditation</li>
        <li>Social connections and support</li>
        <li>Engaging in enjoyable activities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mental health is a vital component of overall well-being. By breaking the stigma, encouraging open conversations, and promoting access to care, we can create a society where everyone feels comfortable seeking the help they need and deserve.</p>
    `,
    author: "Dr. Priya Sharma",
    date: "2024-01-10",
    category: "Psychiatry",
    image: "/placeholder.svg?height=400&width=800",
    readTime: "7 min read",
    tags: ["Mental Health", "Awareness", "Stigma"],
    authorBio:
      "Dr. Priya Sharma is a psychiatrist specializing in anxiety disorders and depression with a focus on holistic treatment approaches.",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post Not Found</h1>
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.blogPostPage}>
      <div className={styles.container}>
        <div className={styles.backNavigation}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <div className={styles.headerMeta}>
              <span className={styles.category}>{post.category}</span>
              <div className={styles.metaInfo}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className={styles.articleTitle}>{post.title}</h1>

            <div className={styles.tags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.articleActions}>
              <button
                className={`${styles.actionBtn} ${isLiked ? styles.liked : ""}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart size={16} />
                <span>{isLiked ? "Liked" : "Like"}</span>
              </button>
              <button
                className={`${styles.actionBtn} ${isBookmarked ? styles.bookmarked : ""}`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark size={16} />
                <span>{isBookmarked ? "Saved" : "Save"}</span>
              </button>
              <button className={styles.actionBtn}>
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </header>

          <div className={styles.featuredImage}>
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill style={{ objectFit: "cover" }} />
          </div>

          <div className={styles.articleContent}>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <footer className={styles.articleFooter}>
            <div className={styles.authorCard}>
              <div className={styles.authorImage}>
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>{post.author}</h3>
                <p className={styles.authorBio}>{post.authorBio}</p>
              </div>
            </div>
          </footer>
        </article>

        <div className={styles.relatedPosts}>
          <h2>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory}>{relatedPost.category}</span>
                    <h3 className={styles.relatedTitle}>{relatedPost.title}</h3>
                    <div className={styles.relatedMeta}>
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
