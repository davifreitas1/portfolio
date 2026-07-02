import { useState } from 'react'
import { ExternalLink, Github, ImageOff, Maximize2 } from 'lucide-react'
import Tag from '../atoms/Tag'
import Button from '../atoms/Button'
import Lightbox from './Lightbox'

// ProjectCard: cartao rico de projeto. As miniaturas trocam a imagem principal;
// clicar na imagem abre o lightbox em tela cheia para ver o projeto com nitidez.
export default function ProjectCard({ projeto }) {
  const { nome, tipo, resumo, papel, tags, imagens = [], links = {} } = projeto
  const [ativa, setAtiva] = useState(0)
  const [ampliada, setAmpliada] = useState(false)
  const temImagens = imagens.length > 0

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-navy-100
      bg-white shadow-card transition-all duration-300 hover:shadow-card-hover">
      {/* Imagem principal (clicavel para ampliar) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-50">
        {temImagens ? (
          <button
            type="button"
            onClick={() => setAmpliada(true)}
            aria-label={`Ampliar imagem de ${nome}`}
            className="group h-full w-full cursor-zoom-in"
          >
            <img
              src={imagens[ativa]}
              alt={`${nome} - visual ${ativa + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Dica de ampliar */}
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full
              bg-navy-950/80 px-3 py-1.5 text-xs font-medium text-ivory opacity-0
              backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
              <Maximize2 size={13} /> Ampliar
            </span>
          </button>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-navy-300">
            <ImageOff size={40} />
          </div>
        )}
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-900/90 px-3 py-1
          text-xs font-medium text-ivory backdrop-blur">
          {tipo}
        </span>
      </div>

      {/* Miniaturas (so aparecem com mais de uma imagem) */}
      {imagens.length > 1 && (
        <div className="flex gap-2 border-b border-navy-50 px-5 py-3">
          {imagens.map((img, i) => (
            <button
              key={i}
              onClick={() => setAtiva(i)}
              aria-label={`Ver imagem ${i + 1} de ${nome}`}
              className={`h-12 w-16 overflow-hidden rounded-md ring-2 transition
                ${i === ativa ? 'ring-amber-500' : 'ring-transparent opacity-70 hover:opacity-100'}`}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Conteudo */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold text-navy-900">{nome}</h3>
        <p className="mt-1 text-sm font-medium text-amber-600">{papel}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/85">{resumo}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {(links.demo || links.repo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.demo && (
              <Button as="a" href={links.demo} target="_blank" rel="noopener noreferrer"
                variant="accent" size="md">
                Ver projeto <ExternalLink size={16} />
              </Button>
            )}
            {links.repo && (
              <Button as="a" href={links.repo} target="_blank" rel="noopener noreferrer"
                variant="outline" size="md">
                <Github size={16} /> Codigo
              </Button>
            )}
          </div>
        )}
      </div>

      {ampliada && (
        <Lightbox
          imagens={imagens}
          index={ativa}
          titulo={nome}
          onClose={() => setAmpliada(false)}
          onChange={setAtiva}
        />
      )}
    </article>
  )
}
