# project05
Web Development - Question / Answer Forum App

# Developed by: 
Michael Zeno

# Overview/description: 


# Details/functionality: 


# Technologies Used: 
HTML5, CSS, Bootstrap 4.5, MaterialUI, JavaScript, React, Redux, NodeJS, Express, Passport

# Ideas for future improvement: 


# Setup Instructions:

## Client Setup:
* Required
** Optional

npm install -g create-react-app   *only once on machine
npx create-react-app [appName]    *create new react app template
npm install axios                 *allow API requests to server

### Client Scripts:

npm start                         *Starts app server in full mode
npm run build                     *Create production build
npm test                          **Starts in debug mode


## Server Setup:
* Required
** Optional

npm install -g npm                 *latest node and npm
node -v                            *confirm newest version
npm -v                             *confirm newest version
npm init                           *create node server
npm init -y                        **create node server all defaults
npm install --save express         *adds express module
npx express-generator [name]       **create express server template
npm install --save-dev nodemon     **adds nodemon module
npm install --save uuid            *adds uuid module
npm install --save ejs             **adds ejs express template engine
npm install express-promise-router *adds express promise router
npm install --save cors            *handles client requests
npm install bcrypt                 *hash passwords
npm install express-session        *initializes session state
npm install express-flash          *
npm install passport passport-local *keeps user session

### Server Scripts:

npm start                           *starts server


# HTTP Request Types:

HTTP Requests:

GET  /users         finds all users
POST /users         creates a user
GET  /users/:id     finds user details
DELETE /users/:id   deletes a user
PATCH /users/:id    updates portion of a user
PUT /users/:id      updates a user

