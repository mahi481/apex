"use client"
import { useState, use } from "react"
import Link from "next/link"
import { Calendar, Users, ArrowLeft, Download, ExternalLink, Quote } from "lucide-react"
import styles from "./page.module.css"

const journalArticles = [
  {
    id: 1,
    title: "Advances in Minimally Invasive Cardiac Surgery",
    authors: "Dr. Kumar R., Dr. Sharma P., Dr. Patel A.",
    journal: "Indian Journal of Cardiology",
    date: "2024-01-20",
    abstract:
      "This study examines the outcomes of minimally invasive cardiac procedures and their impact on patient recovery times and long-term health outcomes. Our research involved 500 patients over a 2-year period, comparing traditional open-heart surgery with minimally invasive techniques.",
    fullContent: `
      <h2>Abstract</h2>
      <p>Background: Minimally invasive cardiac surgery has gained popularity due to its potential benefits over traditional open-heart procedures. This study aims to evaluate the outcomes and effectiveness of these techniques.</p>
      
      <p>Methods: We conducted a retrospective analysis of 500 patients who underwent cardiac procedures between 2022-2024. Patients were divided into two groups: traditional open surgery (n=250) and minimally invasive procedures (n=250).</p>
      
      <p>Results: Patients who underwent minimally invasive procedures showed significantly reduced recovery times (average 7 days vs 14 days), lower infection rates (2% vs 8%), and improved patient satisfaction scores.</p>
      
      <p>Conclusion: Minimally invasive cardiac surgery demonstrates superior outcomes in terms of recovery time, complications, and patient satisfaction while maintaining equivalent long-term cardiac function.</p>
      
      <h2>Introduction</h2>
      <p>Cardiac surgery has evolved significantly over the past decades, with minimally invasive techniques becoming increasingly sophisticated. These procedures offer the potential for reduced trauma, faster recovery, and improved cosmetic outcomes while maintaining the efficacy of traditional approaches.</p>
      
      <p>The development of specialized instruments, improved imaging techniques, and enhanced surgical training has made it possible to perform complex cardiac procedures through smaller incisions. This study represents one of the largest comparative analyses of minimally invasive versus traditional cardiac surgery outcomes in the Indian population.</p>
      
      <h2>Methodology</h2>
      <h3>Study Design</h3>
      <p>This retrospective cohort study was conducted at our tertiary care cardiac center from January 2022 to December 2024. The study protocol was approved by the institutional ethics committee, and all patients provided informed consent.</p>
      
      <h3>Patient Selection</h3>
      <p>Inclusion criteria included:</p>
      <ul>
        <li>Patients aged 18-75 years</li>
        <li>Elective cardiac procedures</li>
        <li>Single-vessel or multi-vessel coronary artery disease</li>
        <li>Valvular heart disease requiring surgical intervention</li>
      </ul>
      
      <p>Exclusion criteria:</p>
      <ul>
        <li>Emergency procedures</li>
        <li>Previous cardiac surgery</li>
        <li>Severe comorbidities</li>
        <li>Patient refusal for minimally invasive approach</li>
      </ul>
      
      <h2>Results</h2>
      <h3>Patient Demographics</h3>
      <p>The study included 500 patients with a mean age of 58.5 ± 12.3 years. The minimally invasive group had 145 males and 105 females, while the traditional surgery group had 152 males and 98 females.</p>
      
      <h3>Primary Outcomes</h3>
      <p>Hospital length of stay was significantly shorter in the minimally invasive group (7.2 ± 2.1 days vs 14.5 ± 3.8 days, p<0.001). Post-operative complications were also reduced, with surgical site infections occurring in 2% of minimally invasive patients compared to 8% in the traditional surgery group.</p>
      
      <h3>Secondary Outcomes</h3>
      <p>Patient satisfaction scores were significantly higher in the minimally invasive group (9.2/10 vs 7.8/10, p<0.001). Return to normal activities occurred earlier in the minimally invasive group (3.5 weeks vs 8.2 weeks).</p>
      
      <h2>Discussion</h2>
      <p>Our findings demonstrate that minimally invasive cardiac surgery offers significant advantages over traditional approaches. The reduced surgical trauma leads to faster recovery times and improved patient outcomes. However, these procedures require specialized training and equipment, which may limit their widespread adoption.</p>
      
      <p>The learning curve for minimally invasive techniques is steep, and surgeons must be adequately trained to ensure patient safety. Our institution has implemented a comprehensive training program that has contributed to the success of our minimally invasive cardiac surgery program.</p>
      
      <h2>Limitations</h2>
      <p>This study has several limitations. First, it is a single-center retrospective analysis, which may limit the generalizability of our findings. Second, patient selection bias may have influenced outcomes, as patients deemed suitable for minimally invasive procedures may have had less complex disease.</p>
      
      <h2>Conclusion</h2>
      <p>Minimally invasive cardiac surgery represents a significant advancement in cardiac care, offering improved outcomes for appropriately selected patients. As technology continues to evolve and surgical expertise grows, these techniques are likely to become the standard of care for many cardiac procedures.</p>
      
      <p>Future research should focus on long-term outcomes and cost-effectiveness analyses to further establish the role of minimally invasive cardiac surgery in modern cardiac care.</p>
    `,
    doi: "10.1016/j.ijcard.2024.01.001",
    citations: 15,
    keywords: ["Cardiac Surgery", "Minimally Invasive", "Patient Outcomes", "Recovery Time"],
    references: [
      "Smith J, et al. Minimally invasive cardiac surgery: A systematic review. J Thorac Cardiovasc Surg. 2023;165(2):456-467.",
      "Johnson A, et al. Outcomes of minimally invasive versus traditional cardiac surgery. Ann Thorac Surg. 2023;115(3):789-796.",
      "Brown K, et al. Patient satisfaction in cardiac surgery: A comparative study. Heart Surg Forum. 2023;26(4):E234-E241.",
    ],
  },
  {
    id: 2,
    title: "Neuroplasticity in Stroke Recovery",
    authors: "Dr. Rao S., Dr. Singh V.",
    journal: "Neurology India",
    date: "2024-01-18",
    abstract:
      "Research on brain plasticity and its role in post-stroke rehabilitation, including innovative therapy approaches and recovery protocols. This comprehensive study examines the mechanisms of neuroplasticity and their clinical applications in stroke recovery.",
    fullContent: `
      <h2>Abstract</h2>
      <p>Background: Neuroplasticity, the brain's ability to reorganize and form new neural connections, plays a crucial role in stroke recovery. Understanding these mechanisms is essential for developing effective rehabilitation strategies.</p>
      
      <p>Objective: To investigate the role of neuroplasticity in stroke recovery and evaluate the effectiveness of targeted rehabilitation interventions.</p>
      
      <p>Methods: A prospective study of 200 stroke patients undergoing comprehensive rehabilitation programs incorporating neuroplasticity-based interventions over 12 months.</p>
      
      <p>Results: Patients receiving neuroplasticity-focused rehabilitation showed 40% greater improvement in functional outcomes compared to standard care. Neuroimaging revealed significant structural and functional brain changes.</p>
      
      <h2>Introduction</h2>
      <p>Stroke remains a leading cause of disability worldwide, affecting millions of individuals annually. The recovery process following stroke is complex and involves multiple mechanisms, with neuroplasticity playing a central role in functional restoration.</p>
      
      <p>Recent advances in neuroscience have enhanced our understanding of how the brain adapts and reorganizes following injury. This knowledge has led to the development of innovative rehabilitation approaches that harness the brain's natural plasticity to promote recovery.</p>
      
      <h2>Neuroplasticity Mechanisms</h2>
      <h3>Structural Plasticity</h3>
      <p>Structural plasticity involves physical changes in brain structure, including:</p>
      <ul>
        <li>Dendritic sprouting and growth</li>
        <li>Synaptogenesis (formation of new synapses)</li>
        <li>Axonal regeneration</li>
        <li>Neurogenesis in specific brain regions</li>
      </ul>
      
      <h3>Functional Plasticity</h3>
      <p>Functional plasticity refers to the brain's ability to modify neural pathways and redistribute functions:</p>
      <ul>
        <li>Cortical remapping of functions</li>
        <li>Recruitment of alternative neural networks</li>
        <li>Enhanced connectivity between brain regions</li>
        <li>Compensation through unaffected areas</li>
      </ul>
      
      <h2>Rehabilitation Strategies</h2>
      <h3>Constraint-Induced Movement Therapy (CIMT)</h3>
      <p>CIMT involves constraining the unaffected limb while intensively training the affected limb. This approach forces the brain to reorganize and strengthen neural pathways controlling the impaired limb.</p>
      
      <h3>Virtual Reality Training</h3>
      <p>Virtual reality environments provide engaging, task-specific training that promotes neuroplasticity through:</p>
      <ul>
        <li>Repetitive, goal-oriented movements</li>
        <li>Real-time feedback</li>
        <li>Progressive difficulty adjustment</li>
        <li>Enhanced motivation and engagement</li>
      </ul>
      
      <h3>Brain Stimulation Techniques</h3>
      <p>Non-invasive brain stimulation methods such as transcranial magnetic stimulation (TMS) and transcranial direct current stimulation (tDCS) can enhance neuroplasticity by modulating neural activity in targeted brain regions.</p>
      
      <h2>Clinical Outcomes</h2>
      <p>Our study demonstrated significant improvements in functional outcomes among patients receiving neuroplasticity-based interventions. Motor function scores improved by an average of 65% compared to 25% in the control group. Speech and language recovery showed similar patterns of enhanced improvement.</p>
      
      <h2>Future Directions</h2>
      <p>Emerging technologies such as brain-computer interfaces and advanced neuroimaging techniques hold promise for further enhancing stroke rehabilitation. Personalized medicine approaches based on individual neuroplasticity profiles may optimize recovery outcomes.</p>
      
      <h2>Conclusion</h2>
      <p>Neuroplasticity-based rehabilitation represents a paradigm shift in stroke care, offering hope for improved functional recovery. Continued research and clinical implementation of these approaches will benefit countless stroke survivors worldwide.</p>
    `,
    doi: "10.1016/j.neuroindia.2024.01.002",
    citations: 8,
    keywords: ["Neuroplasticity", "Stroke Recovery", "Rehabilitation", "Brain Plasticity"],
    references: [
      "Wilson M, et al. Neuroplasticity mechanisms in stroke recovery. Nature Neuroscience. 2023;30(8):1234-1245.",
      "Davis L, et al. Rehabilitation strategies targeting neuroplasticity. Stroke. 2023;54(7):1567-1578.",
      "Thompson R, et al. Virtual reality in stroke rehabilitation. J Neurorehabil. 2023;40(3):345-356.",
    ],
  },
]

interface PageProps {
  params: Promise<{ id: string }>
}

export default function JournalArticlePage({ params }: PageProps) {
  const [activeSection, setActiveSection] = useState("abstract")
  const { id } = use(params) // Use React's 'use' hook to unwrap the Promise
  const article = journalArticles.find((a) => a.id === Number.parseInt(id))

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Article Not Found</h1>
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
    )
  }

  const sections = [
    { id: "abstract", label: "Abstract" },
    { id: "full-text", label: "Full Text" },
    { id: "references", label: "References" },
    { id: "metrics", label: "Metrics" },
  ]

  return (
    <div className={styles.journalPage}>
      <div className={styles.container}>
        <div className={styles.backNavigation}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        <div className={styles.articleLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <h3>Article Sections</h3>
              <nav className={styles.sectionNav}>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`${styles.sectionBtn} ${activeSection === section.id ? styles.active : ""}`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>

              <div className={styles.articleInfo}>
                <h4>Article Information</h4>
                <div className={styles.infoItem}>
                  <strong>DOI:</strong>
                  <span className={styles.doi}>{article.doi}</span>
                </div>
                <div className={styles.infoItem}>
                  <strong>Citations:</strong>
                  <span className={styles.citations}>{article.citations}</span>
                </div>
                <div className={styles.infoItem}>
                  <strong>Published:</strong>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>

              <div className={styles.keywords}>
                <h4>Keywords</h4>
                <div className={styles.keywordList}>
                  {article.keywords.map((keyword, index) => (
                    <span key={index} className={styles.keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.actions}>
                <button className={styles.actionBtn}>
                  <Download size={16} />
                  Download PDF
                </button>
                <button className={styles.actionBtn}>
                  <ExternalLink size={16} />
                  View in Journal
                </button>
              </div>
            </div>
          </aside>

          <main className={styles.mainContent}>
            <article className={styles.article}>
              <header className={styles.articleHeader}>
                <div className={styles.journalInfo}>
                  <span className={styles.journalName}>{article.journal}</span>
                  <div className={styles.articleMeta}>
                    <div className={styles.metaItem}>
                      <Users size={16} />
                      <span>{article.authors}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <h1 className={styles.articleTitle}>{article.title}</h1>
              </header>

              <div className={styles.articleContent}>
                {activeSection === "abstract" && (
                  <div className={styles.abstractSection}>
                    <h2>Abstract</h2>
                    <div className={styles.abstractContent}>
                      <Quote className={styles.quoteIcon} />
                      <p>{article.abstract}</p>
                    </div>
                  </div>
                )}

                {activeSection === "full-text" && (
                  <div className={styles.fullTextSection}>
                    <div className={styles.fullTextContent} dangerouslySetInnerHTML={{ __html: article.fullContent }} />
                  </div>
                )}

                {activeSection === "references" && (
                  <div className={styles.referencesSection}>
                    <h2>References</h2>
                    <ol className={styles.referenceList}>
                      {article.references.map((reference, index) => (
                        <li key={index} className={styles.reference}>
                          {reference}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {activeSection === "metrics" && (
                  <div className={styles.metricsSection}>
                    <h2>Article Metrics</h2>
                    <div className={styles.metricsGrid}>
                      <div className={styles.metricCard}>
                        <div className={styles.metricNumber}>{article.citations}</div>
                        <div className={styles.metricLabel}>Citations</div>
                      </div>
                      <div className={styles.metricCard}>
                        <div className={styles.metricNumber}>1,234</div>
                        <div className={styles.metricLabel}>Views</div>
                      </div>
                      <div className={styles.metricCard}>
                        <div className={styles.metricNumber}>456</div>
                        <div className={styles.metricLabel}>Downloads</div>
                      </div>
                      <div className={styles.metricCard}>
                        <div className={styles.metricNumber}>89</div>
                        <div className={styles.metricLabel}>Shares</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
