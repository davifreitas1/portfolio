import Eyebrow from './Eyebrow'

// SectionTitle: cabecalho padrao de secao (eyebrow + titulo + subtitulo).
// Reune o padrao usado em todas as secoes num so lugar.
export default function SectionTitle({ eyebrow, titulo, subtitulo, centered = false }) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
        {titulo}
      </h2>
      {subtitulo && (
        <p className="mt-3 text-base leading-relaxed text-navy-700/80">{subtitulo}</p>
      )}
    </div>
  )
}
