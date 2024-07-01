import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Save=sequelize.define("SAVE",{
    type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    }
);
export default Save; 