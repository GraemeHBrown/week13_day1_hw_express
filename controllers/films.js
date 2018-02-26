//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films');
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express = require('express');
const filmRouter = new express.Router();
const filmArray = films();

// show route
filmRouter.get('/:id', function (req, res) {
    res.json({data: filmArray[req.params.id]});
});

//index route
filmRouter.get('/', function (req, res) {
    res.json({data: filmArray});
});

// create new film
filmRouter.post('/', function (req, res) {
    const film = new Film({
        title: req.body.title,
        actors: req.body.actors
    });
    filmArray.push(film);
    res.json({data: filmArray});
});

//update
filmRouter.put('/:id', function (req, res) {
    const film = filmArray[req.params.id]
    film.title = req.body.title;
    film.actors = req.body.actors;
    film.reviews = req.body.reviews;
    res.json({data: filmArray});
});

//delete
filmRouter.delete('/:id', function (req, res) {
    filmArray.splice(req.params.id, 1);
    res.json({data: filmArray});
});

module.exports = filmRouter;