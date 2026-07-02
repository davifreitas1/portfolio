// Tag: pequena etiqueta usada para tecnologias e categorias.
export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-navy-50 px-3 py-1
      text-xs font-medium text-navy-700 ring-1 ring-inset ring-navy-100">
      {children}
    </span>
  )
}
