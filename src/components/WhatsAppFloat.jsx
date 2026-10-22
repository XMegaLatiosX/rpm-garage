import { LuMessageCircle } from 'react-icons/lu'
import { whatsappLink } from '../data/site'

function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/40 transition hover:scale-110 hover:bg-whatsapp-hover"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30" />
      <LuMessageCircle className="relative size-7" />
    </a>
  )
}

export default WhatsAppFloat
