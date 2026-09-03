import './App.css'
import { Reveal } from './Reveal'
import { ComoFuncionaPinned } from './ComoFuncionaPinned'
import {
  LeafIcon,
  StoneIcon,
  DropIcon,
  SunIcon,
  FootprintsIcon,
  PencilIcon,
  SproutQuestionIcon,
  PhoneDownIcon,
  ChoosePathIcon,
  ShieldSoftIcon,
  ArrowRightIcon,
} from './icons'

function Nav() {
  return (
    <div className="sticky top-4 z-20 px-4">
      <header className="mx-auto flex max-w-2xl items-center justify-between rounded-full border border-[var(--stone)]/70 bg-[var(--cream)]/90 px-5 py-2.5 shadow-[0_1px_2px_rgba(53,49,42,0.06)] backdrop-blur-sm">
        <div className="flex items-center gap-2 text-[var(--ink)]">
          <LeafIcon className="h-5 w-5 text-[var(--moss)]" />
          <span className="text-lg" style={{ fontFamily: 'var(--serif)' }}>
            BeOut
          </span>
        </div>
        <a
          href="#cierre"
          className="rounded-full bg-[var(--moss)] px-4 py-1.5 text-sm text-[var(--cream)] transition-colors hover:bg-[var(--moss-dark)]"
        >
          Sumate
        </a>
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
          <a
            href="#cierre"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--moss)] px-7 py-3 text-base text-[var(--cream)] shadow-sm transition-colors hover:bg-[var(--moss-dark)]"
          >
            Sumate a la lista de espera
            <ArrowRightIcon className="h-4 w-4" />
          </a>
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
    icon: ChoosePathIcon,
    title: 'Elegís qué apps bloquear',
    text: 'Vos decidís: Instagram, TikTok, X, o las que más te distraigan.',
  },
  {
    icon: ShieldSoftIcon,
    title: 'Se bloquean con la pantalla nativa de iOS',
    text: 'Usamos las herramientas de Apple, sin trucos raros de por medio.',
  },
  {
    icon: SproutQuestionIcon,
    title: 'Si querés entrar antes, resolvés un desafío',
    text: 'Breve y a propósito: te saca del piloto automático un segundo.',
  },
  {
    icon: DropIcon,
    title: 'Se desbloquea, por el tiempo que definiste',
    text: 'Entrás con intención, no por reflejo. Después, vuelve a cerrarse.',
  },
]

function Desafios() {
  const challenges = [
    { icon: SproutQuestionIcon, title: 'Un quiz corto', text: 'Un par de preguntas simples que te hacen pensar antes de entrar.' },
    { icon: PencilIcon, title: 'Escribir una frase a mano', text: 'Copiás una frase sin errores, con el dedo o el teclado, despacio.' },
    { icon: PhoneDownIcon, title: 'Poner el teléfono boca abajo', text: 'Lo dejás quieto un rato. A veces alcanza con eso.' },
    { icon: FootprintsIcon, title: 'Caminar cierta cantidad de pasos', text: 'Te movés un poco antes de volver a la pantalla.' },
  ]

  return (
    <section className="bg-[var(--sand)] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl sm:text-4xl">Los desafíos</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            No son una traba arbitraria. Son un segundo para salir del
            piloto automático.
          </p>
        </Reveal>
        <Reveal className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.12}>
          {challenges.map((c, i) => (
            <div
              key={c.title}
              className="rounded-[28px] border border-[var(--stone)]/70 bg-[var(--cream)] p-7"
              style={{ marginTop: i % 2 === 1 ? '1.25rem' : 0 }}
            >
              <c.icon className="h-6 w-6 text-[var(--moss-dark)]" />
              <h3 className="mt-4 text-xl">{c.title}</h3>
              <p className="mt-2 text-[var(--ink-soft)]">{c.text}</p>
            </div>
          ))}
        </Reveal>
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
    <section id="planes" className="bg-[var(--sand)] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl sm:text-4xl">Planes</h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Empezá gratis. Si te sirve, seguís con todo desbloqueado.
          </p>
        </Reveal>
        <Reveal className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.15}>
          <div className="rounded-[28px] border border-[var(--stone)]/70 bg-[var(--cream)] p-8">
            <h3 className="text-2xl">Gratis</h3>
            <p className="mt-2 text-[var(--ink-soft)]">
              Bloqueá hasta 2 apps y probá cómo se siente.
            </p>
            <p className="mt-6 text-3xl">$0</p>
          </div>
          <div className="rounded-[28px] border border-[var(--moss)]/40 bg-[var(--cream)] p-8">
            <h3 className="text-2xl">Completo</h3>
            <p className="mt-2 text-[var(--ink-soft)]">
              Todas las apps que quieras, todos los desafíos.
            </p>
            <p className="mt-6 text-[var(--ink-soft)]">
              Mensual, anual o pago único — vos elegís.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CierreCTA() {
  return (
    <section id="cierre" className="px-6 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <LeafIcon className="mx-auto h-8 w-8 text-[var(--moss)]" />
        <h2 className="mt-6 text-3xl sm:text-4xl">
          Cuando quieras, probá BeOut.
        </h2>
        <p className="mt-5 text-lg text-[var(--ink-soft)]">
          Sin apuro. Es una app pensada para acompañarte a recuperar tu
          tiempo, a tu ritmo.
        </p>
        <a
          href="#"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--moss)] px-8 py-3.5 text-base text-[var(--cream)] shadow-sm transition-colors hover:bg-[var(--moss-dark)]"
        >
          Sumate a la lista de espera
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </Reveal>
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
    <section className="bg-[var(--sand)] px-6 py-20 sm:py-28">
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
  return (
    <footer className="px-6 py-14" style={{ background: 'var(--forest)' }}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 text-[var(--cream)]">
          <LeafIcon className="h-5 w-5" />
          <span style={{ fontFamily: 'var(--serif)' }} className="text-lg">
            BeOut
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--cream)]/70">
          <a href="mailto:[TU EMAIL DE CONTACTO]" className="hover:text-[var(--cream)]">
            Contacto
          </a>
          <a href="#" className="hover:text-[var(--cream)]">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Nav />
      <main>
        <Hero />
        <Problema />
        <ComoFuncionaPinned steps={comoFuncionaSteps} />
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
