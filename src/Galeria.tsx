import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Reveal } from './Reveal'

gsap.registerPlugin(ScrollTrigger)

const sourcePhotos = [
  {
    src: '/marius-teodorescu-xslCaoa7BcY-unsplash.jpg',
    alt: 'Balcones de un edificio cubiertos de plantas',
  },
  {
    src: '/pascal-bullan-yHYFrUDwhMo-unsplash.jpg',
    alt: 'Un parque con pasto alto frente a un edificio',
  },
  {
    src: '/shawn-rain-mYfjiNuEcUI-unsplash.jpg',
    alt: 'Un puente de piedra entre árboles, con torres de fondo',
  },
]

// Repeat the set so there's enough slides to actually scroll through.
const slides = [...sourcePhotos, ...sourcePhotos]

export function Galeria() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<HTMLDivElement[]>([])
  const imgRefs = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const scrollDistance = () => Math.max(track.scrollWidth - section.clientWidth, 0)

      const master = gsap.to(track, {
        x: () => -scrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      slideRefs.current.forEach((slide, i) => {
        const img = imgRefs.current[i]
        if (!slide || !img) return

        gsap.fromTo(
          img,
          { left: '-18%' },
          {
            left: '0%',
            ease: 'none',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: master,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          },
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[var(--cream)] px-6 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl sm:text-4xl">También hay vida afuera</h2>
        <p className="mt-4 text-lg text-[var(--ink-soft)]">
          BeOut no es solo para mirar menos la pantalla. Es para que ese
          rato libre vuelva a ser tuyo.
        </p>
      </Reveal>

      <div ref={trackRef} className="mt-14 flex gap-6 will-change-transform">
        {slides.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            ref={(el) => {
              if (el) slideRefs.current[i] = el
            }}
            className="relative h-[54vh] w-[38vw] shrink-0 overflow-hidden rounded-[28px] shadow-xl sm:h-[62vh] sm:w-[25vw]"
          >
            <img
              ref={(el) => {
                if (el) imgRefs.current[i] = el
              }}
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-y-0 h-full w-[108%] object-cover"
              style={{ left: '-28%' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
