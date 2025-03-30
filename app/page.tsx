import Sidebar from "@/components/sidebar"
import ProjectCard from "@/components/project-card"
import JobExperience from "@/components/job-experience"

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="main-content">
        <section id="about" className="mb-16 pt-4">
          <h2 className="text-lg font-semibold text-slate-light mb-3">About Me</h2>
          <p className="text-slate leading-relaxed text-sm max-w-2xl">
            I'm a passionate software engineer with a strong interest in cybersecurity. I enjoy building web
            applications and exploring new technologies. My expertise includes full-stack development with both LAMP and
            MERN stacks, with a focus on creating secure, scalable, and user-friendly applications.
          </p>
          <p className="text-slate leading-relaxed text-sm max-w-2xl mt-4">
            With a background in computer science and several years of industry experience, I've developed a keen eye
            for detail and a commitment to writing clean, maintainable code. I'm constantly learning and adapting to new
            technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape.
          </p>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-lg font-semibold text-slate-light mb-3">Experience</h2>
          <JobExperience
            dateRange="2022 - Present"
            title="Software Engineer"
            company="Example Corp"
            companyUrl="https://example.com"
            description="Developed and maintained web applications using React, Node.js, and other modern technologies. Implemented security best practices and optimized application performance."
            technologies={["React", "Node.js", "JavaScript", "TypeScript"]}
          />
          <JobExperience
            dateRange="2020 - 2022"
            title="Frontend Developer"
            company="Tech Solutions"
            companyUrl="https://example.com"
            description="Built responsive user interfaces using modern frontend frameworks. Collaborated with designers and backend developers to implement new features."
            technologies={["React", "Vue.js", "CSS", "HTML"]}
          />
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-lg font-semibold text-slate-light mb-3">Projects</h2>
          <ProjectCard
            title="Project Alpha"
            description="A secure authentication system with multi-factor authentication and role-based access control."
            imageUrl="/placeholder.svg?height=200&width=300"
            projectUrl="https://example.com/project1"
            technologies={["React", "Node.js", "MongoDB", "Express"]}
            stars={120}
          />
          <ProjectCard
            title="Data Visualizer"
            description="An interactive dashboard for visualizing complex datasets with customizable charts and filters."
            imageUrl="/placeholder.svg?height=200&width=300"
            projectUrl="https://example.com/project2"
            technologies={["D3.js", "React", "TypeScript", "Firebase"]}
            stars={85}
          />
          <ProjectCard
            title="Secure Chat"
            description="End-to-end encrypted messaging application with ephemeral messages and secure file sharing."
            imageUrl="/placeholder.svg?height=200&width=300"
            projectUrl="https://example.com/project3"
            technologies={["WebRTC", "React", "Node.js", "Socket.io"]}
          />
        </section>
      </main>
    </div>
  )
}

