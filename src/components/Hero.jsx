import { LuArrowRight, LuMessageCircle, LuShieldCheck, LuStar, LuWrench } from 'react-icons/lu'
import { whatsappLink } from '../data/site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1920&q=80'

const STATS = [
  { icon: LuWrench, value: '15+', label: 'Anos de experiência' },
  { icon: LuStar, value: '4,9', label: 'Avaliação no Google' },
  { icon: LuShieldCheck, value: '90 dias', label: 'De garantia nos serviços' },
]

function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden bg-graphite">
      {/* Imagem de fundo escurecida */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/85 to-black/40" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Oficina mecânica especializada em São Paulo
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.05] text-title sm:text-6xl lg:text-7xl">
            Cuidado de confiança para o <span className="text-primary">seu veículo</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-text sm:text-xl">
            Manutenção preventiva e corretiva, troca de óleo, freios, suspensão e diagnóstico eletrônico com
            equipe certificada, peças de qualidade e orçamento transparente — sem surpresas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-lg font-semibold text-black shadow-xl shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              <LuMessageCircle className="size-6" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-7 py-4 text-lg font-semibold text-title transition hover:border-primary hover:text-primary"
            >
              Conheça nossos serviços
              <LuArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <Icon className="size-8 shrink-0 text-primary" />
              <div>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-bold text-title">{value}</dd>
                <dd className="text-sm text-text-muted">{label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
