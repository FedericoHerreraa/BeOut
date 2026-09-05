'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Reveal } from '@/components/Reveal'
import { ComoFuncionaPinned } from '@/components/ComoFuncionaPinned'
import { SmoothScroll } from '@/components/SmoothScroll'
import {
  LeafIcon,
  StoneIcon,
  SunIcon,
  FootprintsIcon,
  PencilIcon,
  SproutQuestionIcon,
  PhoneDownIcon,
  ArrowRightIcon,
} from '@/components/icons'

function Nav() {
  return (
    <div className="sticky top-4 z-20 px-4">
      <header className="mx-auto flex max-w-2xl items-center justify-between rounded-full border border-[var(--stone)]/70 bg-[var(--cream)]/90 px-5 py-2.5 shadow-[0_1px_2px_rgba(53,49,42,0.06)] backdrop-blur-sm">
        <div className="flex items-center gap-2 text-[var(--ink)]">
          <img src="/beout-icono.png" alt="" className="h-7 w-7" />
          <span className="text-lg" style={{ fontFamily: 'var(--serif)' }}>
            BeOut
          </span>
        </div>
        <motion.a
          href="#cierre"
          className="rounded-full bg-[var(--moss)] px-4 py-1.5 text-sm text-[var(--cream)] transition-colors hover:bg-[var(--moss-dark)]"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          Sumate
        </motion.a>
      </header>
    </div>
  )
}

function Wave({ color, flip }: { color: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="block w-full"
      style={{ height: 48, transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <path
        d="M0,0 C220,52 460,52 720,28 C980,4 1220,4 1440,42 L1440,0 L0,0 Z"
        style={{ fill: color }}
      />
    </svg>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: 'var(--stone)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-20 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{ background: 'var(--sand)' }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--sand)] px-4 py-1.5 text-sm text-[var(--ink-soft)]">
          <SunIcon className="h-4 w-4 text-[var(--bark)]" />
          Para iPhone
        </p>
        <h1 className="reveal reveal-delay-1 text-4xl leading-[1.15] sm:text-6xl sm:leading-[1.1]">
          No te prohibimos el celular.
          <br />
          Le ponemos un poco de <em className="italic text-[var(--moss-dark)]">fricción</em>.
        </h1>
        <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-lg text-[var(--ink-soft)]">
          BeOut bloquea las apps que más se te van de las manos y solo te deja
          entrar si esperás el tiempo que vos definiste, o resolvés un
          desafío breve. Nada de candados imposibles: solo un segundo para
          decidir si de verdad querés entrar.
        </p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            href="#cierre"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--moss)] px-7 py-3 text-base text-[var(--cream)] shadow-sm transition-colors hover:bg-[var(--moss-dark)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Sumate a la lista de espera
            <motion.span
              className="flex"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </motion.span>
          </motion.a>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 px-4 py-3 text-base text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  )
}

function Problema() {
  return (
    <section className="bg-[var(--sand)] px-6 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl">Abrís el teléfono. Y ya estás ahí.</h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)]">
          No es que decidas scrollear: el dedo ya sabe el camino antes de que
          pienses. Diez minutos se convierten en cuarenta, y ni te diste
          cuenta en qué momento pasó. No es falta de voluntad — es que el
          camino es demasiado fácil.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[var(--ink-soft)]">
          Ya probaste los límites de pantalla nativos. Duran hasta que
          tocás "saltar" sin pensarlo. BeOut está pensado para ese
          instante exacto.
        </p>
      </Reveal>
    </section>
  )
}

const comoFuncionaSteps = [
  {
    title: 'Elegís qué apps bloquear',
    text: 'Vos decidís: Instagram, TikTok, X, o las que más te distraigan. Podés sumar o sacar apps de la lista cuando quieras.',
    chips: ['Sin límite de apps', 'Sumás o sacás cuando quieras', 'Se ajusta en segundos'],
  },
  {
    title: 'Se bloquean con la pantalla nativa de iOS',
    text: 'Usamos las herramientas de Apple, sin trucos raros de por medio. Nada de perfiles ni permisos invasivos: es Screen Time, prolijo.',
    chips: ['Sin perfiles', 'Sin permisos invasivos', '100% Screen Time'],
  },
  {
    title: 'Si querés entrar antes, resolvés un desafío',
    text: 'Breve y a propósito: te saca del piloto automático un segundo. Vos elegís qué tipo de desafío te toca para cada app.',
    chips: ['Un quiz corto', 'Escribir una frase', 'Teléfono boca abajo', 'Caminar unos pasos'],
  },
  {
    title: 'Se desbloquea, por el tiempo que definiste',
    text: 'Entrás con intención, no por reflejo. Después vuelve a cerrarse solo, sin que tengas que acordarte de nada.',
    chips: ['5 min', '15 min', '30 min', 'lo que definas'],
  },
]

const desafioCardStyles = [
  { size: 'w-64 sm:w-56', tilt: 'sm:-rotate-3', shift: 'sm:translate-y-3' },
  { size: 'w-64 sm:w-64', tilt: 'sm:rotate-2', shift: 'sm:-translate-y-2' },
  { size: 'w-64 sm:w-60', tilt: 'sm:-rotate-2', shift: 'sm:translate-y-5' },
  { size: 'w-64 sm:w-52', tilt: 'sm:rotate-3', shift: 'sm:-translate-y-1' },
]

function Desafios() {
  const challenges = [
    { icon: SproutQuestionIcon, title: 'Un quiz corto', text: 'Un par de preguntas simples que te hacen pensar antes de entrar.' },
    { icon: PencilIcon, title: 'Escribir una frase a mano', text: 'Copiás una frase sin errores, con el dedo o el teclado, despacio.' },
    { icon: PhoneDownIcon, title: 'Poner el teléfono boca abajo', text: 'Lo dejás quieto un rato. A veces alcanza con eso.' },
    { icon: FootprintsIcon, title: 'Caminar cierta cantidad de pasos', text: 'Te movés un poco antes de volver a la pantalla.' },
  ]

  return (
    <section id="desafios" className="overflow-hidden bg-[var(--sand)] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl sm:text-4xl">Los desafíos</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            No son una traba arbitraria. Son un segundo para salir del
            piloto automático.
          </p>
        </Reveal>
        <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-7">
          {challenges.map((c, i) => {
            const style = desafioCardStyles[i]
            return (
              <div
                key={c.title}
                className={`${style.size} ${style.tilt} ${style.shift} rounded-[28px] bg-[var(--cream)] p-7 text-center shadow-[0_20px_45px_-22px_rgba(56,36,23,0.4)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
              >
                <c.icon className="mx-auto h-6 w-6 text-[var(--moss-dark)]" />
                <h3 className="mt-4 text-xl">{c.title}</h3>
                <p className="mt-2 text-[var(--ink-soft)]">{c.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PorQueDistinto() {
  return (
    <section>
      <Wave color="var(--sand)" />
      <div className="px-6 py-16" style={{ background: 'var(--forest)' }}>
        <Reveal className="mx-auto grid max-w-5xl items-center gap-12 py-4 sm:grid-cols-2 sm:py-8" stagger={0.2}>
          <div>
            <h2 className="text-3xl text-[var(--cream)] sm:text-4xl">
              Por qué es <em className="italic">distinto</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--cream)]/75">
              Los límites nativos de pantalla son fáciles de saltear: un toque
              en "ignorar" y listo, seguís como si nada. BeOut no promete un
              bloqueo indestructible — promete que el camino fácil deja de ser
              tan fácil.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--cream)]/75">
              El desbloqueo te cuesta un esfuerzo real, sin que sea una
              tortura. Suficiente fricción para que decidas con la cabeza, no
              con el reflejo.
            </p>
          </div>
          <div className="rounded-[32px] border border-[var(--cream)]/15 bg-[var(--cream)]/[0.06] p-10">
            <div className="flex items-start gap-4">
              <StoneIcon className="mt-1 h-6 w-6 shrink-0 text-[var(--cream)]/60" />
              <p className="text-[var(--cream)]/75">
                <span className="text-[var(--cream)]">Límites nativos:</span>{' '}
                un botón para saltearlos, sin fricción real.
              </p>
            </div>
            <div className="my-6 h-px bg-[var(--cream)]/15" />
            <div className="flex items-start gap-4">
              <LeafIcon className="mt-1 h-6 w-6 shrink-0 text-[var(--cream)]" />
              <p className="text-[var(--cream)]/75">
                <span className="text-[var(--cream)]">BeOut:</span> un
                desafío breve que te hace parar y elegir.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <Wave color="var(--sand)" flip />
    </section>
  )
}

function Planes() {
  return (
    <section id="planes">
      <div className="bg-[var(--sand)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl">Planes</h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              Empezá gratis. Si te sirve, seguís con todo desbloqueado.
            </p>
          </Reveal>
          <Reveal className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.15}>
            <motion.div
              className="rounded-[28px] border border-[var(--stone)]/70 bg-[var(--cream)] p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <h3 className="text-2xl">Gratis</h3>
              <p className="mt-2 text-[var(--ink-soft)]">
                Bloqueá hasta 2 apps y probá cómo se siente.
              </p>
              <p className="mt-6 text-3xl">$0</p>
            </motion.div>
            <motion.div
              className="rounded-[28px] border border-[var(--moss)]/40 bg-[var(--cream)] p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <h3 className="text-2xl">Completo</h3>
              <p className="mt-2 text-[var(--ink-soft)]">
                Todas las apps que quieras, todos los desafíos.
              </p>
              <p className="mt-6 text-[var(--ink-soft)]">
                Mensual, anual o pago único — vos elegís.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
      <Wave color="var(--cream)" />
    </section>
  )
}

function CierreCTA() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Poné un email válido.')
      return
    }
    setError('')
    setStatus('submitting')
    // Todavía no hay backend: esto es una maqueta para mostrar el flujo.
    window.setTimeout(() => setStatus('success'), 500)
  }

  return (
    <section id="cierre" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: 'var(--sand)' }}
      />
      <motion.div
        className="relative mx-auto max-w-lg text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl leading-[1.1] sm:text-6xl">
          Cuando quieras, probá <em className="italic text-[var(--moss-dark)]">BeOut</em>.
        </h2>
        <p className="mt-6 text-lg text-[var(--ink-soft)] sm:text-xl">
          Sin apuro. Dejanos tu email y te avisamos apenas esté lista.
        </p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-9 rounded-[28px] border border-[var(--moss)]/30 bg-[var(--sand)]/60 px-6 py-8"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              >
                <LeafIcon className="mx-auto h-6 w-6 text-[var(--moss-dark)]" />
              </motion.div>
              <p className="mt-3 text-lg text-[var(--ink)]">
                Listo, ya estás en la lista. Te escribimos apenas abramos.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                placeholder="tu@email.com"
                aria-label="Tu email"
                className="w-full max-w-xs rounded-full border-2 border-[var(--stone)] bg-[var(--sand)] px-5 py-3.5 text-base text-[var(--ink)] shadow-sm outline-none transition-colors placeholder:text-[var(--ink-soft)] focus:border-[var(--moss)] focus:bg-[var(--cream)] sm:w-72"
              />
              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--moss)] px-8 py-3.5 text-base text-[var(--cream)] shadow-md transition-colors hover:bg-[var(--moss-dark)] disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sumándote…' : 'Sumate a la lista de espera'}
                <ArrowRightIcon className="h-4 w-4" />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3 text-sm text-[var(--ink-soft)] italic"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

function Faq() {
  const items = [
    {
      q: '¿Se puede saltear el bloqueo igual?',
      a: 'Con esfuerzo, sí — no prometemos un candado infranqueable. La idea es que el camino fácil deje de serlo, no ponerte una pared imposible.',
    },
    {
      q: '¿El desafío es siempre el mismo?',
      a: 'No. Vos elegís qué tipo de desafío querés para cada app: un quiz, escribir una frase, poner el teléfono boca abajo o caminar unos pasos.',
    },
    {
      q: '¿Puedo cambiar de opinión y desbloquear todo?',
      a: 'Sí, en cualquier momento podés ajustar qué apps bloqueás o sacarlas de la lista. Esto es para ayudarte, no para encerrarte.',
    },
    {
      q: '¿Cuántas apps puedo bloquear en el plan gratis?',
      a: 'Dos apps, sin costo. Si más adelante querés bloquear todas las que quieras, podés pasarte al plan completo cuando te sirva.',
    },
  ]

  return (
    <section id="faq" className="bg-[var(--sand)] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl sm:text-4xl">Preguntas frecuentes</h2>
        <Reveal className="mt-12 flex flex-col gap-3" stagger={0.08}>
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-3xl border border-[var(--stone)]/70 bg-[var(--cream)] px-6 py-5 open:pb-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-[var(--ink)] marker:content-none">
                {item.q}
                <span className="shrink-0 text-[var(--moss-dark)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[var(--ink-soft)]">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  const columns = [
    {
      title: 'Producto',
      links: [
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Los desafíos', href: '#desafios' },
        { label: 'Planes', href: '#planes' },
        { label: 'Preguntas frecuentes', href: '#faq' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'Escribinos', href: 'mailto:[TU EMAIL DE CONTACTO]' },
        { label: 'Sumate a la lista de espera', href: '#cierre' },
      ],
    },
  ]

  return (
    <footer className="px-6 pt-16 pb-8" style={{ background: 'var(--forest)' }}>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 text-center sm:grid-cols-[1.3fr_1fr_1fr] sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 text-[var(--cream)]">
              <img src="/beout-icono.png" alt="" className="h-7 w-7" />
              <span style={{ fontFamily: 'var(--serif)' }} className="text-lg">
                BeOut
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--cream)]/70">
              Le ponemos un poco de fricción a las apps que más se te van de
              las manos. Para iPhone.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm tracking-wide text-[var(--cream)] uppercase">{col.title}</h3>
              <ul className="mt-4 flex flex-col items-center gap-3 sm:items-start">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--cream)]/70 transition-colors hover:text-[var(--cream)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 h-px bg-[var(--cream)]/15" />

        <div className="mt-6 flex flex-col items-center gap-4 text-sm text-[var(--cream)]/60 sm:flex-row sm:justify-between">
          <p>&copy; {year} BeOut. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--cream)]/90">
              Privacidad
            </a>
            <a href="#" className="hover:text-[var(--cream)]/90">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Wave color="var(--sand)" />
        <ComoFuncionaPinned steps={comoFuncionaSteps} />
        <Wave color="var(--sand)" flip />
        <Desafios />
        <PorQueDistinto />
        <Planes />
        <CierreCTA />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
