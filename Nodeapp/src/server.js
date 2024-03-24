const express = require('express');
const app = express();

app.use(express.json());

app.post('/add', (req, res) => {
    const response = {
        "X": req.body.X,
        "Y": req.body.Y,
        "Result": req.body.X + req.body.Y
      };
      res.send(response);
    });


app.post('/sub', (req, res) => {
    const response = {
        "X": req.body.X,
        "Y": req.body.Y,
        "Result": req.body.X - req.body.Y
      };
      res.send(response);
    });


app.post('/div', (req, res) => {
    const x = req.body.X
    const y = req.body.Y
    const result = x / y
    const response = {
      "X": x,
      "Y": y,
      "Result": result
    };
    res.send(response);
    });


app.post('/mul', (req, res) => {
    const response = {
        "X": req.body.X,
        "Y": req.body.Y,
        "Result": req.body.X * req.body.Y
      };
      res.send(response);
    });

app.get('/', (req, res) => {
    res.send('Hello! you can use post with the operations on /add, /sub, /div, /mul');
    });

app.listen(8080, () => {
    console.log('Server is up on 8080');
    }
);