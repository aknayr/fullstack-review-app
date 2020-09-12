// requires
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('/inventory GET hit');
    res.send('purr');
}) //end GET

router.post('/', (req, res) => {
    console.log('/inventory POST hit', req.body);
    res.send('whinney');
}) //end POST

// exports
module.exports = router;

