"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navItems = [
  { name: "ABOUT", path: "#about" },
  { name: "EXPERIENCE", path: "#experience" },
  { name: "PROJECTS", path: "#projects" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    // Function to handle smooth scrolling when clicking nav links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const href = target.getAttribute("href") as string
        const targetSection = document.querySelector(href)

        if (targetSection) {
          window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          })
          setActiveSection(href)
        }
      }
    }

    // Function to update active section based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 150 // Offset to trigger slightly before reaching section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setActiveSection(`#${sectionId}`)
        }
      })
    }

    // Add event listeners
    document.addEventListener("click", handleNavClick)
    window.addEventListener("scroll", handleScroll)

    // Initial check for active section
    handleScroll()

    // Cleanup
    return () => {
      document.removeEventListener("click", handleNavClick)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="mb-8">
      <ul className="flex flex-col space-y-8">
        {navItems.map((item) => (
          <li key={item.name} className="flex items-center group">
            <div
              className={`h-[1px] transition-all duration-300 ${
                activeSection === item.path
                  ? "w-16 bg-accent"
                  : "w-8 bg-slate/30 group-hover:w-12 group-hover:bg-slate-light/50"
              }`}
            ></div>
            <Link
              href={item.path}
              className={`ml-3 text-[10px] tracking-widest transition-colors duration-300 ${
                activeSection === item.path ? "text-accent" : "text-slate group-hover:text-slate-light"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

