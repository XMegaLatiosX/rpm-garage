import { LuGauge } from 'react-icons/lu'

function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`group flex items-center gap-2 ${className}`} aria-label="RPM Garagem — início">
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-black transition-transform group-hover:rotate-12">
        <LuGauge className="size-6" />
      </span>
      <span className="font-display text-2xl font-bold uppercase leading-none tracking-wide text-title">
        RPM <span className="text-primary">Garagem</span>
      </span>
    </a>
  )
}

export default Logo
