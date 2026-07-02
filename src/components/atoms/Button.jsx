// Button: um unico componente que serve para <a> e <button>, com variantes.
// Centralizar aqui garante que todo botao do site tenha o mesmo comportamento.
const variants = {
  primary:
    'bg-navy-900 text-ivory hover:bg-navy-800 shadow-card hover:shadow-card-hover',
  accent:
    'bg-amber-500 text-navy-950 hover:bg-amber-400 shadow-card hover:shadow-card-hover',
  outline:
    'border border-navy-300 text-navy-900 hover:border-navy-900 hover:bg-navy-50',
  ghost: 'text-navy-700 hover:text-navy-900 hover:bg-navy-50',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Tag = as
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium
        transition-all duration-200 focus:outline-none focus-visible:ring-2
        focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory
        ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
