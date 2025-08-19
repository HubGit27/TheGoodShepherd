'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}