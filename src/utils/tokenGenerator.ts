import jwt from "jsonwebtoken"
import type { Secret } from "jsonwebtoken"

export const getJwtToken = (name: string, email: string) => {
  return jwt.sign({ name, email }, <Secret>process.env.JWT_KEY, {
    expiresIn: "3d"
  })
}