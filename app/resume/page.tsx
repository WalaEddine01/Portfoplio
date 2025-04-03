import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-navy p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-slate hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg border border-slate/10 p-6 md:p-8">
          <h1 className="text-2xl font-bold text-slate-light mb-6">Wala Eddine Boulebbina</h1>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-slate mb-8">
  <div><a href="mailto:Wala.eddine.boulebbina@gmail.com" className="text-blue-500">Email: Wala.eddine.boulebbina@gmail.com</a></div>
  <div><a href="https://www.linkedin.com/in/Wala-eddine-boulebbina" className="text-blue-500">LinkedIn: Wala-eddine-boulebbina</a></div>
  <div><a href="https://walaeddine.tech" className="text-blue-500">Website: walaeddine.tech</a></div>
  <div><a href="https://github.com/WalaEddine01" className="text-blue-500">Github: WalaEddine01</a></div>
</div>


          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-light mb-3 pb-1 border-b border-slate/10">SUMMARY</h2>
            <ul className="list-disc pl-5 text-slate space-y-1">
              <li>Wala Eddine Boulebbina – Software Engineer & Cybersecurity Enthusiast</li>
              <li>Focused on designing and developing software solutions</li>
              <li>Experienced in LAMP and MERN stacks for full-stack development</li>
              <li>Built low-level projects like a basic compiler and a simple shell</li>
              <li>Focused on sharpening technical skills and contributing to impactful tech solutions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-light mb-3 pb-1 border-b border-slate/10">EDUCATION</h2>
            <div className="mb-2">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">University of Batna 2– Batna, Algeria</h3>
                <span className="text-slate-dark">September 2022 – June 2027</span>
              </div>
              <p className="text-slate">Information security - engineering</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-light mb-3 pb-1 border-b border-slate/10">
              EXPERIENCE & PROJECTS
            </h2>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">Software engineer</h3>
                <span className="text-slate-dark">February 2023 - March 2024</span>
              </div>
              <p className="text-slate mb-1">Alx Africa – Online</p>
              <ul className="list-disc pl-5 text-slate">
                <li>Designed, Built, deployed OrgSchool (student Management System (SMS))</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">Software engineer & Project manager</h3>
                <span className="text-slate-dark">June 2024 - July 2024</span>
              </div>
              <p className="text-slate mb-1">Alx Africa – Online</p>
              <ul className="list-disc pl-5 text-slate">
                <li>Designed, Built, deployed Whisper (Real-time chat app)</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">Developer</h3>
                <span className="text-slate-dark">August 2023 - August 2023</span>
              </div>
              <p className="text-slate mb-1">Alx Africa – Online</p>
              <ul className="list-disc pl-5 text-slate">
                <li>Developing simple shell (bash like)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-light mb-3 pb-1 border-b border-slate/10">
              VOLUNTEER ACTIVITIES
            </h2>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">Project manager & Developer</h3>
                <span className="text-slate-dark">July 2024 - Present</span>
              </div>
              <p className="text-slate mb-1">Algerian tech maker</p>
              <ul className="list-disc pl-5 text-slate">
                <li>
                  Leading and contributing to tech-driven projects, collaborating with teams to develop innovative
                  solutions, and supporting a community for aspiring developers.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">Content creator & media</h3>
                <span className="text-slate-dark">July 2024 - Present</span>
              </div>
              <p className="text-slate mb-1">Algerian tech maker</p>
              <ul className="list-disc pl-5 text-slate">
                <li>
                  Hosting live sessions and creating engaging content to share tech insights and support the community.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-light mb-3 pb-1 border-b border-slate/10">
              CERTIFICATIONS
            </h2>

            <div className="mb-2">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">Software Engineering Program</h3>
                <span className="text-slate-dark">June 2023 - June 2024</span>
              </div>
              <p className="text-slate">Alx Africa – Online</p>
            </div>

            <div className="mb-2">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">AICE Program</h3>
                <span className="text-slate-dark">April 2024</span>
              </div>
              <p className="text-slate">Alx Africa – Online</p>
            </div>

            <div className="mb-2">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-medium text-slate-light">35 hour PMP Training</h3>
                <span className="text-slate-dark">February 2025</span>
              </div>
              <p className="text-slate">benhamouda consulting - Online</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-light mb-3 pb-1 border-b border-slate/10">SKILLS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-slate-light mb-1">Programming:</h3>
                <p className="text-slate">C, Python, JavaScript, TypeScript</p>
              </div>

              <div>
                <h3 className="font-medium text-slate-light mb-1">Web Development:</h3>
                <p className="text-slate">LAMP Stack, MERN Stack</p>
              </div>

              <div>
                <h3 className="font-medium text-slate-light mb-1">Tools & Frameworks:</h3>
                <p className="text-slate">Docker, Git, Linux, CI/CD Pipelines</p>
              </div>

              <div>
                <h3 className="font-medium text-slate-light mb-1">Project Management:</h3>
                <p className="text-slate">Agile & Waterfall Methodologies, Team Leadership, Task Prioritization</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

