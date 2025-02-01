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
RUN npm install --only=production

# Rodar o build da aplicação React
RUN npm run build

# Etapa 2: Servir a aplicação com Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json novamente
COPY package*.json ./

# Instalar as dependências de produção
RUN npm install --only=production

# Copiar os arquivos da build da etapa anterior
COPY --from=build /app/build /app/build

# Expor a porta 3000
EXPOSE 3000

# Rodar o servidor HTTP usando o Node.js
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
