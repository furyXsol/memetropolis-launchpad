export type TokensPurchased = {
  id: string;
  buyer: string;
  amount: bigint;
  cost: bigint;
  blockNumber: bigint;
  blockTimestamp: bigint;
  transactionHash: string;
};

export interface LAST_UPDATE_TOKENS_PURCHASED_TYPE {
  tokensPurchased: TokensPurchased[];
}

export type Token = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  description: string;
  decimals: number;
  currentHolderCount: bigint;
  transferCount: bigint;
  mintCount: bigint;
  burnCount: bigint;
  totalSupply: string;
  totalMinted: string;
  salesRatio: number;
  reservedRatio: number;
  liquidityPoolRatio: number;
  launchDate: number;
  maximumPerUser: bigint;
  timestamp: number;
  owner: string;
};

export interface LAST_UPDATE_TOKENS_TYPE {
  tokens: Token[];
}

export type AccountBalance = {
  accountAddress: string;
  token: Token;
  amount: string;
  blockNumber: bigint;
  timestamp: bigint;
};

export type SubgraphAccountBalance = {
  account: {
    id: string;
  };
  token: Token;
  amount: string;
  blockNumber: bigint;
  timestamp: bigint;
};

export interface LAST_UPDATE_ACCOUNT_BALANCES_TYPE {
  accountBalances: SubgraphAccountBalance[];
}

export type TransferEvent = {
  hash: string;
  token: Token;
  amount: string;
  from: string;
  to: string;
  blockNumber: bigint;
  timestamp: bigint;
};

export type SubgraphTransferEvent = {
  hash: string;
  token: Token;
  amount: string;
  from: {
    id: string;
  };
  to: {
    id: string;
  };
  blockNumber: bigint;
  timestamp: bigint;
};

export interface LAST_UPDATE_TRANSFER_EVENTS_TYPE {
  transferEvents: SubgraphTransferEvent[];
}

export type PurchaseHistory = {
  accountAddress: string;
  token: Token;
  sourceEid: string;
  amount: string;
  blockNumber: bigint;
  timestamp: bigint;
  hash: string;
  type: string;
  ethAmount: string;
  price: string;
};

export type SubgraphPurchaseHistory = {
  account: {
    id: string;
  };
  token: Token;
  eid: string;
  amount: string;
  blockNumber: bigint;
  timestamp: bigint;
  hash: string;
  type: string;
  ethAmount: string;
  price: string;
};

export interface LAST_UPDATE_PURCHASE_HISTORIES_TYPE {
  purchaseHistories: SubgraphPurchaseHistory[];
}
