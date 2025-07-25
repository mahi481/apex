import { CreditCard, FileText, Shield, Phone, DollarSign, Clock } from "lucide-react"
import styles from "./page.module.css"

export default function BillingPage() {
  const paymentMethods = [
    {
      title: "Cash Payment",
      description: "Pay directly at the billing counter",
      icon: <DollarSign size={24} />,
    },
    {
      title: "Card Payment",
      description: "Credit/Debit cards accepted at all counters",
      icon: <CreditCard size={24} />,
    },
    {
      title: "Online Payment",
      description: "Pay online through our secure payment gateway",
      icon: <Shield size={24} />,
    },
    {
      title: "Insurance",
      description: "Direct billing with approved insurance providers",
      icon: <FileText size={24} />,
    },
  ]

  const insuranceProviders = [
    "Star Health Insurance",
    "HDFC ERGO Health Insurance",
    "ICICI Lombard Health Insurance",
    "New India Assurance",
    "United India Insurance",
    "Oriental Insurance",
    "National Insurance",
    "Bajaj Allianz Health Insurance",
  ]

  return (
    <div className={styles.billingPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <CreditCard size={40} />
            Billing & Insurance
          </h1>
          <p>Transparent pricing and flexible payment options for your healthcare needs</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Payment Methods</h2>
            <div className={styles.paymentGrid}>
              {paymentMethods.map((method, index) => (
                <div key={index} className={styles.paymentCard}>
                  <div className={styles.paymentIcon}>{method.icon}</div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Insurance Coverage</h2>
            <div className={styles.insuranceSection}>
              <div className={styles.insuranceInfo}>
                <h3>We Accept Most Major Insurance Plans</h3>
                <p>
                  We work with most insurance providers to ensure you receive the care you need. Our billing team will
                  help verify your coverage and handle direct billing with your insurance company.
                </p>
                <div className={styles.insuranceProcess}>
                  <h4>Insurance Process:</h4>
                  <ol>
                    <li>Bring your insurance card and ID</li>
                    <li>We verify your coverage and benefits</li>
                    <li>Treatment is provided as per your plan</li>
                    <li>We handle direct billing with your insurer</li>
                    <li>You pay only your co-pay or deductible</li>
                  </ol>
                </div>
              </div>
              <div className={styles.providersList}>
                <h3>Accepted Insurance Providers</h3>
                <ul>
                  {insuranceProviders.map((provider, index) => (
                    <li key={index}>{provider}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Billing Information</h2>
            <div className={styles.billingInfoGrid}>
              <div className={styles.infoCard}>
                <Clock size={24} />
                <h3>Billing Hours</h3>
                <p>
                  Monday - Saturday: 8:00 AM - 8:00 PM
                  <br />
                  Sunday: 9:00 AM - 5:00 PM
                </p>
              </div>
              <div className={styles.infoCard}>
                <Phone size={24} />
                <h3>Billing Inquiries</h3>
                <p>
                  Phone: +91-9876543216
                  <br />
                  Email: billing@apexhospital.com
                </p>
              </div>
              <div className={styles.infoCard}>
                <FileText size={24} />
                <h3>Payment Plans</h3>
                <p>
                  Flexible payment plans available
                  <br />
                  Contact billing for assistance
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Estimate Request</h2>
            <div className={styles.estimateCard}>
              <h3>Get Treatment Cost Estimate</h3>
              <p>
                Need to know the cost of a procedure or treatment? Contact our billing department for a detailed
                estimate based on your insurance coverage and treatment plan.
              </p>
              <div className={styles.estimateContact}>
                <div className={styles.contactMethod}>
                  <Phone size={20} />
                  <span>Call: +91-9876543216</span>
                </div>
                <div className={styles.contactMethod}>
                  <FileText size={20} />
                  <span>Email: billing@apexhospital.com</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Financial Assistance</h2>
            <div className={styles.assistanceCard}>
              <h3>Need Help with Medical Bills?</h3>
              <p>
                We understand that medical expenses can be challenging. Our financial counselors are available to help
                you explore payment options, insurance benefits, and financial assistance programs.
              </p>
              <ul className={styles.assistanceList}>
                <li>Payment plan options</li>
                <li>Insurance verification and claims assistance</li>
                <li>Government scheme eligibility</li>
                <li>Charity care programs</li>
                <li>Medical loan assistance</li>
              </ul>
              <p className={styles.assistanceContact}>
                <strong>Contact Financial Counselor:</strong> +91-9876543217
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
