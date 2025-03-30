interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-block px-2 py-1 text-[9px] rounded bg-navy-light text-accent mr-2 mb-2 hover:bg-navy-light/80 transition-colors duration-200 border border-accent/10">
      {name}
    </span>
  )
}

