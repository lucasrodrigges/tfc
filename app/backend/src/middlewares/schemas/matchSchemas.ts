import * as Joi from 'joi';

const matchSchema = Joi.object({
  homeTeamId: Joi.number().required(),
  awayTeamId: Joi.number().required(),
  homeTeamGoals: Joi.number().required(),
  awayTeamGoals: Joi.number().required(),
});

export default matchSchema;
