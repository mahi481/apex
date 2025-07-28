import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import StickyElements from "@/components/StickyElements/StickyElements"


const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Apex Hospital - Leading Healthcare in Solapur | Best Multispecialty Hospital",
  description: "Apex Hospital Solapur offers world-class healthcare with 24/7 emergency care, expert doctors, advanced medical technology, and comprehensive treatment across 30+ specialties. Book appointment online.",
  keywords: "Apex Hospital Solapur, best hospital Solapur, multispecialty hospital, emergency care, cardiology, oncology, orthopedics, neurology, healthcare Solapur, medical center, best doctors Solapur, hospital near me",
  authors: [{ name: "Apex Hospital" }],
  creator: "Apex Hospital",
  publisher: "Apex Hospital",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://apexhospitalsolapur.com",
    siteName: "Apex Hospital Solapur",
    title: "Apex Hospital - Leading Healthcare in Solapur | Best Multispecialty Hospital",
    description: "Apex Hospital Solapur offers world-class healthcare with 24/7 emergency care, expert doctors, advanced medical technology, and comprehensive treatment across 30+ specialties.",
    images: [
      {
        url: "/images/apex-hospital-og.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Hospital Solapur - Leading Healthcare Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ApexHospitalSolapur",
    creator: "@ApexHospitalSolapur",
    title: "Apex Hospital - Leading Healthcare in Solapur",
    description: "World-class healthcare with 24/7 emergency care, expert doctors, and advanced medical technology in Solapur.",
    images: ["/images/apex-hospital-twitter.jpg"],
  },
  alternates: {
    canonical: "https://apexhospitalsolapur.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Healthcare",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyElements />
       
      </body>
    </html>
  )
}
