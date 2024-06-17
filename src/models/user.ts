import { Sequelize, DataTypes } from "sequelize";
import Post from "./post";

const User = (sequelize: Sequelize) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  })
}

export default User;
