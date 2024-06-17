import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { User } from "../sequelize"
import { getJwtToken } from "../utils/tokenGenerator";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const userData = user?.dataValues;
    const checkPassword = await bcrypt.compare(password, userData.password);

    if (user && checkPassword) {
      const token = getJwtToken(userData.name, email);
      res.status(200).json({ 
        message: "success",
        data: {
          id: userData.id,
          name: userData.name,
          email: userData.email
        },
        token: token
      })
    } else {
      res.status(404).json({ message:"Invalid email or password" })
    }
  } catch {
    res.status(500).json({ message:"Something Wrong" })
  }
}

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      res.status(404).json({ message: "User already exists" });
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword
      })
      const newUserData = newUser.dataValues;
      const token = getJwtToken(name, email);
      res.status(200).json({ 
        message: "success",
        data: {
          id: newUserData.id,
          name: newUserData.name,
          email: newUserData.email
        },
        token: token 
      });
    }
  } catch {
    res.status(500).json({ message:"Something Wrong" })
  }
}
