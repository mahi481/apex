import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import styles from "./page.module.css"
import { BlogPostActions } from "./blog-post-actions"

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
    image: "/images/cardio.jpg",
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
    image: "/images/mental.jpg",
    readTime: "7 min read",
    tags: ["Mental Health", "Awareness", "Stigma"],
    authorBio:
      "Dr. Priya Sharma is a psychiatrist specializing in anxiety disorders and depression with a focus on holistic treatment approaches.",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Diabetes Management: A Comprehensive Guide",
    content: `
      <h2>Introduction to Diabetes</h2>
      <p>Diabetes is a chronic condition that affects how your body turns food into energy. With proper management, individuals with diabetes can lead healthy and active lives. This guide provides a thorough overview of managing diabetes effectively.</p>
      
      <h2>Types of Diabetes</h2>
      <p>There are several types of diabetes, each with distinct characteristics:</p>
      <ul>
        <li><strong>Type 1 Diabetes:</strong> An autoimmune condition where the body attacks insulin-producing cells</li>
        <li><strong>Type 2 Diabetes:</strong> The most common form, often linked to lifestyle and insulin resistance</li>
        <li><strong>Gestational Diabetes:</strong> Diabetes that develops during pregnancy</li>
        <li><strong>Prediabetes:</strong> Higher-than-normal blood sugar levels, not yet in the diabetes range</li>
      </ul>
      
      <h2>Prevention and Lifestyle Management</h2>
      <p>Managing diabetes involves a combination of healthy habits and medical care:</p>
      
      <h3>1. Follow a Balanced Diet</h3>
      <p>Good nutrition is key to blood sugar control:</p>
      <ul>
        <li>Focus on high-fiber foods like vegetables, legumes, and whole grains</li>
        <li>Limit refined carbs and sugary foods</li>
        <li>Choose lean proteins and healthy fats</li>
        <li>Monitor carbohydrate intake and portion sizes</li>
      </ul>
      
      <h3>2. Engage in Regular Exercise</h3>
      <p>Physical activity improves insulin sensitivity and helps manage weight. Aim for at least 150 minutes of moderate exercise each week, such as walking, cycling, or swimming.</p>
      
      <h3>3. Monitor Blood Sugar Levels</h3>
      <p>Regular monitoring helps you stay within target ranges and make informed decisions about food, activity, and medications.</p>
      
      <h2>Treatment Options</h2>
      <p>Diabetes treatment depends on the type and severity:</p>
      
      <h3>Medications</h3>
      <ul>
        <li>Insulin therapy (for Type 1 and some Type 2 patients)</li>
        <li>Oral medications to improve insulin sensitivity or reduce sugar absorption</li>
        <li>GLP-1 receptor agonists and SGLT2 inhibitors for additional control</li>
      </ul>
      
      <h3>Technological Tools</h3>
      <ul>
        <li>Continuous glucose monitors (CGMs)</li>
        <li>Insulin pumps</li>
        <li>Smartphone apps for tracking blood sugar, food, and medication</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Living with diabetes requires commitment and daily care, but with the right strategies, people can live full and healthy lives. A personalized care plan developed with healthcare professionals, along with lifestyle adjustments, is crucial to long-term success in diabetes management.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "2024-03-22",
    category: "Endocrinology",
    image: "/images/diabetes.jpg",
    readTime: "6 min read",
    tags: ["Diabetes", "Management", "Healthy Living"],
    authorBio:
      "Dr. Rajesh Kumar is an experienced endocrinologist specializing in diabetes care and metabolic disorders for over 15 years.",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Pediatric Care: Child Development Milestones",
    content: `
      <h2>Introduction to Child Development</h2>
      <p>Understanding developmental milestones is essential for monitoring a child's physical, emotional, and cognitive growth. This guide offers an overview of the key stages and how parents and caregivers can support healthy development.</p>
      
      <h2>Developmental Domains</h2>
      <p>Child development is categorized into several domains:</p>
      <ul>
        <li><strong>Gross Motor Skills:</strong> Movement using large muscles (e.g., sitting, walking)</li>
        <li><strong>Fine Motor Skills:</strong> Coordination of small muscles (e.g., grasping, drawing)</li>
        <li><strong>Language and Communication:</strong> Verbal and non-verbal skills</li>
        <li><strong>Cognitive Skills:</strong> Problem-solving and learning abilities</li>
        <li><strong>Social and Emotional Development:</strong> Interacting with others and managing emotions</li>
      </ul>
      
      <h2>Key Milestones by Age</h2>
      <p>Here are typical milestones, though every child develops at their own pace:</p>
      
      <h3>1. Infants (0-12 Months)</h3>
      <ul>
        <li>Rolls over, sits without support</li>
        <li>Babbling, responds to name</li>
        <li>Shows affection and stranger anxiety</li>
      </ul>
      
      <h3>2. Toddlers (1-3 Years)</h3>
      <ul>
        <li>Walks independently, begins to run</li>
        <li>Uses simple words and phrases</li>
        <li>Engages in simple pretend play</li>
      </ul>
      
      <h3>3. Preschoolers (3-5 Years)</h3>
      <ul>
        <li>Hops, climbs, and begins drawing shapes</li>
        <li>Speaks in complete sentences</li>
        <li>Plays cooperatively with peers</li>
      </ul>
      
      <h2>Parental Support and Early Intervention</h2>
      <p>Parents and caregivers play a crucial role in early childhood development:</p>
      
      <h3>Encouragement and Interaction</h3>
      <ul>
        <li>Provide stimulating toys and books</li>
        <li>Encourage play, exploration, and creativity</li>
        <li>Talk, sing, and read to your child daily</li>
      </ul>
      
      <h3>Monitoring and Consulting Professionals</h3>
      <ul>
        <li>Track developmental progress at regular check-ups</li>
        <li>Seek early intervention if delays are noticed</li>
        <li>Work closely with pediatricians and therapists</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Each child grows at their own pace, but understanding developmental milestones can help identify strengths and potential concerns early on. Supportive parenting, early education, and regular health check-ups form the foundation of healthy childhood development.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "2024-04-10",
    category: "Pediatrics",
    image: "/images/childcare.jpg",
    readTime: "5 min read",
    tags: ["Child Development", "Milestones", "Pediatric Care"],
    authorBio:
      "Dr. Rajesh Kumar is a renowned pediatrician with over 15 years of experience in child development and preventive pediatric care.",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
]

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Await the params to get the actual parameter values
  const { id } = await params
  const post = blogPosts.find((p) => p.id === Number.parseInt(id))

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

            <BlogPostActions />
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
