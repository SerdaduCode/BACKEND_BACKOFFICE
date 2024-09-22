import { NextFunction } from "express";
import { verify } from "../utils/jwt/jwt";

export const getHeaderToken = (req: any, res: any) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }

  return token;
};

export const authMiddleware = (req: any, res: any, next: NextFunction) => {
  const token = getHeaderToken(req, res);

  try {
    const decoded = verify(token as string);
    req.member = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
