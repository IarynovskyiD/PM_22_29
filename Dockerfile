FROM node:20.17.0-alpine3.20
WORKDIR /app
COPY /app/js/testDock.js /app/scr.js
ENTRYPOINT ["node", "scr.js"]