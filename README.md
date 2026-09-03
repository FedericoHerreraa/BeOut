# BeOut — Landing Page

Landing page de presentación / pre-lanzamiento para **BeOut**, una app de iOS que le pone fricción real a las redes sociales: bloquea las apps que elijas y solo te deja entrar si esperás el tiempo que definiste o resolvés un desafío breve (quiz, escribir una frase a mano, poner el teléfono boca abajo, caminar unos pasos).

Esta landing **no es la app** — es una página de una sola sección (single page) pensada para mostrarle la propuesta a clientes/usuarios antes del lanzamiento. El copy, tono y dirección visual completos están en [`BeOut_landing_brief.md`](./BeOut_landing_brief.md).

## Estado actual

Es una **maqueta 100% frontend**, sin backend ni persistencia de datos — se usa como demo para mostrarle el proyecto a los clientes. Los botones de "lista de espera" todavía no capturan datos reales. Está planeado sumar backend más adelante (waitlist real, autenticación, etc.), pero no es parte de este entregable por ahora.

## Stack

- **React 19** + **TypeScript**
- **Vite** (con el compilador de React vía Babel/Rolldown)
- **Tailwind CSS v4**
- **GSAP** + `ScrollTrigger` para las animaciones de scroll (reveals, galería con pin, sección "Cómo funciona" pineada)
- **Lenis** para el smooth scroll general del sitio, sincronizado con GSAP ScrollTrigger (ver `src/SmoothScroll.tsx`)
- **Motion** (ex Framer Motion) para micro-interacciones (hover/tap en botones y tarjetas)
- **shadcn/ui** sobre `@base-ui/react` para componentes base (botones, etc.)

## Requisitos

- Node.js 20 o superior
- npm

## Instalación y uso

```bash
npm install       # instala dependencias
npm run dev       # levanta el servidor de desarrollo (Vite)
npm run build     # type-checks (tsc) y genera el build de producción
npm run preview   # sirve el build de producción localmente
npm run lint      # corre ESLint
```

## Estructura del proyecto

```
src/
  App.tsx                 # armado de la landing: Nav, Hero, secciones, Footer
  ComoFuncionaPinned.tsx  # sección "Cómo funciona" con scroll pineado (GSAP)
  Galeria.tsx             # carrusel horizontal pineado con fotos
  Reveal.tsx              # wrapper que anima hijos al entrar en viewport
  SmoothScroll.tsx        # setup de Lenis (smooth scroll) sincronizado con GSAP
  icons.tsx               # set de íconos SVG propios (hoja, piedra, gota, etc.)
  lib/utils.ts            # helper cn() (clsx + tailwind-merge)
  components/ui/          # componentes shadcn/ui
  index.css               # theming, paleta de colores y fuentes
public/                   # favicon e imágenes de la galería
BeOut_landing_brief.md    # brief de diseño y copy del proyecto
```

## Paleta y diseño

La paleta actual (tonos tierra/marrón — variables `--cream`, `--sand`, `--stone`, `--moss`, `--forest`, `--bark` en `src/index.css`) es la definida para el proyecto; no se debe reemplazar por verdes u otros tonos salvo pedido explícito.
