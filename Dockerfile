# Ambiente de desenvolvimento em container.
# Sobe o servidor Vite com hot-reload dentro do Docker, sem precisar
# instalar Node na sua maquina.
FROM node:20-alpine

WORKDIR /app

# Copia os manifests primeiro para aproveitar o cache de camadas do Docker:
# so reinstala dependencias quando package.json muda.
COPY package*.json ./
RUN npm install

# Copia o restante do codigo.
COPY . .

EXPOSE 5173

# --host expoe o servidor para fora do container.
CMD ["npm", "run", "dev"]
