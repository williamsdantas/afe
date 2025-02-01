# Etapa 1: Construção da aplicação
FROM node:18 AS build

# Informações sobre a imagem
LABEL maintainer="wad.com" \
      author="Williams Alves Dantas" \
      created="2025/02/01" \
      version="1.0.0" \
      description="Imagem para o app Rick and Morty" \
      license="gpl-v3"

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários
COPY package*.json ./
COPY rickandmorty/ ./rickandmorty

# Instalar dependências
WORKDIR /app/rickandmorty
RUN npm install

# Gerar build do React
RUN npm run build

# Expor a porta 3000
EXPOSE 3000

# Rodar o servidor com serve
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
