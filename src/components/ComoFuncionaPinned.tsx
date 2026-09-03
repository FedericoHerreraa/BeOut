'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Step = {
  icon: ComponentType<{ className?: string }>
  title: string
  text: string
}

const PX_PER_STEP = 550

export function ComoFuncionaPinned({ steps }: { steps: Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<HTMLDivElement[]>([])
  const dotsRef = useRef<HTMLSpanElement[]>([])
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const panels = panelsRef.current
      const dots = dotsRef.current

      gsap.set(panels.slice(1), { autoAlpha: 0, y: 18 })
      gsap.set(panels[0], { autoAlpha: 1, y: 0 })
      gsap.set(dots.slice(1), { backgroundColor: 'var(--stone)' })
      gsap.set(dots[0], { backgroundColor: 'var(--moss)' })
      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: 'top' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${(panels.length - 1) * PX_PER_STEP}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            gsap.set(lineRef.current, { scaleY: self.progress })
          },
        },
      })

      panels.forEach((panel, i) => {
        if (i === 0) return
        const at = i - 1
        tl.to(panels[i - 1], { autoAlpha: 0, y: -18, duration: 0.4 }, at)
          .to(dots[i - 1], { backgroundColor: 'var(--stone)', duration: 0.3 }, at)
          .to(panel, { autoAlpha: 1, y: 0, duration: 0.4 }, at + 0.05)
          .to(dots[i], { backgroundColor: 'var(--moss)', duration: 0.3 }, at + 0.05)
      })
    }, section)

    return () => ctx.revert()
  }, [reducedMotion, steps.length])

  if (reducedMotion) {
    return (
      <section id="como-funciona" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl">Cómo funciona</h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              Cuatro pasos simples, sin configuración complicada.
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-4 bg-zinc-200 h-full w-full">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--sand)] text-[var(--moss-dark)]">
                  <step.icon className="h-5 w-5" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--moss)] text-[11px] text-[var(--cream)]">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-2 text-[var(--ink-soft)]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="como-funciona" ref={sectionRef} className="relative px-6">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center py-20">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-3xl sm:text-4xl">Cómo funciona</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Cuatro pasos simples. Scrolleá despacio.
          </p>
        </div>
        <div className="grid items-center gap-10 sm:grid-cols-[220px_1fr]">
          <div className="relative flex gap-6 sm:flex-col sm:gap-8">
            <div
              aria-hidden
              className="absolute top-1 bottom-1 left-1 hidden w-px bg-[var(--stone)] sm:block"
            >
              <div
                ref={lineRef}
                className="h-full w-full bg-[var(--moss)]"
                style={{ transform: 'scaleY(0)' }}
              />
            </div>
            {steps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-3 sm:pl-6">
                <span
                  ref={(el) => {
                    if (el) dotsRef.current[i] = el
                  }}
                  className="h-2.5 w-2.5 shrink-0 rounded-full sm:absolute sm:left-0"
                  style={{ background: 'var(--stone)' }}
                />
                <span className="text-sm text-[var(--ink-soft)]">Paso {i + 1}</span>
              </div>
            ))}
          </div>
          <div className="relative h-80 sm:h-64">
            {steps.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => {
                  if (el) panelsRef.current[i] = el
                }}
                className="absolute inset-0 flex flex-col justify-center rounded-[32px] border border-[var(--stone)]/50 bg-[var(--sand)] p-8 shadow-[0_24px_60px_-24px_rgba(56,36,23,0.35)] sm:p-10"
              >
                <step.icon className="h-8 w-8 text-[var(--moss-dark)]" />
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-3 max-w-sm text-lg text-[var(--ink-soft)]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
