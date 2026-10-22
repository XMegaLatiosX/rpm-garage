import { LuQuote, LuStar } from 'react-icons/lu'
import SectionTitle from './SectionTitle'

const TESTIMONIALS = [
  {
    name: 'Carlos Henrique',
    car: 'VW Gol 1.6',
    text: 'Levei meu Gol com um barulho na suspensão que ninguém achava. Em uma manhã resolveram, me mostraram as peças trocadas e o preço foi exatamente o combinado.',
  },
  {
    name: 'Fernanda Lima',
    car: 'Chevrolet Onix',
    text: 'Atendimento impecável! Me mandaram fotos de tudo pelo WhatsApp durante a revisão. Finalmente uma oficina em que confio de verdade.',
  },
  {
    name: 'Roberto Alves',
    car: 'Fiat Strada',
    text: 'Uso a picape para trabalhar e não posso ficar parado. Fizeram freios e troca de óleo no mesmo dia, com garantia. Recomendo de olhos fechados.',
  },
  {
    name: 'Juliana Martins',
    car: 'Hyundai HB20',
    text: 'A luz da injeção acendeu e fiquei preocupada. O diagnóstico foi rápido, explicaram tudo com paciência e o carro voltou perfeito.',
  },
  {
    name: 'Marcos Pereira',
    car: 'Toyota Corolla',
    text: 'Faço todas as revisões aqui há 5 anos. Equipe honesta, ambiente limpo e organizado. Nunca tive dor de cabeça.',
  },
  {
    name: 'Patrícia Souza',
    car: 'Renault Kwid',
    text: 'Alinhamento e balanceamento muito bem feitos, o volante parou de puxar na hora. Preço justo e café fresquinho na espera!',
  },
]

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          description="A satisfação dos nossos clientes é o motor que nos move. Veja o que dizem sobre a RPM Garagem."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, car, text }) => (
            <figure
              key={name}
              className="relative flex flex-col rounded-2xl border border-white/5 bg-container p-8 transition hover:border-primary/30"
            >
              <LuQuote className="absolute top-6 right-6 size-10 text-primary/15" />
              <div className="flex gap-1 text-primary" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }, (_, i) => (
                  <LuStar key={i} className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-text">“{text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-black">
                  {initials(name)}
                </span>
                <span>
                  <span className="block font-semibold text-title">{name}</span>
                  <span className="block text-sm text-text-muted">{car}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
