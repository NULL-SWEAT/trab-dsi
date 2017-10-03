const pg = require('pg');

module.exports = {
  getClient () {
    return new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'trabdsipets',
      user: 'postgres',
      password: 'adminpw'
    });
  }
}
