const app = require('express')();
const port = process.env.PORT || 3000;
const filmRouter = require('./app/routes/films');

// app.get("/api/hello-world/:name?", (req, res, next) => {
//     const name = req.params.name;

//     if (!name) {
//         const error = new Error('Missing name');
//         next(error);
//     }
//     res.end(`<div>Hello ${name}!</div>`);
// });

// app.get("*", (req, res, next) => {
//     if (res.status(404)) {
//         const error = new Error('incorrect url');
//         next(error);
//     }
// });

// app.use((err, req, res, next) => {
//     const status = 404;
//     console.log(err.message);
//     res.status(404).json({error: err.message, status});
// });

app.use(filmRouter)


app.listen(port, () => {
    console.log(`server is running on ${port}`);
});