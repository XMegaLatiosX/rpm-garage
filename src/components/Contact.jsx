import { useState } from 'react'
import { LuCircleCheck, LuClock, LuMail, LuMapPin, LuMessageCircle, LuPhone, LuSend } from 'react-icons/lu'
import { SITE, whatsappLink } from '../data/site'
import SectionTitle from './SectionTitle'

const SERVICE_OPTIONS = [
  'Revisão / Mecânica Geral',
  'Troca de Óleo',
  'Freios',
  'Suspensão',
  'Alinhamento e Balanceamento',
  'Injeção Eletrônica',
  'Outro',
]

const INITIAL_FORM = { name: '', phone: '', car: '', service: SERVICE_OPTIONS[0], message: '' }

const inputClass =
  'w-full rounded-lg border border-white/10 bg-graphite px-4 py-3 text-title placeholder:text-text-muted/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    const value = field === 'phone' ? formatPhone(e.target.value) : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = [
      'Olá! Gostaria de uma simulação de orçamento:',
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      `*Veículo:* ${form.car}`,
      `*Serviço:* ${form.service}`,
      form.message && `*Detalhes:* ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
    setForm(INITIAL_FORM)
  }

  const { address } = SITE

  return (
    <section id="contato" className="bg-graphite py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contato"
          title="Solicite seu orçamento"
          description="Preencha o formulário e receba uma estimativa pelo WhatsApp, ou fale direto com a nossa equipe."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/5 bg-container p-6 sm:p-8 lg:col-span-3"
          >
            <h3 className="font-display text-2xl font-semibold uppercase text-title">Simulação de orçamento</h3>
            <p className="mt-1 text-text-muted">Retornamos em até 1 hora no horário comercial.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-text">Nome completo *</span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Seu nome"
                  autoComplete="name"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-text">WhatsApp / Telefone *</span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="(11) 90000-0000"
                  autoComplete="tel"
                  minLength={14}
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-text">Veículo (modelo e ano) *</span>
                <input
                  required
                  type="text"
                  value={form.car}
                  onChange={update('car')}
                  placeholder="Ex.: VW Gol 2018"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-text">Serviço desejado</span>
                <select value={form.service} onChange={update('service')} className={inputClass}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-text">Descreva o problema (opcional)</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Ex.: barulho ao frear, luz da injeção acesa..."
                  className={`${inputClass} resize-none`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-lg font-semibold text-black transition hover:bg-primary-hover sm:w-auto"
            >
              <LuSend className="size-5" />
              Enviar pelo WhatsApp
            </button>

            {sent && (
              <p role="status" className="mt-4 flex items-center gap-2 text-sm text-whatsapp">
                <LuCircleCheck className="size-5" />
                Pronto! Finalize o envio da mensagem no WhatsApp que acabou de abrir.
              </p>
            )}
          </form>

          {/* Informações */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-whatsapp px-6 py-4 font-semibold text-white transition hover:bg-whatsapp-hover"
              >
                <LuMessageCircle className="size-6" />
                Chamar no WhatsApp
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-primary px-6 py-4 font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                <LuPhone className="size-6" />
                Ligar {SITE.phone}
              </a>
            </div>

            <div className="space-y-6 rounded-2xl border border-white/5 bg-container p-6 sm:p-8">
              <InfoItem icon={LuMapPin} title="Endereço">
                {address.street} — {address.district}
                <br />
                {address.city}, CEP {address.zip}
              </InfoItem>
              <InfoItem icon={LuClock} title="Horário de funcionamento">
                <ul className="space-y-1">
                  {SITE.hours.map(({ days, time }) => (
                    <li key={days} className="flex justify-between gap-4">
                      <span>{days}</span>
                      <span className={time === 'Fechado' ? 'text-secondary' : 'text-title'}>{time}</span>
                    </li>
                  ))}
                </ul>
              </InfoItem>
              <InfoItem icon={LuMail} title="E-mail">
                <a href={`mailto:${SITE.email}`} className="transition hover:text-primary">
                  {SITE.email}
                </a>
              </InfoItem>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/5">
              <iframe
                title="Mapa de localização da RPM Garagem"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${address.street}, ${address.city}`)}&output=embed`}
                className="h-56 w-full grayscale invert-[0.9] contrast-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div className="flex-1 text-text-muted">
        <h4 className="mb-1 font-semibold text-title">{title}</h4>
        {children}
      </div>
    </div>
  )
}

export default Contact
