"use client"

import { useState, useEffect } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: `radial-gradient(300px at ${position.x}px ${position.y}px, rgba(176, 176, 176, 0.07), transparent 80%)`,
      }}
    />
  )
}

