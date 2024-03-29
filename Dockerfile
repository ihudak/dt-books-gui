#FROM node:lts-alpine as node
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build --prod
## Stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/angular-app /usr/share/nginx/html


# choose base image to build off of
FROM node:lts-alpine

# set the current working directory for all commands
WORKDIR /usr/src/app

# copy these over first and run 'npm install' so the node_modules will be cached
# until the package.json / lock changes
COPY package.json .
COPY package-lock.json .
RUN npm install

# copy over all code files
COPY . .

# expose internal docker container port to external environment
EXPOSE 4200

# specify default command to run when we run the image
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check -c production
