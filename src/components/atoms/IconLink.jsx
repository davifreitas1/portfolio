// IconLink: link circular com icone, usado para redes sociais.
export default function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full
        border border-navy-200 text-navy-700 transition-all duration-200
        hover:border-navy-900 hover:bg-navy-900 hover:text-ivory
        focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
    >
      {children}
    </a>
  )
}
