import Image from "next/image"
import Link from "next/link"
import TechBadge from "./tech-badge"
import { ExternalLink, Download } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  technologies: string[]
  stars?: number
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
  stars,
}: ProjectCardProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-slate-dark text-[10px] md:w-24 md:flex-shrink-0">Featured Project</div>
        <div className="bg-navy-light/30 rounded-lg p-5 hover:bg-navy-light/40 transition-all duration-300 cursor-pointer flex-1 border border-slate/5 hover:translate-y-[-2px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:w-1/4 flex-shrink-0">
            <div className="relative w-full overflow-hidden rounded-md border border-accent/10">
              <img src={imageUrl} alt={title} className="w-full object-cover" />
            </div>

            </div>
            <div className="md:w-3/4">
              <Link href={projectUrl} target="_blank" className="group">
                <h3 className="text-sm font-medium text-accent flex items-center mb-2">
                  {title}{" "}
                  <ExternalLink className="ml-2 w-3 h-3 opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
              </Link>
              <p className="mb-2 text-slate leading-relaxed text-xs">{description}</p>
              <div className="flex flex-wrap mb-2">
                {technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
              {stars && (
                <div className="flex items-center text-slate text-[10px] mt-3">
                  <Download className="w-3 h-3 mr-1 text-slate" />
                  <span>{stars}+ Installs</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

