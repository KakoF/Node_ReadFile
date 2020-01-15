const { Pool, Client } = require('pg')

const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 32770,
  })

class Post{

    insert(){
        pool.query('SELECT NOW()', (err, res) => {
            console.log(err, res)
            pool.end()
          })
    }
}

module.exports = new Post()
