"use client"
import picshadow from "@/public/picShadow.png"

export default function ElevatorPitch() {
  return (
    <div className="">
      {/*<div className="p-3 border-b border-slate/5 bg-[#1e1e1e]">
        <h3 className="text-sm font-medium text-slate-light text-center">Who am I?</h3>
      </div>*/}
      <div className="relative flex-grow bg-[#1a1a1a] p-4">
        <div className="aspect-[9/10] w-full max-w-[160px] sm:max-w-[200px] lg:max-w-[250px] mx-auto">
          <div className="relative w-full h-0 pb-[177.78%] translate-y-[-8%] translate-x-[19%]">
            <img
              src={picshadow.src}
              alt="picshadow"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

