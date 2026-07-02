import Container from '../atoms/Container'
import SectionTitle from '../atoms/SectionTitle'
import ProjectCard from '../molecules/ProjectCard'
import { projects } from '../../data/content'

// Projects: vitrine de projetos em grade responsiva.
export default function Projects() {
  return (
    <section id="projetos" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Portfolio"
          titulo={projects.titulo}
          subtitulo={projects.subtitulo}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.itens.map((p) => (
            <ProjectCard key={p.nome} projeto={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}
