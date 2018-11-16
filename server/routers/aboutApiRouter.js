const aboutApiRouter = require('express').Router();
const About = require('../models/aboutApiModel');

aboutApiRouter.route('/')
    .get((req, res) => {
        About.find({}, (err, about) => {
            res.json(about)
        })
    })
    .post((req, res) => {
        let about = new About(req.body);
        about.save();
        res.status(201).send(about)
    })

aboutApiRouter.use('/:aboutId', (req, res, next) => {
    About.findById(req.params.aboutId, (err, about) => {
        if (err)
            res.status(500).send(err)
        else {
            req.about = about;
            next()
        }
    })
})

aboutApiRouter.route('/:aboutId')
    .get((req, res) => {
        res.json(req.about)
    })
    .patch((req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        for (let b in req.body) {
            req.about[b] = req.body[b];
        }
        req.about.save();
        res.json(about);
    })
    .delete((req, res) => {
        req.about.remove(err => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.status(204).send('removed')
            }
        })
    })

module.exports = aboutApiRouter;
