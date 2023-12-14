export interface IslotsCategory {
  type: string;
  category: string;
  platform: string;
  totalGames: number;
  name: string;
  order: number;
  games: Igames[];
}

export interface IGetslotsCategory {
  data: IslotsCategory[];
}

export interface Igames {
  game_id: string;
  name: string;
  provider: string;
  providerName: string;
  image: string;
  url: string;
  order: number;
  tags: string[];
  stats: any[];
  gameId: string;
  image2: string;
  imageSets?: ImageSet;
}

export interface IProviders {
  _id: string;
  name: string;
  iframeW: number;
  iframeH: number;
  vendor: string;
  provider: string;
  type: string;
  order: number;
  enabled: boolean;
  logo: string;
  tags: string[];
  gamesCount: number;
}

export interface IslotsById {
  type: string;
  provider: string;
  vendor: string;
  iframeW: number;
  iframeH: number;
  name: string;
  order: number;
  tags: string[];
  games: Igames[];
}

export interface ImageSet {
  blurhash: any;
  original: string;
  webp: string;
}
