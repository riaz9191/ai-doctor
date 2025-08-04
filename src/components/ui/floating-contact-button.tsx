'use client'

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FloatingContactButton() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Link href="https://wa.me/01940403069" target="_blank" rel="noopener noreferrer">
      <Button
        size="icon"
        className={`fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-all duration-300 ${
          isScrolled ? "-translate-y-16" : "translate-y-0"
        }`}
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </Link>
  )
}
