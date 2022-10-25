import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Curse = db.define('curse', {
  // Define attributes
  id: {
    type: DataTypes.STRING,
    autoIncrement: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  credit: {
    type: DataTypes.INTEGER
  },
  nota_id: {
    type: DataTypes.INTEGER
  },
  condition_id: {
    type: DataTypes.INTEGER
  }
},{
  tableName: 'curse'
});

// Export model Curse
export default Curse;
