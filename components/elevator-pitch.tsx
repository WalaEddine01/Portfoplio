"use client"

export default function ElevatorPitch() {
  return (
    <div className="bg-navy-light/30 rounded-lg border border-slate/5 overflow-hidden h-full flex flex-col">
      <div className="p-3 border-b border-slate/5">
        <h3 className="text-sm font-medium text-slate-light">Elevator Pitch</h3>
      </div>

      <div className="relative flex-grow bg-navy-dark/50 p-4">
        <div className="aspect-[9/16] w-full max-w-[250px] mx-auto">
          <div className="relative w-full h-0 pb-[177.78%]">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Elevator Pitch"
              className="absolute top-0 left-0 w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="text-xs text-slate text-center mt-4">Watch my 30-second introduction</p>
      </div>
    </div>
  )
}

