// set const for path to connect to index.html//

const path = require('path');

module.exports = (app) =>
  app.get('/'), (req, res) =>
    res.sendFile(path.join(__dirname,("../index.html")
  );