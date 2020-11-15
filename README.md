# project05
Web Development - Question / Answer Forum App

# Developed by: 
Michael Zeno

# Overview/description: 
All users to ask questions within a set of general topic categories, and allow other users to vote on questions they like and provide answers to the questions. 

# Details/functionality: 
When a user arrives at the front page they can either login or register a new account. After registered they can login with the credientials they created. The Home page will show all previously created questions in order of vote count decending. To ask a new question click the universal "Ask" button that appears at the bottom of the side navigation throughout the site. The Explpre page shows all categories at a glance. Each category page is filtered for question that only fall into that category and sorted by vote count decending. Users can go into a specific question to create a new answer by clicking on the question card itself, or by clicking the "Answer" button on a question card. Once inside a question, the question will appear at the top, and all answers will appear in a list below sorted by created date decending. Still within a specific question page, user who created the question will be able to click on the question card to bring them to an Edit page. Once on the edit page, the user can click the Edit button to open an input box to update the question body content, or click the Delete button to permanetly delete the questoin and redirect the user to the category question list. 

# Technologies Used: 
HTML5, CSS, Bootstrap 4.5, MaterialUI, JavaScript, React, Redux, NodeJS, Express, Passport

# Ideas for future improvement: 
Allow categories in the navigation menu to collapse under the Explore link. Add a modal pop-over for creating new questions. Limit the vote count for question to one per users. Add both positive and negative voting for answers, and sort answers by positive votes. Allow users to modify the "Title" of a question. Add a modification date to both questions and answers. Allow users who created an answer to edit or delete the answer. Add handlers throughout the application to give users more feedback when something did not work.

# Setup Instructions:
To setup, run all required client and server scripts below. Create a database with the database information found in the Server > Data > db.js file. Create the database schema using the database create and insert statements found in Server > Data > sql.db

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

