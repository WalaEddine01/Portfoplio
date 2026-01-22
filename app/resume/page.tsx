import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import Sidebar from "@/components/sidebar"
import ProjectCard from "@/components/project-card"
import JobExperience from "@/components/job-experience"
import TechBadge from "@/components/tech-badge"
import CertificationCard from "@/components/certification-card"
import ElevatorPitch from "@/components/elevator-pitch"
import { FileText, Mail } from "lucide-react"
import certificationimgalxse from "@/public/17-short-specializations-certificate-wala-eddine-boulebbina.png"
import certificationimgalxAICE from "@/public/40-alx-aice-ai-career-essentials-certificate-wala-eddine-boulebbina.png"
import certificationimgPMP from "@/public/Screenshot.png"
import whisperimg from "@/public/1720106801903.jpg"
import orgschoolimg from "@/public/ORGscholl.png"
import simpleshellimg from "@/public/simpleshell.png";

export default function ResumePage() {
  return (
    <div className="flex flex-col md:flex-row">
      <main className="main-content">
        <section id="about" className="mb-16 pt-4">
          <h2 className="text-lg font-semibold text-slate-light mb-3">Blogs</h2>
        </section>
      </main>
    </div>
  )
}
