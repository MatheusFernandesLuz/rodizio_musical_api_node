var express = require("express");
var cors = require("cors");
import { createConnection } from "typeorm";
import "reflect-metadata";
import "express-async-errors";
import { rodizioRoutes  } from "./routes/rodizio.routes";
import { musicoRoutes } from "./routes/musico.routes";

// Cria a conexão com o banco com base no arquivo ormconfig.json
createConnection();

const app = express();

  var allowedOrigins = ['http://localhost:3000', 'http://yourapp.com'];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
      'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
app.use([rodizioRoutes, musicoRoutes]);

export default app;