FROM patrocinio/robinhood-node:latest AS build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY metadata.js server.js /usr/src/app

EXPOSE 8080
CMD ["npm", "start"]

#FROM build AS vulnscan
#COPY --from=aquasec/trivy:latest /usr/local/bin/trivy /usr/local/bin/trivy
#RUN trivy filesystem --exit-code 1 --no-progress --ignore-unfixed --severity CRITICAL /

