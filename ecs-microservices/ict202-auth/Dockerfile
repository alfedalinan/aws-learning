FROM mhart/alpine-node:14.15.0

WORKDIR /srv
ADD . .
RUN npm install typescript -g && npm install
COPY . .
RUN tsc
EXPOSE 3231
CMD ["node", "build/index.js"]
