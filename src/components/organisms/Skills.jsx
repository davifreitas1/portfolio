import { Sparkles } from 'lucide-react'
import Container from '../atoms/Container'
import SectionTitle from '../atoms/SectionTitle'
import SkillCard from '../molecules/SkillCard'
import { skills } from '../../data/content'

// Skills: grade das stacks tecnicas. Os diferenciais (contabilidade, lideranca)
// aparecem numa faixa discreta abaixo, sem competir com o que e tecnico.
export default function Skills() {
  return (
    <section id="competencias" className="bg-sand py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="O que eu faco"
          titulo={skills.titulo}
          subtitulo={skills.subtitulo}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.grupos.map((g) => (
            <SkillCard key={g.nome} nome={g.nome} icone={g.icone} itens={g.itens} />
          ))}
        </div>

        {skills.diferencial && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-navy-100
            bg-white/60 px-6 py-5">
            <Sparkles size={20} className="mt-0.5 shrink-0 text-amber-600" />
            <p className="text-sm leading-relaxed text-navy-700/90">{skills.diferencial}</p>
          </div>
        )}
      </Container>
    </section>
  )
}
