import { Sequelize, DataTypes } from "sequelize";

const Post = (sequelize: Sequelize) => {
  return sequelize.define("Post", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commentId: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  })
}

export default Post;
