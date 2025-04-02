import Image from "next/image"

interface CertificationCardProps {
  title: string
  organization: string
  date: string
  imageUrl: string
}

export default function CertificationCard({ title, organization, date, imageUrl }: CertificationCardProps) {
  return (
    <div className="certification-card bg-navy-light/30 rounded-lg p-4 border border-slate/5 hover:bg-navy-light/40 transition-colors duration-300">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-sm font-medium text-slate-light">{title}</h4>
          <p className="text-xs text-slate-dark">{date}</p>
          <p className="text-xs text-slate mt-1">{organization}</p>
        </div>
        <div className="relative w-12 h-12 ml-3 flex-shrink-0 rounded-md overflow-hidden border border-accent/10">
          <Image src={imageUrl || "/placeholder.svg"} alt={`${title} logo`} fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

