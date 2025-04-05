import Sidebar from "@/components/sidebar"
import ProjectCard from "@/components/project-card"
import JobExperience from "@/components/job-experience"
import TechBadge from "@/components/tech-badge"
import CertificationCard from "@/components/certification-card"
import ElevatorPitch from "@/components/elevator-pitch"
import Link from "next/link"
import { FileText, Mail } from "lucide-react"
import certificationimgalxse from "@/public/17-short-specializations-certificate-wala-eddine-boulebbina.png"
import certificationimgalxAICE from "@/public/40-alx-aice-ai-career-essentials-certificate-wala-eddine-boulebbina.png"
import certificationimgPMP from "@/public/Screenshot.png"
import whisperimg from "@/public/1720106801903.jpg"
import orgschoolimg from "@/public/ORGscholl.png"
import simpleshellimg from "@/public/simpleshell.png";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <main className="main-content">
        <section id="about" className="mb-16 pt-4">
          <h2 className="text-lg font-semibold text-slate-light mb-3">About Me</h2>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3">
              <p className="text-slate leading-relaxed text-sm max-w-2xl">
                <span className="block mb-4">
                    Wala Eddine Boulebbina – Software Engineer & Cybersecurity Enthusiast focused on designing and developing software solutions.
                </span>
    
                <span className="block mb-4">
                    Experienced in backend development with strong programming skills in C, Python, JavaScript, and TypeScript.
                </span>
    
                <span className="block mb-4">
                    Currently enrolled in the ALX Backend Pro Dev program, focusing on advanced backend concepts.
                </span>
    
                <span className="block mb-4">
                    Has built low-level projects like a basic compiler and a simple shell.
                </span>
    
                <span className="block mb-4">
                    Passionate about creating scalable, efficient, and maintainable systems, with hands-on experience in project management and Agile methodologies.
                </span>
              </p>

              <div className="mt-6 flex gap-4">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light/50 hover:bg-navy-light/70 text-slate-light rounded-md border border-slate/10 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </Link>
                <a
                    href="mailto:Wala.eddine.boulebbina@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light/50 hover:bg-navy-light/70 text-slate-light rounded-md border border-slate/10 transition-colors"
                    >
                    <Mail className="w-4 h-4" />
                    <span>Get in touch</span>
                </a>
              </div>
            </div>

            <div className="lg:w-1/4">
              <ElevatorPitch />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-md font-semibold text-slate-light mb-3">Education</h3>
            <div className="bg-navy-light/30 rounded-lg p-5 border border-slate/5">
              <h4 className="text-sm font-medium text-slate-light">
                <a href="https://univ-batna2.dz/">University of Batna 2 – Batna, Algeria
                </a>
              </h4>
              <p className="text-xs text-slate-dark">September 2022 – June 2027</p>
              <p className="text-sm text-slate mt-1">Information Security - Engineering</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-md font-semibold text-slate-light mb-3">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CertificationCard
                title="Software Engineering Program"
                organization="Alx Africa"
                date="June 2023 - June 2024"
                imageUrl={certificationimgalxse.src}
                linkto="https://intranet.alxswe.com/certificates/MCrGHE59yn"
              />
              <CertificationCard
                title="AICE Program"
                organization="Alx Africa"
                date="April 2024"
                imageUrl={certificationimgalxAICE.src}
                linkto="https://intranet.alxswe.com/certificates/LNMfTszFyP"
              />
              <CertificationCard
                title="35 hour PMP Training"
                organization="benhamouda consulting"
                date="February 2025"
                imageUrl={certificationimgPMP.src}
                linkto="https://drive.google.com/file/d/1pwD79uiBd66WkKZo_CwICpv0ZvCVU8eo/view?usp=drive_link"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-md font-semibold text-slate-light mb-3">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-slate-light mb-2">Programming</h4>
                <div className="flex flex-wrap">
                  {["C", "Python", "JavaScript", "TypeScript"].map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-light mb-2">Web Development</h4>
                <div className="flex flex-wrap">
                  {["LAMP Stack", "MERN Stack", "React", "Node.js"].map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-light mb-2">Tools & Frameworks</h4>
                <div className="flex flex-wrap">
                  {["Docker", "Git", "Linux", "CI/CD Pipelines"].map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-light mb-2">Project Management</h4>
                <div className="flex flex-wrap">
                  {["Agile", "Waterfall", "Team Leadership", "Task Prioritization"].map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-lg font-semibold text-slate-light mb-3">Experience</h2>
          <JobExperience
            dateRange="February 2023 - March 2024"
            title="Software Engineer"
            company="Alx Africa"
            companyUrl="https://www.alxafrica.com"
            description="Designed, built, and deployed OrgSchool, a comprehensive Student Management System (SMS) that streamlines educational administration processes."
            technologies={["JavaScript", "React", "Node.js", "MongoDB"]}
          />
          <JobExperience
            dateRange="June 2024 - July 2024"
            title="Software Engineer & Project Manager"
            company="Alx Africa"
            companyUrl="https://www.alxafrica.com"
            description="Led the development team and designed, built, and deployed Whisper, a real-time chat application with secure messaging capabilities."
            technologies={["TypeScript", "React", "Socket.io", "Express"]}
          />
          <JobExperience
            dateRange="August 2023"
            title="Developer"
            company="Alx Africa"
            companyUrl="https://www.alxafrica.com"
            description="Developed a simple shell (bash-like) implementation, demonstrating proficiency in low-level programming and system interactions."
            technologies={["C", "Linux", "Shell Scripting"]}
          />

          <h3 className="text-md font-semibold text-slate-light mt-8 mb-3">Volunteer Activities</h3>
          <JobExperience
            dateRange="July 2024 - Present"
            title="Project Manager & Developer"
            company="Algerian Tech Maker"
            companyUrl="https://www.facebook.com/Algeriantechmakersdz2021/"
            description="Leading and contributing to tech-driven projects, collaborating with teams to develop innovative solutions, and supporting a community for aspiring developers."
            technologies={["Project Management", "Web Development", "Team Leadership"]}
          />
          <JobExperience
            dateRange="July 2024 - Present"
            title="Content Creator & Media"
            company="Algerian Tech Maker"
            companyUrl="https://www.facebook.com/Algeriantechmakersdz2021/"
            description="Hosting live sessions and creating engaging content to share tech insights and support the community."
            technologies={["Content Creation", "Live Streaming", "Technical Writing"]}
          />
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-lg font-semibold text-slate-light mb-3">Projects</h2>
          <ProjectCard
            title="OrgSchool"
            description="A comprehensive Student Management System (SMS) designed to streamline educational administration processes, including student enrollment, grade tracking, and attendance management."
            imageUrl={orgschoolimg.src}
            projectUrl="https://github.com/WalaEddine01/OrgSchool-portfolio-project"
            technologies={["React", "Node.js", "MongoDB", "Express"]}
            /*stars={}*/
          />
          <ProjectCard
            title="Whisper"
            description="A real-time chat application with end-to-end encryption, allowing secure communication between users. Features include message history, file sharing, and user authentication."
            imageUrl={whisperimg.src}
            projectUrl="https://github.com/WalaEddine01/Whisper"
            technologies={["React", "Socket.io", "Node.js", "MongoDB"]}
            /*stars={85}*/
          />
          <ProjectCard
            title="Simple Shell"
            description="A bash-like shell implementation that supports basic command execution, piping, redirection, and environment variable management. Built as a demonstration of low-level programming skills."
            imageUrl={simpleshellimg.src}
            projectUrl="https://github.com/WalaEddine01/simple_shell"
            technologies={["C", "Linux", "System Programming"]}
          />
        </section>
      </main>
    </div>
  )
}

