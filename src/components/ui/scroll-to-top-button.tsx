"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    setScrollProgress(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-8 transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      <button
        onClick={scrollToTop}
        className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-400/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-110 transition-all duration-300"
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-white/20"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="text-white"
            strokeDasharray={`${scrollProgress}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
      </button>
    </div>
  )
}
