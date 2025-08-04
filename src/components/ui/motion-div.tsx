'use client'

import { motion } from 'framer-motion'

interface MotionDivProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function MotionDiv({ children, delay = 0, className }: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
