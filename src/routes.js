const express = require('express');
const path = require('path');
const PhotoRouter = require('./routes/photo.routes');
const ExampleRouter = require('./routes/example.routes');

module.exports = function startRoutes(app) {

    ////////////////////////////////////////////////////////////////////////////////
    // START-ROUTERS
    ////////////////////////////////////////////////////////////////////////////////
    // Example
    app.use(`${process.env.PATH_API_V1}/example`, ExampleRouter);

    // Photo
    app.use(`${process.env.PATH_API_V1}/photo`, PhotoRouter);

    ////////////////////////////////////////////////////////////////////////////////
    // END-ROUTERS
    ////////////////////////////////////////////////////////////////////////////////

    // this folders for this application will be used to store public file images
    app.use('/uploads', express.static(path.resolve('uploads')));

    // Static Files
    app.use(express.static(path.join(__dirname, 'public')));
    // Index
    // app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/pages/index.html')));
    // app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/public/pages/404.html')));

    // Angular or ReactJS build
    app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/public')));

}