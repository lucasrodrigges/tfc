import { Router } from 'express';
import matchValidation from '../middlewares/matchValidation';
import tokenValidation from '../middlewares/tokenValidation';
import MatchesController from '../controllers/MatchesController';

const matchesRoutes = Router();

matchesRoutes.get('/matches', MatchesController.findAll);

matchesRoutes.post('/matches', matchValidation, tokenValidation, MatchesController.create);

matchesRoutes.patch('/matches/:id', tokenValidation, MatchesController.update);

matchesRoutes.patch('/matches/:id/finish', tokenValidation, MatchesController.finish);

export default matchesRoutes;
