FROM node:alpine

COPY package.json /packages/package.json
COPY yarn.lock /packages/yarn.lock

RUN cd /packages && CI=true yarn && mkdir -p /app/backend && ln -s /packages/node_modules /app/backend/node_modules
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/backend/cloudvisionapikey.json
 
COPY . /app/backend
WORKDIR /app/backend
RUN npm rebuild

ENTRYPOINT [ "node", "index.js" ]
