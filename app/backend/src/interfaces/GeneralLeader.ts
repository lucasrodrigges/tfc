import { IGeneralTeam } from '.';

export default class GeneralLeader {
  private _team: IGeneralTeam;
  public name: string;
  public totalPoints: number;
  public totalGames: number | undefined;
  public totalVictories: number;
  public totalDraws: number;
  public totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  public efficiency: string;

  constructor(team: IGeneralTeam) {
    this._team = team;
    this.name = team.teamName;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = '';

    this.calcHomePoints();
    this.calcAwayPoints();
    this.calcEfficiency();
    this.calcGoals();
  }

  public calcHomePoints() {
    const { homeMatches } = this._team;

    homeMatches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (awayTeamGoals < homeTeamGoals) {
        this.totalPoints += 3;
        this.totalVictories += 1;
      } else if (awayTeamGoals > homeTeamGoals) {
        this.totalLosses += 1;
      } else {
        this.totalPoints += 1;
        this.totalDraws += 1;
      }
    });
  }

  public calcAwayPoints() {
    const { awayMatches } = this._team;

    awayMatches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (awayTeamGoals > homeTeamGoals) {
        this.totalPoints += 3;
        this.totalVictories += 1;
      } else if (awayTeamGoals < homeTeamGoals) {
        this.totalLosses += 1;
      } else {
        this.totalPoints += 1;
        this.totalDraws += 1;
      }
    });
  }

  public calcEfficiency() {
    const { homeMatches, awayMatches } = this._team;

    this.totalGames = homeMatches.length + awayMatches.length;

    if (this.totalGames) {
      const efficiency = (this.totalPoints / (this.totalGames * 3)) * 100;
      this.efficiency = efficiency.toFixed(2);
    }
  }

  public calcGoals() {
    const { homeMatches, awayMatches } = this._team;

    homeMatches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      this.goalsFavor += homeTeamGoals;
      this.goalsOwn += awayTeamGoals;
    });

    awayMatches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      this.goalsFavor += awayTeamGoals;
      this.goalsOwn += homeTeamGoals;
    });

    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }
}
