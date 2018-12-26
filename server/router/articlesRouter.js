const articlesRouter = require('express').Router();
const Article = require('../schema/articleSchema');

articlesRouter.route('/')
  .get((req, res) => {
    Article.find({}, (err, article) => {
      res.json(article);
    });
  })
  .post((req, res) => {
    const article = new Article(req.body);
    article.save();
    res.status(201).send(article);
  });

articlesRouter.use('/:articleId', (req, res, next) => {
  Article.findById(req.params.articleId, (err, article) => {
    if (err) { res.status(500).send(err); } else {
      req.article = article;
      next();
    }
  });
});

articlesRouter.route('/:articleId')
  .get((req, res) => {
    res.json(req.article);
  })
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (const b in req.body) {
      req.article[b] = req.body[b];
    }
    req.article.save();
    res.json(article); // eslint-disable-line
  })
  .delete((req, res) => {
    req.article.remove((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('removed');
      }
    });
  });

module.exports = articlesRouter;
