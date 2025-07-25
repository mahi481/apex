import Hero from "@/components/Home/Hero"
import QuickActions from "@/components/Home/QuickActions"
import FeaturedServices from "@/components/Home/FeaturedServices"
import WhyChooseUs from "@/components/Home/WhyChooseUs"
import Testimonials from "@/components/Home/Testimonials"
import HealthTips from "@/components/Home/HealthTips"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <QuickActions />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <HealthTips />
    </div>
  )
}
