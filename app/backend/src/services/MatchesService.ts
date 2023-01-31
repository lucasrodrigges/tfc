import { Op } from 'sequelize';
import HTTPError from '../Errors/HTTPError';
import { Match, MathUpdate } from '../interfaces';
import TeamModel from '../database/models/TeamModel';
import MatchesModel from '../database/models/MatchesModel';

export default class MatchesService {
  static findAll = async (inProgress: string) => {
    let where;

    if (inProgress === 'true') where = { inProgress: true };
    if (inProgress === 'false') where = { inProgress: false };

    const matches = await MatchesModel.findAll({ include: [{
      model: TeamModel,
      as: 'homeTeam',
      attributes: ['teamName'],
    }, {
      model: TeamModel,
      as: 'awayTeam',
      attributes: ['teamName'],
    }],
    where });

    return matches;
  };

  static async create({ homeTeamId, awayTeamId, awayTeamGoals, homeTeamGoals }: Match) {
    const teams = await TeamModel.findAll({
      where: {
        id: { [Op.or]: [homeTeamId, awayTeamId] },
      },
    });

    if (teams.length !== 2) {
      throw new HTTPError(404, 'There is no team with such id!');
    }

    const newMatch = await MatchesModel.create({
      homeTeamId, awayTeamId, awayTeamGoals, homeTeamGoals, inProgress: true,
    });

    return newMatch;
  }

  static async update(id: number, { homeTeamGoals, awayTeamGoals }: MathUpdate) {
    const match = await MatchesModel.findByPk(id);

    await match?.update({ homeTeamGoals, awayTeamGoals });
  }

  static async finish(id: number) {
    const match = await MatchesModel.findByPk(id);

    await match?.update({ inProgress: false });
  }
}
