"use client"

export default function ElevatorPitch() {
  return (
    <div className="bg-navy-light/30 rounded-lg border border-slate/5 overflow-hidden h-full flex flex-col shadow-sm">
      {/*<div className="p-3 border-b border-slate/5 bg-[#1e1e1e]">
        <h3 className="text-sm font-medium text-slate-light text-center">Who am I?</h3>
      </div>*/}
      <div className="relative flex-grow bg-[#1a1a1a] p-4">
        <div className="aspect-[9/16] w-full max-w-[250px] mx-auto">
          <div className="relative w-full h-0 pb-[177.78%]">
            <iframe
              /*src=""*/
              title="Who am I?"
              className="absolute top-0 left-0 w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

