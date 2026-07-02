import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Lightbox: mostra a imagem em tela cheia, nitida, para o leitor ver o projeto
// em detalhe. Fecha com Esc ou clique no fundo; setas navegam entre as imagens.
export default function Lightbox({ imagens, index, titulo, onClose, onChange }) {
  const total = imagens.length
  const multiplas = total > 1

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (multiplas && e.key === 'ArrowRight') onChange((index + 1) % total)
      if (multiplas && e.key === 'ArrowLeft') onChange((index - 1 + total) % total)
    }
    document.addEventListener('keydown', onKey)
    // Trava o scroll do fundo enquanto o lightbox esta aberto.
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, total, multiplas, onClose, onChange])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/92 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Imagens do projeto ${titulo}`}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full
          bg-white/10 text-ivory transition hover:bg-white/20"
      >
        <X size={22} />
      </button>

      {multiplas && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onChange((index - 1 + total) % total)
          }}
          aria-label="Imagem anterior"
          className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full
            bg-white/10 text-ivory transition hover:bg-white/20 sm:left-6"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <figure className="flex max-h-full max-w-full flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={imagens[index]}
          alt={`${titulo} - imagem ${index + 1} de ${total}`}
          className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="text-sm text-navy-200">
          {titulo}
          {multiplas && <span className="ml-2 text-navy-300">{index + 1} / {total}</span>}
        </figcaption>
      </figure>

      {multiplas && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onChange((index + 1) % total)
          }}
          aria-label="Proxima imagem"
          className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full
            bg-white/10 text-ivory transition hover:bg-white/20 sm:right-6"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  )
}
