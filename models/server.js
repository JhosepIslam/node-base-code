//create class
const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port =  process.env.PORT || 3000;
    this.middlewares();    
    this.routes();
  }

  routes() {
    this.app.use('/api/users', require('../routes/user'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }

  middlewares () {
    this.app.use(cors());
    this.app.use(express.static('public'));
  }
}



module.exports = Server;
