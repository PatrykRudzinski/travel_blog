const bloggersRouter = require('express').Router();
const Blogger = require('../schema/bloggerSchema');

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
  blogger.findById(req.params.bloggerId, (err, blogger) => { // eslint-disable-line
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
    Object.keys(req.body).forEach(b => {
      return (req.blogger[b] = req.body[b])
    });
    req.blogger.save();
    res.json(blogger); // eslint-disable-line
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
