import { Code2, Server, BarChart3, Boxes, Calculator, Users, Sparkles } from 'lucide-react'
import Tag from '../atoms/Tag'

// Mapa de icones disponiveis para os grupos de competencia.
// Importamos apenas os que usamos (em vez da biblioteca inteira) para manter
// o bundle leve. Para usar um novo icone, importe-o acima e adicione aqui.
const ICONES = { Code2, Server, BarChart3, Boxes, Calculator, Users }

// SkillCard: cartao de um grupo de competencias.
export default function SkillCard({ nome, icone, itens }) {
  const Icon = ICONES[icone] || Sparkles
  return (
    <div className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card
      transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl
        bg-navy-900 text-amber-400 transition-colors group-hover:bg-navy-800">
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">{nome}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {itens.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}
