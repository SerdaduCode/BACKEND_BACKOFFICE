import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

const compare = (passowrd: string, hash: string) => {
  return bcrypt.compareSync(passowrd, hash);
};

const encryptPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

const verify = (password: string) => {
  return bcrypt.compareSync(password, JWT_SECRET);
};

const generateToken = (id: string, email: string) => {
  return jwt.sign(`${id}${email}`, JWT_SECRET);
};

export { compare, encryptPassword, verify, generateToken };
