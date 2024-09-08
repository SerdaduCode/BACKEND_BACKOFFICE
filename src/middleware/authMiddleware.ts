import { NextFunction } from "express";
import { verify } from "../utils/jwt/jwt";

export const getHeaderToken = (req: any, res: any) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  return token;
};

export const authMiddleware = (req: any, res: any, next: NextFunction) => {
  const token = req.header("Authorization");
  try {
    const decoded = verify(token as string);
    req.member = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
