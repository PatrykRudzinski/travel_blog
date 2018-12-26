const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const articlesRouter = require('./router/articlesRouter');
const bloggersRouter = require('./router/bloggersRouter');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
mongoose.connect('mongodb://admin:dupa123@ds024778.mlab.com:24778/travel_blog');

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use('/api/article', articlesRouter);
    server.use('/api/blogger', bloggersRouter);

    server.get('/post/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    /*= ===== SERVER LISTEN ===== */
    /* eslint-disable no-console */

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
/* eslint-enable no-console */
