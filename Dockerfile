FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_NAME=MYNAME
EXPOSE 3000
CMD [ "npm", "start" ]