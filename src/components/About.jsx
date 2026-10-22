import { LuAward, LuCheck, LuCog, LuHandshake } from 'react-icons/lu'
import SectionTitle from './SectionTitle'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80'

const FEATURES = [
  {
    icon: LuAward,
    title: 'Profissionais Certificados',
    description: 'Mecânicos treinados e atualizados constantemente com as tecnologias das montadoras.',
  },
  {
    icon: LuCog,
    title: 'Equipamentos Modernos',
    description: 'Scanners, elevadores e máquinas de alinhamento de última geração para diagnósticos precisos.',
  },
  {
    icon: LuHandshake,
    title: 'Transparência e Honestidade',
    description: 'Orçamento detalhado antes de qualquer serviço e as peças trocadas são devolvidas a você.',
  },
]

const CHECKLIST = [
  'Orçamento sem compromisso',
  'Garantia de 90 dias',
  'Peças originais ou de 1ª linha',
  'Fotos e vídeos do serviço',
]

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-graphite py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Imagem */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-24 w-24 stripe-accent rounded-lg opacity-80" />
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-container sm:aspect-4/3 lg:aspect-4/5">
            <img
              src={ABOUT_IMAGE}
              alt="Mecânico realizando manutenção em um veículo"
              loading="lazy"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent" />
          </div>
          <div className="absolute -right-2 -bottom-6 rounded-2xl bg-primary p-6 text-black shadow-2xl sm:right-6">
            <p className="font-display text-5xl font-bold leading-none">+8 mil</p>
            <p className="mt-1 font-semibold">veículos atendidos</p>
          </div>
        </div>

        {/* Conteúdo */}
        <div>
          <SectionTitle
            align="left"
            eyebrow="Por que a RPM Garagem"
            title="Paixão por motores, compromisso com você"
            description="Desde 2010 cuidamos dos carros das famílias paulistanas com a mesma atenção que daríamos ao nosso. Aqui você entende o que está sendo feito e por quê."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-text">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <LuCheck className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-5">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 rounded-xl border border-white/5 bg-container/60 p-5 transition hover:border-primary/30"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-black">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-title">{title}</h3>
                  <p className="mt-1 text-text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
