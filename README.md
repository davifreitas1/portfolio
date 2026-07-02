# Portfolio - Davi Freitas

Landing page de portfolio pessoal. Desenvolvedor Web e Analista de Dados.

Feita com **React + Vite + Tailwind CSS**, seguindo **Atomic Design** (atoms, molecules, organisms, templates). O ambiente de desenvolvimento roda em **Docker**, e a publicacao e feita no **GitHub Pages**.

---

## Como rodar

### Opcao A - Com Docker (nao precisa instalar Node)

Pre-requisito: [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e aberto.

```bash
docker compose up
```

Depois abra **http://localhost:5173** no navegador. Alterar qualquer arquivo atualiza a pagina automaticamente. Para parar, `Ctrl+C` no terminal (ou `docker compose down`).

### Opcao B - Sem Docker (Node instalado)

Pre-requisito: Node.js 20+.

```bash
npm install
npm run dev
```

Acesse o endereco que o terminal mostrar (normalmente http://localhost:5173).

---

## Como editar o conteudo

Todo o texto, links e projetos ficam em um unico arquivo:

**`src/data/content.js`**

Procure pelos comentarios com a palavra `EDITAR`. E la que voce coloca os links reais de LinkedIn, GitHub, e-mail e os links dos projetos. Nao precisa mexer em nenhum componente.

---

## Estrutura (Atomic Design)

```
src/
  data/content.js         -> TODO o conteudo editavel
  components/
    atoms/                 -> pecas basicas (Button, Tag, Container...)
    molecules/             -> combinacoes (ProjectCard, SkillCard, StatCard)
    organisms/             -> secoes completas (Hero, About, Skills...)
    templates/             -> montagem da pagina (PortfolioPage)
  assets/                  -> imagens (perfil e projetos)
```

---

## Como publicar no GitHub Pages

Veja o passo a passo completo no arquivo **`DEPLOY.md`**.

Em resumo: existe um workflow automatico em `.github/workflows/deploy.yml` que faz o build e publica sozinho a cada `push` na branch `main`. Basta ativar o GitHub Pages nas configuracoes do repositorio (fonte: **GitHub Actions**).
