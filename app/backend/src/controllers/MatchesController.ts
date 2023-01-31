import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  static async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    const matches = await MatchesService.findAll(inProgress as string);

    res.status(200).json(matches);
  }

  static async create(req: Request, res: Response) {
    const newMatch = await MatchesService.create(req.body);

    res.status(201).json(newMatch);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.update(Number(id), req.body);

    res.status(200).json({ message: 'Updated' });
  }

  static async finish(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.finish(Number(id));

    res.status(200).json({ message: 'Finished' });
  }
}
