import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-navy p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-slate hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg border border-slate/10 p-6 md:p-8">
          <h1 className="text-2xl font-bold text-slate-light mb-6">
            My Resume
          </h1>

          {/* Embedded PDF Viewer */}
          <div className="w-full aspect-[4/3] mb-6 rounded-md overflow-hidden border border-slate/20">
            <iframe
              src="/Wala_Eddine_Boulebbina_Resume.pdf"
              className="w-full h-full"
              title="Resume PDF"
              loading="lazy"
            />
          </div>

          {/* Download Button */}
          <a
            href="/Wala_Eddine_Boulebbina_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light/50 hover:bg-navy-light/70 text-slate-light rounded-md border border-slate/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  )
}
