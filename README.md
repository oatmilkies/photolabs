# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

![photolabsc](https://github.com/oatmilkies/photolabs/assets/148240283/88ab4368-5c63-400a-93a4-6fff7d029169)

## Setup

To set up the project locally, clone the repository and install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## Setting up the database

Start PostgreSQL using ```startpostgres``` and then set up the database using ```npm run db:reset```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## Usage

- When the frontend server starts up, your browser will automatically open a tab to the Photolabs app. If not, access it at ```http://localhost:3000```
- You can scroll through photos on the main page or filter them by clicking on a topic in the navigation bar
- You can like photos by clicking on the heart icon in the top left corner
- You can view an enlarged version of a particular photo by clicking on it
- In the enlarged photo pop-up, similar photos will also appear below it
