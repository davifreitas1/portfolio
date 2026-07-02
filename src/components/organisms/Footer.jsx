import { Linkedin, Github, Mail } from 'lucide-react'
import Container from '../atoms/Container'
import IconLink from '../atoms/IconLink'
import { profile, contact, mailtoLink } from '../../data/content'

// Footer: rodape com marca, navegacao curta e redes.
export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="border-t border-navy-100 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-navy-900">{profile.nome}</p>
          <p className="text-sm text-navy-700/70">{profile.cargo}</p>
        </div>

        <div className="flex items-center gap-3">
          <IconLink href={contact.linkedin} label="LinkedIn">
            <Linkedin size={18} />
          </IconLink>
          <IconLink href={contact.github} label="GitHub">
            <Github size={18} />
          </IconLink>
          <IconLink href={mailtoLink()} label="E-mail">
            <Mail size={18} />
          </IconLink>
        </div>
      </Container>

      <Container className="mt-8 border-t border-navy-50 pt-6">
        <p className="text-center text-xs text-navy-700/60">
          &copy; {ano} {profile.nome}. Desenvolvido com React e Tailwind CSS.
        </p>
      </Container>
    </footer>
  )
}
