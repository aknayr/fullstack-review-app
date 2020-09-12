// requires
const express = require('express');
const router = express.Router();
const pool = require('./pool');

// gets information
router.get('/', (req, res) => {
    console.log('/inventory GET hit');
    // set up queryString
    const queryString = `SELECT * FROM "items"`;
    // ask pool to run the query
    pool.query(queryString).then((result) => {
        // send results.rows to client
        res.send(result.rows);
    }).catch((err) => {
        // catch any errors
        console.log(err);
        res.sendStatus(500);
    })
}) //end GET

// adds information
router.post('/', (req, res) => {
    console.log('/inventory POST hit', req.body);
    // set up query string
    const queryString = `INSERT INTO "items" (size, color, description)
                         VALUES ($1, $2, $3)`;
    // sanitize inputs
    // as pool to run the query
    pool.query(queryString, [req.body.size, req.body.color, req.body.description]).then((result)=>{
        // if successful send 201
        res.sendStatus(201);
    }).catch((err) => {
        // if unsuccessful send 500
        res.sendStatus(500);
    })
    res.send('whinney');
}) //end POST

// exports
module.exports = router;

