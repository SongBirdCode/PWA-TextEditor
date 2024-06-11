const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/index.html"), (req, res) => {
    res.send("");

}

app.use(express.static('./index.html'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes.js')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
