import { Sequelize, DataTypes } from "sequelize";
import { User, Post } from "../sequelize"

const PostFavor = (sequelize: Sequelize) => {
  return sequelize.define("PostFavor", {
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.UUID,
      references: {
        model: Post,
        key: 'id'
      }
    }
  })
}

export default PostFavor;
