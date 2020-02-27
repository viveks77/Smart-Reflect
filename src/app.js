//loading up modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');

//setting up paths
const viewsPath = path.join(__dirname, '../templates/views');
const publicPath = path.join(__dirname, '../public');

//setting up server
app = express();
app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static(publicPath));

//setting up url for homepage
app.get('', (req, res) => {
    res.render('index');
});


app.listen(3000, () => {console.log('Server is up at 3000')});