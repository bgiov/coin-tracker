export interface Balance {
  status: string;
  balance: object;
}

export type PriceObject = {
  circulating_supply: number;
  cmc_rank: number;
  symbol: string;
  date_added: string;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: null;
  quote: USD;
  tags: string[];
  total_supply: number;
  slug: string;
};

export interface USD {
  fully_diluted_market_cap: number;
  last_updated: string;
  market_cap: number;
  market_cap_dominance: number;
  percent_change_1h: number;
  percent_change_7d: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  price: number;
  volume_24h: number;
  volume_change_24h: number;
}
