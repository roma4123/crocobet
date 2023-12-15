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
export interface IGetProviders {
  data: IProviders[];
}
export interface IGetSlotsByProviders {
  data: IslotsByProvider;
}
export interface IslotsByProvider {
  games: IGamesByProvider[];
  type: string;
  provider: string;
  totalGames: number;
  vendor: string;
  iframeW: number;
  iframeH: number;
  name: string;
  order: number;
  tags: string[];
}

export interface IImageSet {
  blurhash: any;
  original: string;
  webp: string;
}

export interface IGamesByProvider {
  game_id: string;
  group_name: string;
  name: string;
  provider: string;
  image: string;
  imageSet: IImageSet;
  url: string;
  order: number;
  tags: string[];
  stats: any[];
  gameId: string;
  image2: string;
}
