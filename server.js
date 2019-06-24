const app = require('express')();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const filmsRouter = require('./app/routes/films_routes');
const helloRouter = require('./app/routes/hello_world-routes');
const filmsCategoriesRouter = require('./app/routes/film_categories_routes');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://adrik:1998@itechartdatabase-wjk8u.mongodb.net/ApplicationDB?retryWrites=true&w=majority';
mongoose.connect(uri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', filmsRouter, helloRouter, filmsCategoriesRouter);

app.get("*", (req, res, next) => { 
    if (res.status(404)) {
        const error = new Error('Incorrect url');
        next(error);
    }
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.json({ error: err.message, status: res.statusCode});
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});