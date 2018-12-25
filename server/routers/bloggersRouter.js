const bloggersRouter = require('express').Router();
const Blogger = require('../schemas/bloggerSchema');

bloggersRouter.route('/')
  .get((req, res) => {
    Blogger.find({}, (err, blogger) => {
      res.json(blogger);
    });
  })
  .post((req, res) => {
    const blogger = new Blogger(req.body);
    blogger.save();
    res.status(201).send(blogger);
  });

bloggersRouter.use('/:bloggerId', (req, res, next) => {
  blogger.findById(req.params.bloggerId, (err, blogger) => {
    if (err) { res.status(500).send(err); } else {
      req.blogger = blogger;
      next();
    }
  });
});

bloggersRouter.route('/:bloggerId')
  .get((req, res) => {
    res.json(req.blogger);
  })
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (const b in req.body) {
      req.blogger[b] = req.body[b];
    }
    req.blogger.save();
    res.json(blogger);
  })
  .delete((req, res) => {
    req.blogger.remove((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('removed');
      }
    });
  });

module.exports = bloggersRouter;
