import { sign, verify } from 'jsonwebtoken';
import HTTPError from '../Errors/HTTPError';

const key = 'jwt_secret';

export const createToken = (id: number) => sign({ id }, key, {
  algorithm: 'HS256',
  expiresIn: '3d',
});

export const validateToken = (token: string) => {
  try {
    return verify(token, key);
  } catch (error) {
    throw new HTTPError(401, 'Token must be a valid token');
  }
};
