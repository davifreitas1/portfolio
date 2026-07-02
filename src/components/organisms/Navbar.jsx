import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../atoms/Container'
import Button from '../atoms/Button'
import { navItems, profile, mailtoLink } from '../../data/content'

// Navbar: fixa no topo, ganha fundo solido ao rolar e vira menu no mobile.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-ivory/90 shadow-sm backdrop-blur' : 'bg-transparent'}`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Marca */}
        <a href="#topo" className="flex items-center gap-2 font-display text-lg font-semibold text-navy-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-amber-400">
            DF
          </span>
          <span className="hidden sm:inline">{profile.nome}</span>
        </a>

        {/* Navegacao desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-underline text-sm font-medium text-navy-700 transition-colors hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
          <Button as="a" href={mailtoLink()} variant="primary" size="md">
            Fale comigo
          </Button>
        </nav>

        {/* Botao mobile */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 md:hidden"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Menu mobile */}
      {aberto && (
        <div className="border-t border-navy-100 bg-ivory md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50"
              >
                {item.label}
              </a>
            ))}
            <Button
              as="a"
              href={mailtoLink()}
              variant="primary"
              size="md"
              className="mt-2"
              onClick={() => setAberto(false)}
            >
              Fale comigo
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
