const pg = require('pg');
const config = {
  user: 'postgres',
  database: 'bicivoy',
  password: 'postgrespw',
  host: 'host.docker.internal',
  port: 49153,
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the database');
});

const query = (text, params) => pool.query(text, params);

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
  });

  pool.query('SELECT * FROM users', (err, res) => {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  
module.exports = {
  query
};
