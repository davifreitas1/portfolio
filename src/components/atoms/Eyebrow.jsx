// Eyebrow: rotulo curto em maiusculas que antecede os titulos de secao.
export default function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase
      tracking-[0.18em] text-amber-600">
      <span className="h-px w-6 bg-amber-500" aria-hidden="true" />
      {children}
    </span>
  )
}
