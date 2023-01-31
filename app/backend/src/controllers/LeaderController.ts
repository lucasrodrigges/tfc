import { Request, Response } from 'express';
import LeaderService from '../services/LeaderService';

export default class LeaderController {
  static async getHomeLeader(_req: Request, res: Response) {
    const result = await LeaderService.getLeader('home');

    res.status(200).json(result);
  }

  static async getAwayLeader(_req: Request, res: Response) {
    const result = await LeaderService.getLeader('away');

    res.status(200).json(result);
  }

  static async getGeneralLeader(_req: Request, res: Response) {
    const result = await LeaderService.getGeneralLeader();

    res.status(200).json(result);
  }
}
