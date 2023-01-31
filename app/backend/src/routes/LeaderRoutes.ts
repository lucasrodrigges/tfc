import { Router } from 'express';
import LeaderController from '../controllers/LeaderController';

const leaderRoutes = Router();

leaderRoutes.get('/leaderboard', LeaderController.getGeneralLeader);

leaderRoutes.get('/leaderboard/home', LeaderController.getHomeLeader);

leaderRoutes.get('/leaderboard/away', LeaderController.getAwayLeader);

export default leaderRoutes;
