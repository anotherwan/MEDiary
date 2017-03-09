Welcome to MEDiary!

MEDiary is a health logger for users to pinpoint occurring pain on the body and record it in a visual that they can share with their doctors.

A project by Stephanie Wan, Parshant Micoo and Kapish Kochhar.

Create a repository and clone this repository.

1. `npm install` all the necessary files and libraries needed for this project.

2. Create a `.env` file that has your personal information that mimics the look of the `env.example` file.

3. Presently, the project uses a local database and runs on localhost.

  `knex migrate:latest`
    Migrate all the necessary tables required to run the app effectively.

  `knex seed:run`
    (Optionally seed your database with our information)

4. This project utilizes two servers. One for the front end routes and another for the database/back-end routes.
  Open two terminals and run the following on their own respective terminals.

  4a. `npm start`
    This will run the react (front-end) server. Running on port `http://localhost:3000`

  4b. `node server.js`
    This will run the express (back-end) server. Running on `http://0.0.0.0:4000`

5. Go to `http://localhost:3000` to check our app!
