import Link from "next/link"
import { Github, Linkedin, Mail, FileText, Globe } from "lucide-react"

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="https://github.com/WalaEddine01" target="_blank" aria-label="GitHub">
        <Github className="w-4 h-4 text-slate hover:text-accent transition-colors duration-200" />
      </Link>
      <Link href="https://linkedin.com/in/Wala-eddine-boulebbina" target="_blank" aria-label="LinkedIn">
        <Linkedin className="w-4 h-4 text-slate hover:text-accent transition-colors duration-200" />
      </Link>
      <Link href="mailto:Wala.eddine.boulebbina@gmail.com" aria-label="Email">
        <Mail className="w-4 h-4 text-slate hover:text-accent transition-colors duration-200" />
      </Link>
      <Link href="https://drive.google.com/file/d/1XjH4O0PJZu5oaW87aA_mfhjCGmRo4oqH/view?usp=sharing" aria-label="Resume">
        <FileText className="w-4 h-4 text-slate hover:text-accent transition-colors duration-200" />
      </Link>
      <Link href="https://walaeddine.tech" target="_blank" aria-label="Website">
        <Globe className="w-4 h-4 text-slate hover:text-accent transition-colors duration-200" />
      </Link>
    </div>
  )
}

