"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Navigation from "./navigation"
import SocialIcons from "./social-icons"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar")
      const toggleButton = document.getElementById("sidebar-toggle")

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      document.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        id="sidebar-toggle"
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-navy-light/80 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6 text-slate-light" /> : <Menu className="w-6 h-6 text-slate-light" />}
      </button>

      {/* Sidebar */}
      <aside id="sidebar" className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="flex flex-col h-full justify-between">
          <div>
            <Link
              href="https://walaeddine.Tech"
              target="_blank"
              className="logo-hover-container mb-8 h-[80px] flex items-center justify-center"
            >
              <div className="text-content absolute">
                <h1 className="text-xl font-semibold text-slate-light mb-2">Wala Eddine Boulebbina</h1>
                <p className="text-xs text-slate">Enhancing tech skills to make an impact.</p>
              </div>
              <Image src="/logo.png" alt="Wala Eddine Logo" width={120} height={120} className="logo-hover" />
            </Link>
            <div className="mt-16">
              <Navigation onNavClick={() => setIsOpen(false)} />
            </div>
          </div>
          <div className="mt-auto">
            <SocialIcons />
            <div className="text-[10px] text-slate-dark mt-4">© {new Date().getFullYear()} Wala Eddine Boulebbina</div>
          </div>
        </div>
      </aside>
    </>
  )
}

