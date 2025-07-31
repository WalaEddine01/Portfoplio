"use client"

import dynamic from "next/dynamic"

// Dynamically import CursorEffect with SSR disabled
const CursorEffect = dynamic(() => import("@/components/cursor-effect"), {
  ssr: false,
})

export default function ClientCursorEffect() {
  return <CursorEffect />
}
