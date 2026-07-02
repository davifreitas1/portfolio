# Como publicar no GitHub Pages

Guia passo a passo. Voce faz isso uma vez; depois, cada atualizacao vai para o ar sozinha.

> Observacao importante: o GitHub Pages hospeda **arquivos estaticos**, ele nao roda o container Docker nem o servidor React. O Docker aqui serve so para desenvolver na sua maquina. Para publicar, o GitHub gera o build estatico (a pasta `dist`) e serve esses arquivos. Isso ja esta tudo configurado; voce so precisa seguir os passos abaixo.

---

## Passo 1 - Criar o repositorio no GitHub

1. Acesse https://github.com/new
2. De um nome ao repositorio (ex.: `portfolio`).
3. Deixe **publico** (o GitHub Pages gratuito exige repositorio publico).
4. **Nao** marque nenhuma opcao de inicializar com README/gitignore (o projeto ja tem os seus).
5. Clique em **Create repository**.

Anote a URL que aparece, algo como:
`https://github.com/SEU-USUARIO/portfolio.git`

---

## Passo 2 - Enviar o projeto para o GitHub

Abra o terminal **na pasta do projeto** e rode, um comando por vez (troque a URL pela sua):

```bash
git init
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```

Se o Git pedir login, use sua conta do GitHub (ou um token de acesso pessoal).

---

## Passo 3 - Ativar o GitHub Pages

1. No repositorio, va em **Settings** (Configuracoes).
2. No menu lateral, clique em **Pages**.
3. Em **Build and deployment**, no campo **Source**, escolha **GitHub Actions**.

Pronto. Nao precisa escolher branch nem pasta; o workflow que ja esta no projeto (`.github/workflows/deploy.yml`) cuida do resto.

---

## Passo 4 - Aguardar a publicacao

1. Va na aba **Actions** do repositorio.
2. Voce vera um workflow chamado **"Deploy no GitHub Pages"** rodando. Espere ficar verde (uns 1 a 2 minutos).
3. Quando terminar, o endereco do site aparece em **Settings > Pages**, no formato:

   `https://SEU-USUARIO.github.io/portfolio/`

Esse e o link do seu portfolio. Pode colocar no LinkedIn, no curriculo, onde quiser.

---

## Como atualizar o site depois

Toda vez que quiser mudar algo (editar `src/data/content.js`, trocar uma foto, etc.), rode:

```bash
git add .
git commit -m "Atualiza conteudo"
git push
```

O GitHub detecta o push, refaz o build e republica sozinho. Em 1 a 2 minutos as mudancas estao no ar.

---

## Alternativa - Publicar pela linha de comando (sem Actions)

Se preferir publicar manualmente, o projeto ja tem o pacote `gh-pages` configurado. Com o repositorio ja no GitHub, rode:

```bash
npm install
npm run deploy
```

Isso gera o build e envia para uma branch `gh-pages`. Nesse caso, em **Settings > Pages > Source**, escolha **Deploy from a branch** e selecione a branch `gh-pages` / pasta `/ (root)`.

Use uma das duas abordagens (Actions **ou** `gh-pages`), nao as duas ao mesmo tempo. A recomendada e a de **GitHub Actions** (Passos 3 e 4), porque publica automatico a cada push.
