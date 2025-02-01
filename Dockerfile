# Etapa de build
FROM node:16 AS build

# Image Information
LABEL maintener="wad.com" \
      author="Williams Alves Dantas" \
      create="2025/02/01" \
      version="1.0.0" \
      description="Imagem para o app Rick and Morty" \
      license="gpl-v3"
      
# Diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários
COPY package*.json ./
COPY rickandmorty /app/
RUN npm install --only=production

# Copiar os arquivos da build da etapa anterior
COPY --from=build /app/build /app/build

# Expor a porta 3000
EXPOSE 3000

# Rodar o servidor HTTP usando o Node.js
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
