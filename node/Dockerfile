FROM node:15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# NOTE: Docker caches the result of each layer/commands ran above.
# During development, source code changes much more often than dependencies
# Thus seperating copying package.json and other source code will help optimize 
# the container building process when there's no change in depenencies.
COPY . .

ENV PORT=8000
EXPOSE $PORT

CMD ["npm", "run", "dev"]