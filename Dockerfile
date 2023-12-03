FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

ENV DATABASE_URL=""
ENV GITHUB_CLIENT_ID=""
ENV GITHUB_CLIENT_SECRET=""
ENV NEXTAUTH_SECRET="secret"
ENV NEXTAUTH_URL="http://localhost:3000"

EXPOSE 3000

CMD [ "npm", "run" , "dev" ]