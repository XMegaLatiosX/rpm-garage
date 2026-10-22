import { useEffect, useState } from 'react'
import { LuCalendarCheck, LuMenu, LuX } from 'react-icons/lu'
import { NAV_LINKS, whatsappLink } from '../data/site'
import Logo from './Logo'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-white/10 bg-graphite/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-medium text-text transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-black shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-hover lg:inline-flex"
        >
          <LuCalendarCheck className="size-5" />
          Agendar Orçamento
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-title transition hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <LuX className="size-7" /> : <LuMenu className="size-7" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-white/10 transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-96 border-t' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium text-text transition hover:bg-white/5 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-black"
            >
              <LuCalendarCheck className="size-5" />
              Agendar Orçamento
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
