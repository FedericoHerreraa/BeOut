import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay between direct children, in seconds. */
  stagger?: number
}

/**
 * Fades its direct children up into place, once, as the block scrolls
 * into view. Slow and understated on purpose — no bounce, no repeat.
 */
export function Reveal({ children, className, stagger = 0.15 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        opacity: 0,
        y: 32,
        duration: 1.1,
        ease: 'power2.out',
        stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
