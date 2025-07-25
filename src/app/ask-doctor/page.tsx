"use client"
import { HelpCircle, Stethoscope } from "lucide-react"
import styles from "./page.module.css"

export default function AskDoctorPage() {
  const faqItems = [
    {
      question: "How quickly will I receive a response?",
      answer: "Our medical experts typically respond within 24 hours during business days.",
    },
    {
      question: "Is this service free?",
      answer: "Yes, asking questions to our doctors through this platform is completely free.",
    },
    {
      question: "Can I ask about my specific medical condition?",
      answer:
        "You can ask general questions, but for specific medical conditions, we recommend scheduling a consultation.",
    },
    {
      question: "Are the responses confidential?",
      answer: "Yes, all communications are kept strictly confidential and secure.",
    },
  ]

  const patientRightsQuestions = [
    "What is my diagnosis, and can you explain it in simple terms?",
    "Why is this procedure necessary, and are there any alternatives?",
    "What are the risks and benefits of the proposed treatment or surgery?",
    "Who will be performing the operation and what are their qualifications?",
    "What kind of anesthesia will be used and what are its risks?",
    "How long will the recovery process take?",
    "What will my stay in the hospital involve?",
    "Can I see my medical records?",
    "What are the costs involved, and will my insurance cover them?",
    "Can I get a second opinion before making a decision?",
    "What should I do if I feel pain or something doesn’t feel right?",
    "Who can I talk to if I have concerns during my stay?",
    "What should I do after discharge, and who can I contact with questions?",
  ]

  return (
    <div className={styles.askDoctorPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>
            <HelpCircle size={36} />
            Ask Your Doctor
          </h1>
          <p>Know your rights. Be informed. Ask the right questions before any treatment or procedure.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrap}>
                  <Stethoscope size={32} />
                </div>
                <div>
                  <h2>Important Questions Every Patient Should Ask</h2>
                  <p>Being informed is your right. Whether you're going for a check-up, surgery, or a hospital stay, here are key questions to ask your doctor:</p>
                </div>
              </div>

              <ul className={styles.questionList}>
                {patientRightsQuestions.map((q, i) => (
                  <li key={i}>✔ {q}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <section className={styles.section}>
              <h3>Important Notice</h3>
              <div className={styles.noticeCard}>
                <p><strong>This page provides general health awareness only.</strong></p>
                <ul>
                  <li>It does not replace professional medical consultation</li>
                  <li>For emergencies, call +91-9876543211</li>
                  <li>For urgent concerns, consult your doctor immediately</li>
                  <li>All information is for educational purposes only</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h3>Frequently Asked Questions</h3>
              <div className={styles.faqList}>
                {faqItems.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
