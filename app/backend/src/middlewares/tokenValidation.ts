import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../JWT';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  req.body.payload = validateToken(authorization);

  next();
};

export default tokenValidation;
