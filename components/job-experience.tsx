import Link from "next/link"
import TechBadge from "./tech-badge"
import { ExternalLink } from "lucide-react"

interface JobExperienceProps {
  dateRange: string
  title: string
  company: string
  companyUrl?: string
  description: string
  technologies: string[]
}

export default function JobExperience({
  dateRange,
  title,
  company,
  companyUrl,
  description,
  technologies,
}: JobExperienceProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-slate-dark text-[10px] md:w-24 md:flex-shrink-0">{dateRange}</div>
        <div className="bg-navy-light/30 rounded-lg p-5 hover:bg-navy-light/40 transition-all duration-300 cursor-pointer flex-1 border border-slate/5 hover:translate-y-[-2px]">
          <h3 className="text-sm font-medium text-slate-light group">
            {title} ·{" "}
            {companyUrl ? (
              <Link href={companyUrl} className="text-accent hover:underline inline-flex items-center" target="_blank">
                {company}{" "}
                <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ) : (
              company
            )}
          </h3>
          <p className="my-2 text-slate leading-relaxed text-xs">{description}</p>
          <div className="flex flex-wrap">
            {technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

