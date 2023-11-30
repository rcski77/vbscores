export interface Court {
  courtNum: bigint;
  team1: string;
  team2: string;
  score1: bigint;
  score2: bigint;
  sets1: bigint;
  sets2: bigint;
}

export const COURTS: Court[] = [
  {
    courtNum: BigInt(1),
    team1: 'Gamepoint 13',
    team2: 'TPV 13',
    score1: BigInt(25),
    score2: BigInt(12),
    sets1: BigInt(1),
    sets2: BigInt(0),
  },
  {
    courtNum: BigInt(2),
    team1: 'Dunes 16 Black',
    team2: 'Inside Out 16 Purple',
    score1: BigInt(22),
    score2: BigInt(25),
    sets1: BigInt(0),
    sets2: BigInt(1),
  },
];
