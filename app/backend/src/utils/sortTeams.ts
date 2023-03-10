import { LeaderItems } from '../interfaces';

export default (teamArr: LeaderItems[]) => teamArr.sort((a, b) => {
  if (a.totalPoints > b.totalPoints) return -1;
  if (a.totalPoints < b.totalPoints) return 1;
  if (a.goalsBalance > b.goalsBalance) return -1;
  if (a.goalsBalance < b.goalsBalance) return 1;
  if (a.goalsFavor > b.goalsFavor) return -1;
  if (a.goalsFavor < b.goalsFavor) return 1;
  if (a.goalsOwn > b.goalsOwn) return -1;
  if (a.goalsOwn < b.goalsOwn) return 1;
  return 0;
});
