import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientCursorEffect from "@/components/client-cursor-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wala Eddine Boulebbina | Software Engineer",
  description:
    "Software Engineer & Cybersecurity Enthusiast specializing in full-stack development with LAMP and MERN stacks",
  keywords: [
    "Software Engineer",
    "Cybersecurity Enthusiast",
    "Full Stack Developer",
    "LAMP Stack",
    "MERN Stack",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="4.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientCursorEffect />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}