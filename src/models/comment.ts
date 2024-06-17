import { Sequelize, DataTypes } from "sequelize";

const Comment = (sequelize: Sequelize) => {
  return sequelize.define("Comment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
}

export default Comment;
