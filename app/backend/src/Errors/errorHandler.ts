import { NextFunction, Request, Response } from 'express';
import HTTPError from './HTTPError';

const errorHandler = (
  error: Error | HTTPError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof HTTPError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.log(error);
  return res.status(500).json({ message: 'Something went wrong' });
};

export default errorHandler;
