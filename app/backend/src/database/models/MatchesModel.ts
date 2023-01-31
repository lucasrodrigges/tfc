import { Model, DataTypes } from 'sequelize';
import db from '.';
import TeamModel from './TeamModel';

class MatchesModel extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
  },

}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'Match',
  timestamps: false,
});

MatchesModel.belongsTo(TeamModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
MatchesModel.belongsTo(TeamModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });
TeamModel.hasMany(MatchesModel, { foreignKey: 'homeTeamId', as: 'homeMatches' });
TeamModel.hasMany(MatchesModel, { foreignKey: 'awayTeamId', as: 'awayMatches' });

export default MatchesModel;
