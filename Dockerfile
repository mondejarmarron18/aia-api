# BUILD STAGE
FROM node:20.12.2-alpine AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# RUNTIME STAGE
FROM node:20.12.2-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY --from=build /usr/src/app/dist ./dist

CMD ["yarn", "start"]
