import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamRouter = Router();

teamRouter.get('/teams', TeamController.findAll);

teamRouter.get('/teams/:id', TeamController.findOne);

export default teamRouter;
