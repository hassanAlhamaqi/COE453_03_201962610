const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
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


app.listen(8080, () => {
    console.log('Server is up on 8080');
    }
);