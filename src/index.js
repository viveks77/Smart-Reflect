//loading up modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const getData = require('./routers/getdata');

const port = process.env.PORT || 3000;

//setting up paths
const viewsPath = path.join(__dirname, '../templates/views');
const publicPath = path.join(__dirname, '../public');

//setting up server
app = express();
app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static(publicPath));
app.use(express.json());
app.use(getData);


app.listen(port, () => {
    console.log('Server is up at ' + port);
});