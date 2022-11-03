/*
import { Sequelize } from "sequelize";
import _config from "../config/config.js"
const env = process.env.ENV;
const config = _config[env];

const db = new Sequelize(
  config.database, //mi base de datos se llama postgres tambien
  config.username, //"postgres"
  config.password, 
  {
    host: config.host, //si trabajamos en nuestra computadora solamente
    dialect: 'postgres', //dialecto
    logging: false,
    port: 5432, //es el puerto por defecto, si tenemos otro tenemos que ponerlo, sino dejamos este
  define: {
    timestamps: false //tiene el uso de dos campos createup y updatecreate, nosotros aca ledesimos que no haga eso
  }
});

export default db;
*/
import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME || 'postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '1234567890',
  {
    host: process.env.DB_HOST|| 'localhost',
    port: process.env.DB_PORT|| 5432,
    dialect: "postgres",
    logging: false 
  }
);

export default db;