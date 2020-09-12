const pg = require('pg');

const pool = new pg.Pool({
    database: 'inventory',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}) // end db config

module.exports = pool;