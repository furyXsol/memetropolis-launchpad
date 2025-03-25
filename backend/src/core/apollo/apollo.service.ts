import { Injectable } from '@nestjs/common';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { SUBGRAPH_URL, SUPPORT_CHAIN_IDS } from '../lib/constants';
import {
  Token,
  LAST_UPDATE_TOKENS_TYPE,
  LAST_UPDATE_ACCOUNT_BALANCES_TYPE,
  AccountBalance,
  LAST_UPDATE_TRANSFER_EVENTS_TYPE,
  TransferEvent,
  PurchaseHistory,
  LAST_UPDATE_PURCHASE_HISTORIES_TYPE,
} from './types';
import {
  LAST_UPDATE_ACCOUNT_BALANCES,
  LAST_UPDATE_PURCHASE_HISTORIES,
  LAST_UPDATE_TOKENS,
  LAST_UPDATE_TRANSFER_EVENTS,
} from './query';

@Injectable()
export class ApolloService {
  public clients: { [chainId: number]: ApolloClient<any> } = {};
  constructor() {
    for (const chainId of SUPPORT_CHAIN_IDS) {
      this.clients[chainId] = new ApolloClient({
        link: new HttpLink({
          uri: SUBGRAPH_URL[chainId],
          fetch,
        }),
        cache: new InMemoryCache(),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'no-cache',
          },
          query: {
            fetchPolicy: 'no-cache',
          },
        },
      });
    }
  }

  async getTokens(
    chainId: number,
    lastSyncedTimestamp: number,
  ): Promise<Token[]> {
    const pageSize = 100;
    let skip = 0;
    const tokens: Token[] = [];
    while (true) {
      try {
        const { data } = await this.clients[
          chainId
        ].query<LAST_UPDATE_TOKENS_TYPE>({
          query: LAST_UPDATE_TOKENS,
          variables: {
            pageSize: pageSize,
            skip,
            timestamp: lastSyncedTimestamp,
          },
        });

        // add fetched data to result array
        tokens.push(
          ...data.tokens.map((token) => {
            return {
              id: token.id,
              name: token.name,
              symbol: token.symbol,
              image: token.image,
              description: token.description,
              decimals: token.decimals,
              currentHolderCount: token.currentHolderCount,
              transferCount: token.transferCount,
              mintCount: token.mintCount,
              burnCount: token.burnCount,
              totalSupply: token.totalSupply,
              totalMinted: token.totalMinted,
              salesRatio: token.salesRatio,
              reservedRatio: token.reservedRatio,
              liquidityPoolRatio: token.liquidityPoolRatio,
              launchDate: token.launchDate,
              maximumPerUser: token.maximumPerUser,
              timestamp: Number(token.timestamp),
              owner: token.owner,
            };
          }),
        );

        // If we fetched fewer results than expected, we've reached the end of the data
        if (data.tokens.length < pageSize) {
          return tokens;
        }

        // Increment the skip count for the next page
        skip += pageSize;
      } catch (e) {
        console.log(e);
        break;
      }
    }
    return tokens;
  }

  async getAccountBalances(
    chainId: number,
    lastSyncedTimestamp: number,
  ): Promise<AccountBalance[]> {
    const pageSize = 100;
    let skip = 0;
    const accountBalances: AccountBalance[] = [];
    while (true) {
      try {
        const { data } = await this.clients[
          chainId
        ].query<LAST_UPDATE_ACCOUNT_BALANCES_TYPE>({
          query: LAST_UPDATE_ACCOUNT_BALANCES,
          variables: { pageSize: 100, skip, timestamp: lastSyncedTimestamp },
        });

        // add fetched data to result array
        accountBalances.push(
          ...data.accountBalances.map((balance) => {
            return {
              accountAddress: balance.account.id,
              token: balance.token,
              amount: balance.amount,
              blockNumber: balance.blockNumber,
              timestamp: balance.timestamp,
            };
          }),
        );

        // If we fetched fewer results than expected, we've reached the end of the data
        if (data.accountBalances.length < pageSize) {
          return accountBalances;
        }

        // Increment the skip count for the next page
        skip += pageSize;
      } catch (e) {
        console.log(e);
        break;
      }
    }
    return accountBalances;
  }

  async getTransferEvents(
    chainId: number,
    lastSyncedTimestamp: number,
  ): Promise<TransferEvent[]> {
    const pageSize = 100;
    let skip = 0;
    const transferEvents: TransferEvent[] = [];
    while (true) {
      try {
        const { data } = await this.clients[
          chainId
        ].query<LAST_UPDATE_TRANSFER_EVENTS_TYPE>({
          query: LAST_UPDATE_TRANSFER_EVENTS,
          variables: {
            pageSize: pageSize,
            skip,
            timestamp: lastSyncedTimestamp,
          },
        });

        // add fetched data to result array
        transferEvents.push(
          ...data.transferEvents.map((event) => {
            return {
              hash: event.hash,
              token: event.token,
              amount: event.amount,
              from: event.from.id,
              to: event.to.id,
              blockNumber: event.blockNumber,
              timestamp: event.timestamp,
            };
          }),
        );

        // If we fetched fewer results than expected, we've reached the end of the data
        if (data.transferEvents.length < pageSize) {
          return transferEvents;
        }

        // Increment the skip count for the next page
        skip += pageSize;
      } catch (e) {
        console.log(e);
        break;
      }
    }
    return transferEvents;
  }

  async getPurchaseHistories(
    chainId: number,
    lastSyncedTimestamp: number,
  ): Promise<PurchaseHistory[]> {
    const pageSize = 100;
    let skip = 0;
    const purchaseHistories: PurchaseHistory[] = [];
    while (true) {
      try {
        const { data } = await this.clients[
          chainId
        ].query<LAST_UPDATE_PURCHASE_HISTORIES_TYPE>({
          query: LAST_UPDATE_PURCHASE_HISTORIES,
          variables: { pageSize: 100, skip, timestamp: lastSyncedTimestamp },
        });

        // add fetched data to result array
        purchaseHistories.push(
          ...data.purchaseHistories.map((history) => {
            return {
              accountAddress: history.account.id,
              token: history.token,
              sourceEid: history.eid,
              amount: history.amount,
              blockNumber: history.blockNumber,
              timestamp: history.timestamp,
              hash: history.hash,
              type: history.type,
              ethAmount: history.ethAmount,
              price: history.price,
            };
          }),
        );

        // If we fetched fewer results than expected, we've reached the end of the data
        if (data.purchaseHistories.length < pageSize) {
          return purchaseHistories;
        }

        // Increment the skip count for the next page
        skip += pageSize;
      } catch (e) {
        console.log(e);
        break;
      }
    }
    return purchaseHistories;
  }
}
