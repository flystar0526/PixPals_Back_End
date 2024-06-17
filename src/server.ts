import express from "express";
import type { Express, Request, Response } from "express"
import { connectDB } from "./sequelize";
import userRouter from "./routes/user"

const app: Express = express();

app.use(express.json());
app.use("/user", userRouter);

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(5000, () => {
  console.log("[Server] Server is running in port 5000")
})
