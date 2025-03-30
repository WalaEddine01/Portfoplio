import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-navy p-8">
      <div className="max-w-4xl mx-auto bg-navy-light rounded-lg shadow-lg p-8 border border-slate/10">
        <div className="mb-8 flex items-center">
          <Link href="/" className="text-accent hover:text-accent-dark flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        <header className="mb-8 border-b border-slate/10 pb-4">
          <h1 className="text-2xl font-bold text-slate-light mb-2">Wala Eddine Boulebbina</h1>
          <p className="text-slate">Software Engineer & Cybersecurity Enthusiast</p>
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate">
            <span>Wala.eddine.boulebbina@gmail.com</span>
            <span>•</span>
            <span>github.com/WalaEddine01</span>
            <span>•</span>
            <span>linkedin.com/in/Wala-eddine-boulebbina</span>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-slate-light mb-3 border-b border-slate/10 pb-1">Summary</h2>
          <p className="text-slate text-sm">
            Experienced software engineer with a focus on full-stack development and cybersecurity. Proficient in
            building secure, scalable web applications using modern technologies. Strong problem-solving skills and a
            passion for creating elegant solutions to complex challenges.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-slate-light mb-3 border-b border-slate/10 pb-1">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-slate-light mb-1">Languages</h3>
              <p className="text-slate text-sm">JavaScript, TypeScript, PHP, Python, SQL, HTML, CSS</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-light mb-1">Frameworks & Libraries</h3>
              <p className="text-slate text-sm">React, Node.js, Express, Next.js, Laravel, Vue.js</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-light mb-1">Tools & Platforms</h3>
              <p className="text-slate text-sm">Git, Docker, AWS, Firebase, MongoDB, MySQL, PostgreSQL</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-light mb-1">Security</h3>
              <p className="text-slate text-sm">OWASP, Penetration Testing, Security Auditing, Encryption</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-slate-light mb-3 border-b border-slate/10 pb-1">Experience</h2>

          <div className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-sm font-medium text-slate-light">Software Engineer</h3>
              <div className="text-xs text-slate-dark">2022 - Present</div>
            </div>
            <div className="text-xs font-medium text-accent mb-1">Example Corp</div>
            <ul className="list-disc list-inside text-slate text-xs space-y-1">
              <li>Developed and maintained web applications using React, Node.js, and TypeScript</li>
              <li>Implemented security best practices and optimized application performance</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
              <li>Conducted code reviews and mentored junior developers</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-sm font-medium text-slate-light">Frontend Developer</h3>
              <div className="text-xs text-slate-dark">2020 - 2022</div>
            </div>
            <div className="text-xs font-medium text-accent mb-1">Tech Solutions</div>
            <ul className="list-disc list-inside text-slate text-xs space-y-1">
              <li>Built responsive user interfaces using modern frontend frameworks</li>
              <li>Collaborated with designers and backend developers to implement new features</li>
              <li>Optimized website performance and improved user experience</li>
              <li>Participated in agile development processes</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-slate-light mb-3 border-b border-slate/10 pb-1">Education</h2>
          <div className="flex flex-col md:flex-row md:justify-between mb-1">
            <h3 className="text-sm font-medium text-slate-light">Bachelor of Science in Computer Science</h3>
            <div className="text-xs text-slate-dark">2016 - 2020</div>
          </div>
          <div className="text-xs font-medium text-accent">University of Technology</div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-light mb-3 border-b border-slate/10 pb-1">Certifications</h2>
          <ul className="list-disc list-inside text-slate text-xs space-y-1">
            <li>Certified Information Systems Security Professional (CISSP)</li>
            <li>AWS Certified Developer - Associate</li>
            <li>MongoDB Certified Developer</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

