# project05
Web Development Question Forum App

#Client scripts

npm install -g create-react-app   **only once on machine
npx create-react-app appName      **each time you create a new app
npm start                         **Starts app server in full mode
npm run build                     **Create production build
npm test                          **Starts in debug mode
npm install axios                 **make API requests to server

#Server scripts
#download latest version of node and install node (12.19.0 or higher)
#after installing use "node --version" to confirm version

npx express-generator expressserver   **Optional: create express server template

npm init                          **create node server
npm init -y                       **create node server all defaults
npm install --save express        **adds express module
npm install --save-dev nodemon    **adds nodemon module
npm install --save uuid           **adds uuid module
npm install --save ejs            **adds ejs express template engine
npm install express-promise-router   **adds express promise router
npm install --save cors
npm install bcrypt                **hash passwords
npm install express-session

#create index.js
#google "express resources middleware"


HTTP Requests:

GET  /users         finds all users
POST /users         creates a user
GET  /users/:id     finds user details
DELETE /users/:id   deletes a user
PATCH /users/:id    updates portion of a user
PUT /users/:id      updates a user

