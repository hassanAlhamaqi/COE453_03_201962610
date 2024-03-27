const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const response = {
        "X": req.body.X,
        "Y": req.body.Y,
        "Result": req.body.X - req.body.Y
      };
      res.send(response);
    });


app.listen(8080, () => {
    console.log('Server is up on 8080');
    }
);