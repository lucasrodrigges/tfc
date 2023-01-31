interface iUser {
  id?: number
  username?: string
  role?: string
  email: string
  password: string
}

interface Match {
  id?:number
  homeTeamId: number // O valor deve ser o id do time
  awayTeamId: number // O valor deve ser o id do time
  homeTeamGoals: number
  awayTeamGoals: number
}

interface goals {
  homeTeamGoals: number,
  awayTeamGoals: number
}

interface ITeam {
  id: number
  teamName: string
  homeMatches?: goals[]
  awayMatches?: goals[]
}

interface IGeneralTeam {
  id: number
  teamName: string
  homeMatches: goals[]
  awayMatches: goals[]
}

interface MathUpdate {
  homeTeamGoals: number
  awayTeamGoals: number
}

interface LeaderItems {
  name: string,
  totalPoints: number
  totalGames: number | undefined
  totalVictories: number
  totalDraws: number
  totalLosses: number
  goalsFavor: number
  goalsOwn: number
  goalsBalance: number
  efficiency: string
}

export { iUser, Match, MathUpdate, LeaderItems, ITeam, IGeneralTeam, goals };
