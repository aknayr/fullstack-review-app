// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const inventory = require('./modules/inventory.route')

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/inventory', inventory);

//globals
const port = 3000;

// spin up server
app.listen(port, () => {
    console.log('Listening on port:', port);
}) // end server up