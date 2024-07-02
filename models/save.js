import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Save = sequelize.define("SAVE", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default Save;
