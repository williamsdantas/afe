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
RUN npm install


# Etapa final para servir os arquivos estáticos com NGINX
FROM nginx:alpine

# Copiar arquivos do build para o NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Expor porta padrão do NGINX
EXPOSE 80

# Comando para iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
