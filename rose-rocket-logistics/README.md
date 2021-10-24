# Rose Rocket Coding Challenge

The Rose Rocket Coding Challenge is a full stack web application built using ReactJS, Node, Express, and PostgreSQL.

## What is the Rose Rocket Coding Challenge

The Rose Rocket Coding Challenge allows users to assign and unassign orders to drivers, and to edit orders so long as they are not currently assigned.

## Getting Started

1. Create the `.env.development` by using `.env.development.example`
2. Update the .env.development file with your correct local information 
  - username: `development` 
  - password: `development` 
  - database: `roserocket`
3. Install dependencies: `npm install`
4. Run the server: `npm run server`
  - Note: nodemon is used, so you should not have to restart your server
5. Reset and seed database: navigate to `http://localhost:3001/api/debug/reset`
  - Check the db folder to see what gets created and seeded
6. Run the app: `npm start`

## Dependencies

- Node 12.x or above
- NPM 6.9 or above
- pg 12.8 or above
- axios
- bootstrap
- cors
- express
- helmet
- pg
- body-parser
- pino
- nodemon