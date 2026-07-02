import { Mail, Linkedin, Github, MessageCircle, ArrowUpRight, Send } from 'lucide-react'
import Container from '../atoms/Container'
import Button from '../atoms/Button'
import { contact, mailtoLink } from '../../data/content'

// Contact: chamada final para contato, com os canais principais.
export default function Contact() {
  const canais = [
    { icone: Mail, label: 'E-mail', valor: contact.email, href: mailtoLink() },
    { icone: Linkedin, label: 'LinkedIn', valor: 'Vamos conectar', href: contact.linkedin },
    { icone: Github, label: 'GitHub', valor: 'Ver meu codigo', href: contact.github },
    contact.whatsapp && {
      icone: MessageCircle, label: 'WhatsApp', valor: 'Mandar mensagem', href: contact.whatsapp,
    },
  ].filter(Boolean)

  return (
    <section id="contato" className="py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 px-8 py-14 shadow-card-hover sm:px-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
              Contato
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl">
              Vamos conversar.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-100">{contact.cta}</p>

            <Button as="a" href={mailtoLink()} variant="accent" size="lg" className="mt-8">
              <Send size={18} /> Enviar e-mail
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {canais.map(({ icone: Icon, label, valor, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10
                  bg-white/5 p-5 transition-all duration-200 hover:border-amber-400/60 hover:bg-white/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-navy-950">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-navy-200">{label}</span>
                  <span className="block truncate font-medium text-ivory">{valor}</span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="ml-auto text-navy-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
