import { NextFunction, Request, Response } from 'express';
import HTTPError from '../Errors/HTTPError';
import matchSchema from './schemas/matchSchemas';

const matchValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;

  if (homeTeamId === awayTeamId) {
    throw new HTTPError(422, 'It is not possible to create a match with two equal teams');
  }

  const { error } = matchSchema.validate(req.body);
  if (error) throw new HTTPError(401, error.message);

  next();
};

export default matchValidation;
