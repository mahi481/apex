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
  title: "Apex Hospital - Leading Healthcare in Solapur",
  description:
    "Apex Hospital provides world-class healthcare services in Solapur with expert doctors, advanced facilities, and comprehensive medical care.",
}

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