const express = require('express');
const cors = require('cors');
const Serial = require('../models/serial');

class Server {
  
  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT;
    this.path = '/api/proximity';
    this.middlewares();
    this.serial = new Serial();
  }
  
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  
  getData() {
    let dataSensor;
    this.serial.parser.on( 'data',  ( data ) => {
      dataSensor = data;
      console.log( `Distance: ${ dataSensor } cm` );
      this.app.get( this.path, ( req, res ) => {
        res.json({
          distance: dataSensor
        });
      });
    });
  }
  
  listen() {
    this.app.listen( this.port, () => {
      console.log( 'Servidor corriendo en el puerto', this.port );
    });
  }
  
}
module.exports = Server;