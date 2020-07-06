FROM node

WORKDIR /build
COPY ./ ./

RUN npm i

ENTRYPOINT ["npm","run"]
CMD ["start"]
