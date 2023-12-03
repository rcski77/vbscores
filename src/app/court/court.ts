export interface Court {
  id?: string;
  courtNum: number;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  sets1: number;
  sets2: number;
}

export const COURTS: Court[] = [
  {
    id: 'court1',
    courtNum: 1,
    team1: 'Gamepoint 13',
    team2: 'TPV 13',
    score1: 25,
    score2: 12,
    sets1: 1,
    sets2: 0,
  },
  {
    id: 'court2',
    courtNum: 2,
    team1: 'Dunes 16 Black',
    team2: 'Inside Out 16 Purple',
    score1: 22,
    score2: 25,
    sets1: 0,
    sets2: 1,
  },
];
