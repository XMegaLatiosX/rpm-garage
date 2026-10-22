import { LuArrowRight, LuCarFront, LuCpu, LuDisc3, LuDroplet, LuGauge, LuWrench } from 'react-icons/lu'
import { whatsappLink } from '../data/site'
import SectionTitle from './SectionTitle'

const SERVICES = [
  {
    icon: LuWrench,
    title: 'Mecânica Geral',
    description: 'Revisões completas, motor, câmbio, embreagem e arrefecimento com diagnóstico preciso.',
  },
  {
    icon: LuDroplet,
    title: 'Troca de Óleo',
    description: 'Óleos e filtros das melhores marcas, seguindo a especificação do fabricante do seu carro.',
  },
  {
    icon: LuDisc3,
    title: 'Freios',
    description: 'Pastilhas, discos, fluido e sistema ABS revisados para sua segurança em qualquer situação.',
  },
  {
    icon: LuCarFront,
    title: 'Suspensão',
    description: 'Amortecedores, molas, buchas e pivôs para um rodar firme, confortável e sem ruídos.',
  },
  {
    icon: LuGauge,
    title: 'Alinhamento e Balanceamento',
    description: 'Equipamento computadorizado 3D que evita desgaste irregular dos pneus e vibrações.',
  },
  {
    icon: LuCpu,
    title: 'Injeção Eletrônica',
    description: 'Scanner automotivo de última geração para leitura de falhas, limpeza de bicos e ajustes.',
  },
]

function Services() {
  return (
    <section id="servicos" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="O que fazemos"
          title="Nossos serviços"
          description="Tudo o que o seu veículo precisa em um só lugar, com garantia e atendimento personalizado."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-container p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-black">
                <Icon className="size-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-title">{title}</h3>
              <p className="mt-3 text-text-muted">{description}</p>
              <a
                href={whatsappLink(`Olá! Gostaria de um orçamento para o serviço: ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Solicitar orçamento
                <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
