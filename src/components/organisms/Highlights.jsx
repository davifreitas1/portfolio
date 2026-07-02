import { Trophy, Users, Rocket, Sparkles } from 'lucide-react'
import Container from '../atoms/Container'
import { highlights } from '../../data/content'

// Mapa de icones usados nos destaques (import pontual mantem o bundle leve).
const ICONES = { Trophy, Users, Rocket }

// Highlights: poucas conquistas de peso, em cartoes, sobre fundo escuro para dar
// contraste visual na pagina. Substitui a antiga linha do tempo longa.
export default function Highlights() {
  return (
    <section id="destaques" className="bg-navy-950 py-20 text-ivory sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase
            tracking-[0.18em] text-amber-400">
            <span className="h-px w-6 bg-amber-400" aria-hidden="true" />
            Percurso
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            {highlights.titulo}
          </h2>
          {highlights.subtitulo && (
            <p className="mt-3 text-base leading-relaxed text-navy-200">{highlights.subtitulo}</p>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.itens.map((item) => {
            const Icon = ICONES[item.icone] || Sparkles
            return (
              <article
                key={item.titulo}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7
                  transition-colors duration-200 hover:border-amber-400/50 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-navy-950">
                  <Icon size={24} strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ivory">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{item.descricao}</p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
