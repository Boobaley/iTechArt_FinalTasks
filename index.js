const app = require('express')();
const port = process.env.PORT || 3000;

app.get("/api/hello-world/:name?", (req, res, next) => {
    const name = req.params.name;
    if (!name) {
        const error = new Error('Missing name');
        next(error);
    }
        res.end(`<div>Hello ${name}</div>`);
});

app.use((err, req, res, next) => {
    console.log(err.message);
    const status = 404;
    res.status(status).json({error: err.message, status});
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});