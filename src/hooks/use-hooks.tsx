"use client"

import { useEffect, useState, useRef } from "react"

// Intersection Observer Hook
export function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        // Check if ref.current is not null before calling unobserve
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isInView] as const
}

// Smooth Counter Hook
export function useCounter(end: number, duration = 2000, start = 0, isInView: boolean) {
  const [count, setCount] = useState(start)
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * (end - start) + start))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [end, duration, start, isInView])

  return ref
}

// Typewriter Effect Hook
export function useTypewriter(text: string, speed = 50, isInView: boolean) {
  const [displayText, setDisplayText] = useState("")
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isInView) {
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, speed)

      return () => clearInterval(timer)
    }
  }, [text, speed, isInView])

  return [ref, displayText] as const
}