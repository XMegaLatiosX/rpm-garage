import { LuFacebook, LuInstagram, LuMapPin, LuMessageCircle, LuPhone } from 'react-icons/lu'
import { NAV_LINKS, SITE, whatsappLink } from '../data/site'
import Logo from './Logo'

const INSTITUTIONAL = [
  { href: '#sobre', label: 'Quem somos' },
  { href: '#', label: 'Política de Privacidade' },
  { href: '#', label: 'Termos de Uso' },
  { href: '#', label: 'Política de Garantia' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="h-2 stripe-accent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-text-muted">
            Oficina mecânica completa com atendimento honesto, equipe certificada e garantia em todos os serviços.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={SITE.social.instagram} label="Instagram" icon={LuInstagram} />
            <SocialLink href={SITE.social.facebook} label="Facebook" icon={LuFacebook} />
            <SocialLink href={whatsappLink()} label="WhatsApp" icon={LuMessageCircle} />
          </div>
        </div>

        <FooterColumn title="Navegação" links={NAV_LINKS} />
        <FooterColumn title="Institucional" links={INSTITUTIONAL} />

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-title">Fale conosco</h3>
          <ul className="mt-4 space-y-3 text-text-muted">
            <li className="flex gap-3">
              <LuMapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                {SITE.address.street}, {SITE.address.district} — {SITE.address.city}
              </span>
            </li>
            <li>
              <a href={SITE.phoneHref} className="flex gap-3 transition hover:text-primary">
                <LuPhone className="size-5 shrink-0 text-primary" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition hover:text-primary"
              >
                <LuMessageCircle className="size-5 shrink-0 text-primary" />
                {SITE.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} {SITE.name}. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-title">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-text-muted transition hover:text-primary">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-lg bg-container text-text transition hover:bg-primary hover:text-black"
    >
      <Icon className="size-5" />
    </a>
  )
}

export default Footer
