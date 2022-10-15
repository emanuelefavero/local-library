# Local Library Node MVC Project

This is a Node.js Express MVC project for a local library website. It is based on the [MDN Express tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) and the [Express Application Generator](https://expressjs.com/en/starter/generator.html).

_NOTE: MVC is a software design pattern that separates the application into three main logical components: the model, the view, and the controller. The model is the data, the view is the presentation, and the controller is the interface between them._

Learn More about MVC: [https://developer.mozilla.org/en-US/docs/Glossary/MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

## Installation

1. Install [Node.js](https://nodejs.org/en/download/).
2. Install [MongoDB](https://docs.mongodb.com/manual/installation/).
3. Clone this repository.
4. Install the dependencies: `npm install`
5. Start the server: `npm start`
6. View the site at: `http://localhost:3000`

## Usage

Some Available URLs:

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances`
- `http://localhost:3000/catalog/authors`
- `http://localhost:3000/catalog/genres`
- `http://localhost:3000/catalog/book/ID`
- `http://localhost:3000/catalog/book/create`

### Development testing

```bash
npm run devstart
OR
npm run serverstart

// Windows
SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
```

_NOTE: Remember to set NODE_ENV to `development` and MONGO_URI in your environment variables. (Set NODE_ENV to 'production' when deploying to production.)_

## Live Website

[Cyclic App](https://different-undershirt-bull.cyclic.app/)
