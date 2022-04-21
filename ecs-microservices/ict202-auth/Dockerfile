FROM mhart/alpine-node:14.15.0

WORKDIR /srv
ADD . .
RUN npm install typescript -g && npm install
COPY . .
RUN tsc && cp .env build/ && cp .env.dev build/
RUN cd build/
EXPOSE 3232
CMD ["npm", "run", "start-prod"]