import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CursorEffect from "@/components/cursor-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wala Eddine Boulebbina | Software Engineer",
  description:
    "Software Engineer & Cybersecurity Enthusiast specializing in full-stack development with LAMP and MERN stacks",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CursorEffect />
          <div className="bg-pattern">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'