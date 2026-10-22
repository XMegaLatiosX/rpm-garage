// Dados centrais da oficina — edite aqui para personalizar o template.
export const SITE = {
  name: 'RPM Garagem',
  phone: '(11) 3456-7890',
  phoneHref: 'tel:+551134567890',
  whatsapp: '5511987654321',
  whatsappDisplay: '(11) 98765-4321',
  email: 'contato@rpmgaragem.com.br',
  address: {
    street: 'Av. dos Mecânicos, 1250',
    district: 'Vila Mariana',
    city: 'São Paulo - SP',
    zip: '04101-000',
  },
  hours: [
    { days: 'Segunda a Sexta', time: '08h às 18h' },
    { days: 'Sábado', time: '08h às 13h' },
    { days: 'Domingo e Feriados', time: 'Fechado' },
  ],
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function whatsappLink(message = 'Olá! Gostaria de agendar um orçamento na RPM Garagem.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}
