const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    let users = [{
        name: 'Hashim Saleem',
        age: 40
    }, {
        name: 'Rizwan Saqib',
        age: 35
    }, {
        name: 'Aashir Imtiaz',
        age: 42
    }];
    
    res.status(200).send(users);
});

// GET /users
// Give users a name prop and age prop

app.listen(3000);
module.exports.app = app;