const app = require('express')();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const filmsRouter = require('./app/routes/films_routes');
const helloRouter = require('./app/routes/hello_world-routes');
const filmsCategoriesRouter = require('./app/routes/film_categories_routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', filmsRouter, helloRouter, filmsCategoriesRouter);

app.get("*", (req, res, next) => {
    if (res.status(404)) {
        const error = new Error('Incorrect url');
        next(error);
    }
});

app.use((err, req, res, next) => {
    const status = 404;
    console.log(err.message);
    res.status(404).json({ error: err.message, status });
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});