import { Sequelize } from "sequelize"
import { config } from "dotenv";
import UserModel from "./models/user";
import CommentModel from "./models/comment";
import PostModel from "./models/post";
import PostLikeModel from "./models/postLike";
import PostFavorModel from "./models/postFavor";

config();

const sequelize = new Sequelize({
  dialect: "postgres",
  database: "PixPals",
  username: <string>process.env.DB_USERNAME,
  password: <string>process.env.DB_PASSWORD,
  host: 'localhost',
  port: Number.parseInt(<string>process.env.DB_PORT),
  logging: false
});

export const User = UserModel(sequelize);
export const Comment = CommentModel(sequelize);
export const Post = PostModel(sequelize);
export const PostLike = PostLikeModel(sequelize);
export const PostFavor = PostFavorModel(sequelize);

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

User.belongsToMany(Post, { through: PostLike });
Post.belongsToMany(User, { through: PostLike });

User.belongsToMany(Post, { through: PostFavor });
Post.belongsToMany(User, { through: PostFavor });

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("[DB] Connection has been established successfully");
  } catch (error) {
    console.error("[DB] Unable to connect to the database:", error);
  }

  await sequelize.sync({ force: true });
  console.log("[DB] Database and Tables have been initialized");
};
