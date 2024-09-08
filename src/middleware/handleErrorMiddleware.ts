import { Request, Response, NextFunction } from "express";

interface IError extends Error {
  statusCode?: number;
}

const errorHandler = (
  error: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    error: {
      statusCode: statusCode,
      message: error.message || "Internal Server Error",
    },
  });
  next(error);
};

export default errorHandler;
