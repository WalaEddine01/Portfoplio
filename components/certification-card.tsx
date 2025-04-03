import Image from "next/image"

interface CertificationCardProps {
  title: string
  organization: string
  date: string
  imageUrl: string
  linkto: string
}

export default function CertificationCard({ title, organization, date, imageUrl, linkto }: CertificationCardProps) {
  return (
    <div className="bg-navy-light/30 rounded-lg p-4 border border-slate/5 hover:bg-navy-light/40 transition-colors duration-300 w-full">
      <div className="flex flex-col items-start gap-3">
        <div className="w-full">
          <h4 className="text-base font-medium text-slate-light"><a href={linkto}>{title}</a></h4>
          <p className="text-sm text-slate-dark">{date}</p>
          <p className="text-sm text-slate mt-1">{organization}</p>
        </div>
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-accent/10 bg-white">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  )
}
