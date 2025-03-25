import { CHAIN_IDS } from './enums';

export const SUPPORT_CHAIN_IDS = [
  CHAIN_IDS.BNB_TESTNET,
  CHAIN_IDS.BASE_TESTNET,
  CHAIN_IDS.ARB_TESTNET,
  CHAIN_IDS.BNB,
  CHAIN_IDS.BASE,
  CHAIN_IDS.ARBITRUM,
  CHAIN_IDS.ETHEREUM,
];

export const SUBGRAPH_URL: { [key: number]: string } = {
  [CHAIN_IDS.BNB_TESTNET]:
    'https://api.studio.thegraph.com/query/90012/testnet-bsc-testnet/version/latest',
  [CHAIN_IDS.BASE_TESTNET]:
    'https://api.studio.thegraph.com/query/90012/testnet-base-sepolia/version/latest',
  [CHAIN_IDS.ARB_TESTNET]:
    'https://api.studio.thegraph.com/query/90012/testnet-arb-sepolia/version/latest',
  [CHAIN_IDS.BNB]:
    'https://api.studio.thegraph.com/query/106182/memetropolis-bsc-mainnet/version/latest',
  [CHAIN_IDS.BASE]:
    'https://api.studio.thegraph.com/query/106182/memetropolis-base-mainnet/version/latest',
  [CHAIN_IDS.ARBITRUM]:
    'https://api.studio.thegraph.com/query/106182/memetropolis-arb-mainnet/version/latest',
  [CHAIN_IDS.ETHEREUM]:
    'https://api.studio.thegraph.com/query/106182/memetropolis-eth-mainnet/version/latest',
};

export type ChainModel = {
  nativeCoinDecimal: number;
};

export const CHAIN_LIST: { [key: number]: ChainModel } = {
  [CHAIN_IDS.BNB_TESTNET]: {
    nativeCoinDecimal: 18,
  },
  [CHAIN_IDS.BASE_TESTNET]: {
    nativeCoinDecimal: 18,
  },
  [CHAIN_IDS.SOLANA_MAINNET]: {
    nativeCoinDecimal: 9,
  },
  [CHAIN_IDS.ARB_TESTNET]: {
    nativeCoinDecimal: 18,
  },
  [CHAIN_IDS.BNB]: {
    nativeCoinDecimal: 18,
  },
  [CHAIN_IDS.BASE]: {
    nativeCoinDecimal: 18,
  },
  [CHAIN_IDS.ARBITRUM]: {
    nativeCoinDecimal: 18,
  },
  [CHAIN_IDS.ETHEREUM]: {
    nativeCoinDecimal: 18,
  },
};

export const EVM_MAX_SUPPLY = '1000000';

export const SOLANA_TOKEN_DECIMAL = 9;
export const SOLANA_MAX_SUPPLY = '1000000000000000';

export const SOLANA_LAUNCHPAD_PROGRAMID =
  '9evaFentwXrnSeawZsUzfjZsZKx5r1tFBB8jYkBrLosj'; //devnet
export const SOLANA_PUMPFUN_PROGRAMID =
  'CiQZ4gYrjqkWE6QLWcRt5zYkjKrond7Ww1SD33qAtGQr'; //devnet
