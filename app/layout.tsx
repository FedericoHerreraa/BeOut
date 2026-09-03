import type { Metadata } from 'next'
import 'lenis/dist/lenis.css'
import '../src/index.css'
import '../src/App.css'

export const metadata: Metadata = {
  title: 'BeOut',
  description:
    'BeOut bloquea las apps que más se te van de las manos y solo te deja entrar si esperás el tiempo que vos definiste, o resolvés un desafío breve.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
