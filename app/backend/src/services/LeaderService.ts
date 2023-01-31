import GeneralLeader from '../interfaces/GeneralLeader';
import sortTeams from '../utils/sortTeams';
import Leader from '../interfaces/Leader';
import TeamService from './TeamService';

export default class LeaderService {
  static async getLeader(type: 'home' | 'away') {
    const teams = await TeamService.findWithMatches(
      type === 'home' ? 'homeMatches' : 'awayMatches',
    );
    const teamArr = teams.map((team) => {
      const leader = new Leader(team, type);
      return leader;
    });

    return sortTeams(teamArr);
  }

  static async getGeneralLeader() {
    const teams = await TeamService.findWithAllMatches();
    const teamsArr = teams.map((team) => {
      const leader = new GeneralLeader(team);

      return leader;
    });

    return sortTeams(teamsArr);
  }
}
