"use client"
import Image from "next/image"
import Navigation from "./navigation"
import SocialIcons from "./social-icons"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="logo-hover-container mb-8 h-[80px] flex items-center justify-center">
            <div className="text-content absolute">
              <h1 className="text-xl font-semibold text-slate-light mb-2">Wala Eddine Boulebbina</h1>
              <p className="text-xs text-slate">Software Engineer & Cybersecurity Enthusiast</p>
            </div>
            <Image src="/logo.png" alt="Wala Eddine Logo" width={120} height={120} className="logo-hover" />
          </div>
          <div className="mt-16">
            <Navigation />
          </div>
        </div>
        <div className="mt-auto">
          <SocialIcons />
          <div className="text-[10px] text-slate-dark mt-4">© {new Date().getFullYear()} Wala Eddine Boulebbina</div>
        </div>
      </div>
    </aside>
  )
}

