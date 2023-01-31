import { compareSync } from 'bcryptjs';
import { iUser } from '../interfaces';
import HTTPError from '../Errors/HTTPError';
import UserModel from '../database/models/UserModel';
import { createToken } from '../JWT';

export default class UserService {
  static async login({ email, password } : iUser) {
    const user = await UserModel.findOne({ where: { email } });

    if (!user || !compareSync(password, user.password)) {
      throw new HTTPError(401, 'Incorrect email or password');
    }

    return createToken(user.id);
  }

  static async validate(id: number) {
    const user = await UserModel.findByPk(id);

    return user?.role;
  }
}
