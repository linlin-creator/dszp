
export enum SectionType {
  COVER = 'COVER',
  SIGN_IN = 'SIGN_IN',
  WARM_UP = 'WARM_UP',
  OPENING = 'OPENING',
  SPEECH = 'SPEECH',
  AWARDS = 'AWARDS',
  PERFORMANCE = 'PERFORMANCE',
  GAMES = 'GAMES',
  LUCKY_DRAW = 'LUCKY_DRAW',
  CLOSING = 'CLOSING',
  BANQUET = 'BANQUET'
}

export interface Performance {
  id: string;
  type: string;
  title: string;
  performers: string[];
  cover: string;
  musicUrl: string;
}

export interface Prize {
  id: number;
  name: string;
  tier: string;
}

export interface Participant {
  id: string;
  name: string;
}
