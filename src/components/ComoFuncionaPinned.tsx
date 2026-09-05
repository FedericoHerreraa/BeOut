'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { StepVisual } from './icons'

gsap.registerPlugin(ScrollTrigger)

type Step = {
  title: string
  text: string
  chips: string[]
}

const PX_PER_STEP = 550

export function ComoFuncionaPinned({ steps }: { steps: Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<HTMLDivElement[]>([])
  const dotsRef = useRef<HTMLSpanElement[]>([])
  const labelsRef = useRef<HTMLSpanElement[]>([])
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mq.matches)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const panels = panelsRef.current
      const dots = dotsRef.current
      const labels = labelsRef.current

      gsap.set(panels.slice(1), { autoAlpha: 0, y: 36, scale: 0.92 })
      gsap.set(panels[0], { autoAlpha: 1, y: 0, scale: 1 })
      gsap.set(dots.slice(1), { backgroundColor: 'rgba(247,236,217,0.25)', scale: 1 })
      gsap.set(dots[0], { backgroundColor: 'var(--cream)', scale: 1.5 })
      gsap.set(labels.slice(1), { color: 'rgba(247,236,217,0.55)' })
      gsap.set(labels[0], { color: 'var(--cream)' })
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${(panels.length - 1) * PX_PER_STEP}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            gsap.set(lineRef.current, { scaleX: self.progress })
          },
        },
      })

      panels.forEach((panel, i) => {
        if (i === 0) return
        const at = i - 1
        tl.to(panels[i - 1], { autoAlpha: 0, y: -36, scale: 0.92, duration: 0.4 }, at)
          .to(dots[i - 1], { backgroundColor: 'rgba(247,236,217,0.25)', scale: 1, duration: 0.3 }, at)
          .to(labels[i - 1], { color: 'rgba(247,236,217,0.55)', duration: 0.3 }, at)
          .fromTo(
            panel,
            { autoAlpha: 0, y: 36, scale: 0.92 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
            at + 0.05,
          )
          .to(dots[i], { backgroundColor: 'var(--cream)', scale: 1.5, duration: 0.3 }, at + 0.05)
          .to(labels[i], { color: 'var(--cream)', duration: 0.3 }, at + 0.05)
      })
    }, section)

    return () => ctx.revert()
  }, [reducedMotion, steps.length])

  if (reducedMotion) {
    return (
      <section id="como-funciona" className="px-6 py-20 sm:py-28" style={{ background: 'var(--forest)' }}>
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-5xl leading-[1.05] text-[var(--cream)] sm:text-7xl">
              Cómo <em className="italic">funciona</em>
            </h2>
            <p className="mt-5 text-lg text-[var(--cream)]/75">
              Cuatro pasos simples, sin configuración complicada.
            </p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--cream)]/15 text-[var(--cream)]"
                  style={{ fontFamily: 'var(--serif)' }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl text-[var(--cream)] sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-[var(--cream)]/75">{step.text}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[var(--cream)]/20 bg-[var(--cream)]/10 px-3 py-1 text-sm text-[var(--cream)]/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="relative px-6"
      style={{ background: 'var(--forest)' }}
    >
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center px-0 pt-20 pb-16 sm:pt-24">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl leading-[1.05] text-[var(--cream)] sm:text-7xl">
            Cómo <em className="italic">funciona</em>
          </h2>
          <p className="mt-5 text-lg text-[var(--cream)]/75">
            Cuatro pasos simples. Scrolleá despacio (por última vez).
          </p>
        </div>

        <div className="relative mt-16 flex items-start gap-5 sm:mt-20 sm:gap-10">
          <div aria-hidden className="absolute top-[5px] right-1 left-1 h-px bg-[var(--cream)]/20">
            <div
              ref={lineRef}
              className="h-full w-full bg-[var(--cream)]"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center gap-2">
              <span
                ref={(el) => {
                  if (el) dotsRef.current[i] = el
                }}
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: 'rgba(247,236,217,0.25)' }}
              />
              <span
                ref={(el) => {
                  if (el) labelsRef.current[i] = el
                }}
                className="text-sm"
                style={{ color: 'rgba(247,236,217,0.55)' }}
              >
                Paso {i + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-14 w-full max-w-4xl sm:mt-16">
          <div className="relative h-[34rem] sm:h-[36rem]">
            {steps.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => {
                  if (el) panelsRef.current[i] = el
                }}
                className="absolute inset-0 flex flex-col items-center gap-6 rounded-[32px] border border-[var(--cream)]/15 bg-[var(--cream)]/[0.06] p-8 text-center shadow-[0_28px_70px_-20px_rgba(0,0,0,0.5)] sm:flex-row sm:gap-14 sm:p-16 sm:text-left"
              >
                <StepVisual
                  step={i as 0 | 1 | 2 | 3}
                  className="h-52 w-28 shrink-0 text-[var(--cream)]/80 drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)] sm:h-[26rem] sm:w-[14.5rem]"
                />
                <div className="min-w-0 flex-1 sm:self-start sm:pt-8">
                  <h3 className="min-h-[4.5rem] text-3xl leading-[1.15] text-[var(--cream)] sm:min-h-[5.5rem] sm:text-4xl">{step.title}</h3>
                  <p className="mt-10 text-lg text-[var(--cream)]/75 sm:mt-16 sm:text-xl">{step.text}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {step.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[var(--cream)]/20 bg-[var(--cream)]/10 px-4 py-1.5 text-sm text-[var(--cream)]/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
