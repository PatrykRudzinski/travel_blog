const postsApiRouter = require('express').Router();
const Post = require('../models/postsApiModel');

postsApiRouter.route('/')
    .get((req, res) => {
        // first arg is for filter response
        Post.find({}, (err, posts) => {
            res.json(posts)
        })
    })
    .post((req, res) => {
        let post = new Post(req.body);
        post.save();
        res.status(201).send(post)
    })

postsApiRouter.use('/:postId', (req, res, next) => {
    Post.findById(req.params.postId, (err, post) => {
        if (err)
            res.status(500).send(err)
        else {
            req.post = post;
            next()
        }
    })
})

postsApiRouter.route('/:postId')
    .get((req, res) => {
        res.json(req.post)
    })
    .put((req, res) => {
        req.post.title = req.body.title;
        req.post.author = req.body.author;
        req.post.save();
        res.json(req.post);
    })
    .patch((req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        for (let b in req.body) {
            req.post[b] = req.body[b];
        }
        req.post.save();
        res.json(post);
    })
    .delete((req, res) => {
        req.post.remove(err => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.status(204).send('removed')
            }
        })
    })

module.exports = postsApiRouter;
