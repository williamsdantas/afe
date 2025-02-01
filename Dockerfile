# Etapa 1: Construção da aplicação
FROM node:18 AS build

# Image Information
LABEL maintener="wad.com" \
      author="Williams Alves Dantas" \
      create="2025/02/01" \
      version="1.0.0" \
      description="Imagem para o app Rick and Morty" \
      license="gpl-v3"

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Copiar arquivos necessários
COPY package*.json ./
COPY rickandmorty /app/
RUN npm install 

# Rodar o build da aplicação React
RUN cd /app/rickandmorty \
    && npm run build

# Etapa 2: Execução da aplicação com Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar apenas o necessário para execução em produção
COPY package*.json ./
COPY --from=build /app/build ./build

# Instalar apenas as dependências necessárias para produção
RUN npm ci --omit=dev

# Expor a porta 3000
EXPOSE 3000

# Rodar o servidor com serve
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
