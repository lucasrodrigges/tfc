import { Model, DataTypes } from 'sequelize';
import { goals } from '../../interfaces/index';
import db from '.';

class TeamModel extends Model {
  declare id: number;
  declare teamName: string;
  declare homeMatches: goals[];
  declare awayMatches: goals[];
}

TeamModel.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  teamName: DataTypes.STRING,

}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'Team',
  timestamps: false,
});

export default TeamModel;
