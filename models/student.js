import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Student = db.define('student', {
  // Define attributes
  code: {
    type: DataTypes.STRING,
    autoIncrement: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  curse_id: {
    type: DataTypes.STRING
  }
},{
  tableName: 'student'
});

// Export model Student
export default Student;
