const functions = require('@google-cloud/functions-framework');

functions.http('add', (req, res) => {
    const response = {
    "X": req.body.X,
    "Y": req.body.Y,
    "Result": req.body.X + req.body.Y
  };
  res.send(response);
});
