import MatchesModel from '../database/models/MatchesModel';
import TeamModel from '../database/models/TeamModel';

export default class TeamService {
  static findAll = async () => TeamModel.findAll();

  static findWithAllMatches = async () => TeamModel.findAll({
    include: [{
      model: MatchesModel,
      as: 'homeMatches',
      attributes: ['homeTeamGoals', 'awayTeamGoals'],
      where: { inProgress: false },
    }, {
      model: MatchesModel,
      as: 'awayMatches',
      attributes: ['homeTeamGoals', 'awayTeamGoals'],
      where: { inProgress: false },
    }],
  });

  static findWithMatches = async (
    type: 'homeMatches' | 'awayMatches',
  ) => TeamModel.findAll({ include: [{
    model: MatchesModel,
    as: type,
    attributes: ['homeTeamGoals', 'awayTeamGoals'],
    where: { inProgress: false },
  }] });

  static findOne = async (id: number) => TeamModel.findByPk(id);
}
