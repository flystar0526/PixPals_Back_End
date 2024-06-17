import { Sequelize, DataTypes } from "sequelize";
import { User, Post } from "../sequelize"

const PostLike = (sequelize: Sequelize) => {
  return sequelize.define("PostLike", {
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

export default PostLike;
