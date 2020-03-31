## Requirements

You should have git and npm installed on your local machine

## Getting Started

1) Run `git clone https://github.com/joe-gerhard/hash-hack.git` to clone this project onto your local machine.
2) Navigate to the hash-hack project directory
3) Run `npm install` to install all the dependencies.<br />
4) Run `touch .env` in the root directory to create the environment variables for your local machine.<br />
5) Get the database login name and password from me and paste them into the .env file as follows: <br />
`DATABASE_URL=mongodb+srv://<username>:<password>@cluster0-jn9hy.gcp.mongodb.net/test?retryWrites=true&w=majority`

6) Run `npm run build` to make sure the server has the most recent files available in the build folder<br />
7) Run `npm start` to run the app in development mode and to start the server on port 3001<br />
8) Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.


