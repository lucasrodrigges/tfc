import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  static async login(req: Request, res: Response) {
    const token = await UserService.login(req.body);

    res.status(200).json({ token });
  }

  static async validate(req: Request, res: Response) {
    const { payload: { id } } = req.body;
    const role = await UserService.validate(Number(id));

    res.status(200).json({ role });
  }
}
