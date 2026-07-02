import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react'
import Container from '../atoms/Container'
import Button from '../atoms/Button'
import IconLink from '../atoms/IconLink'
import { profile, contact } from '../../data/content'

// Hero: primeira dobra. Apresentacao, posicionamento e chamadas de acao.
export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Fundo decorativo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-navy-100/60 blur-3xl" />
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Texto */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-200
            bg-white/60 px-4 py-1.5 text-sm text-navy-700">
            <MapPin size={15} className="text-amber-600" />
            {profile.localizacao}
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-navy-900 sm:text-6xl lg:text-7xl">
            {profile.nome}
          </h1>

          <p className="mt-4 text-lg font-medium text-amber-600 sm:text-xl">
            {profile.cargo}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-700/85">
            {profile.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button as="a" href="#projetos" variant="primary" size="lg">
              Ver projetos <ArrowDown size={18} />
            </Button>
            <Button as="a" href="#contato" variant="outline" size="lg">
              Entrar em contato
            </Button>

            <div className="flex items-center gap-3 sm:ml-2">
              <IconLink href={contact.linkedin} label="LinkedIn de Davi Freitas">
                <Linkedin size={20} />
              </IconLink>
              <IconLink href={contact.github} label="GitHub de Davi Freitas">
                <Github size={20} />
              </IconLink>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="relative mx-auto animate-fade-up lg:mx-0">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-navy-900 to-navy-700 opacity-95" />
          <div className="absolute -bottom-5 -right-5 -z-10 h-28 w-28 rounded-2xl bg-amber-500/90" />
          <img
            src={profile.fotoPerfil}
            alt={`Foto de ${profile.nome}`}
            className="relative h-80 w-72 rounded-[1.6rem] object-cover shadow-card-hover sm:h-96 sm:w-80"
          />
        </div>
      </Container>
    </section>
  )
}
