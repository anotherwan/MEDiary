This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Welcome to MEDiary.

I project by Stephanie Wan, Parshant Micoo and Kapish Kochhar.

1. npm install
  All the necessary files and libraries needed for this project.

2. Create an .env file that has your personal information that mimics the look of our env.example file....

DB_HOST=localhost
DB_USER=username_here
DB_PASS=password_here
DB_NAME=final
DB_SSL=0
DB_PORT=5432

3. The project does use a local database currently with future plans to make this separate from running it on localhost.

  knex migrate:latest
    Migrate all the necessary tables required to run the app effectively.

  knex seed:run
    (Seed your database with our information if you'd life)

4. The following porject utilizes two servers. One for the front end routes and another for the database, back-end routes.
  Open two terminals and run the following on their own respective terminal.

  4a. npm start
    This will run the react (front-end) server. Running on port "http://localhost:3000"

  4b. node server.js
    This will run the express (back-end) server. Running on "http://0.0.0.0:4000"

5. Visit "http://localhost:3000" to check our app!