# Étape 1 : Base
FROM node:18-alpine AS base
WORKDIR /app

# Étape 2 : Dépendances
COPY package*.json ./
RUN npm install

# Étape 3 : Développement
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]