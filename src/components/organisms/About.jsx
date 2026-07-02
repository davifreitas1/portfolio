import Container from '../atoms/Container'
import SectionTitle from '../atoms/SectionTitle'
import { about } from '../../data/content'

// About: secao "Sobre mim" com a narrativa e um cartao de fatos escaneaveis
// (o que um recrutador precisa saber em cinco segundos).
export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionTitle eyebrow="Quem sou eu" titulo={about.titulo} />
          <div className="mt-6 space-y-4">
            {about.paragrafos.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-navy-700/85">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:pt-4">
          <dl className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white p-2 shadow-card">
            {about.resumo.map((f) => (
              <div key={f.rotulo} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  {f.rotulo}
                </dt>
                <dd className="text-sm font-medium text-navy-900 sm:text-right">{f.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
