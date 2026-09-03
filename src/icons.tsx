type IconProps = { className?: string }

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14Z" />
      <path d="M5 19c1.5-4 4-7 8-9" />
    </svg>
  )
}

export function StoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 15.5c0-3 3-5 5.5-6 2-.8 3-2.5 5-3 3-.7 6.5 1.3 6.5 5 0 4-4 7.5-9.5 7.5-4 0-7.5-1.5-7.5-3.5Z" />
      <path d="M8 12.5c1.5-.8 3-.8 4.5 0" />
    </svg>
  )
}

export function DropIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5c3 4 6 8 6 11.5a6 6 0 1 1-12 0c0-3.5 3-7.5 6-11.5Z" />
    </svg>
  )
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3v2.2M12 18.8V21M4.4 4.4l1.6 1.6M18 18l1.6 1.6M3 12h2.2M18.8 12H21M4.4 19.6 6 18M18 6l1.6-1.6" />
    </svg>
  )
}

export function FootprintsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 4.5c1.7 0 3 1.6 3 4s-1 4.5-3 4.5-3-2-3-4.5 1.3-4 3-4Z" />
      <path d="M16.5 10.5c1.7 0 3 1.6 3 4s-1 4.5-3 4.5-3-2-3-4.5 1.3-4 3-4Z" />
      <path d="M6.7 13.5c.5 1.2.2 2.4-.6 3.2M17.2 19.5c.5 1.2.2 2.4-.6 3.2" />
    </svg>
  )
}

export function PencilIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 4.5 19 9l-9.5 9.5-5 1 1-5 9-10Z" />
      <path d="M13 6l4.5 4.5" />
    </svg>
  )
}

export function SproutQuestionIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3 2.5-4.5 5.5-4.5-.3 3-2.5 4.5-5.5 4.5Z" />
      <path d="M12 13c0-2.5-2-4-4.5-4 .2 2.5 2 4 4.5 4Z" />
      <circle cx="12" cy="6.2" r="0.2" fill="currentColor" stroke="none" />
      <path d="M11.2 4.8a1 1 0 1 1 1.5.9c-.4.3-.7.6-.7 1.1" />
    </svg>
  )
}

export function PhoneDownIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="3.5" width="10" height="17" rx="2" />
      <path d="M10 6.2h4" />
    </svg>
  )
}

export function ChoosePathIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="12" r="2.3" />
      <path d="M8.3 12h3.7M12 12c2-3 4-3 5.5-3M12 12c2 3 4 3 5.5 3" />
      <circle cx="18.3" cy="9" r="1.6" />
      <circle cx="18.3" cy="15" r="1.6" />
    </svg>
  )
}

export function ShieldSoftIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5Z" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}
