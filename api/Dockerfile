FROM node
WORKDIR /app
COPY package.json .

RUN npm install

COPY dist .
COPY wait-for-it.sh .
COPY start-script.sh .
COPY prisma ./prisma/

RUN npx prisma generate

CMD node app.js