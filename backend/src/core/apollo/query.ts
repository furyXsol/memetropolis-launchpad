import { gql } from '@apollo/client/core';

export const LAST_UPDATE_TOKENS_PURCHASEDS = gql`
  query MyQuery($pageSize: Int!, $skip: Int!, $timestamp: BigInt!) {
    tokensPurchaseds(
      orderBy: blockTimestamp
      orderDirection: asc
      first: $pageSize
      skip: $skip
      where: { blockTimestamp_gt: $timestamp }
    ) {
      id
      buyer
      cost
      amount
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const LAST_UPDATE_TOKENS = gql`
  query MyQuery($pageSize: Int!, $skip: Int!, $timestamp: BigInt!) {
    tokens(
      orderBy: timestamp
      orderDirection: asc
      first: $pageSize
      skip: $skip
      where: { timestamp_gt: $timestamp }
    ) {
      id
      name
      symbol
      image
      description
      decimals
      currentHolderCount
      transferCount
      mintCount
      burnCount
      totalSupply
      totalMinted
      salesRatio
      reservedRatio
      liquidityPoolRatio
      launchDate
      maximumPerUser
      timestamp
      owner
    }
  }
`;

export const LAST_UPDATE_ACCOUNT_BALANCES = gql`
  query MyQuery($pageSize: Int!, $skip: Int!, $timestamp: BigInt!) {
    accountBalances(
      orderBy: timestamp
      orderDirection: asc
      first: $pageSize
      skip: $skip
      where: { timestamp_gt: $timestamp }
    ) {
      account {
        id
      }
      token {
        id
        name
        symbol
        decimals
        currentHolderCount
        transferCount
        mintCount
        burnCount
        totalSupply
        totalMinted
        salesRatio
        reservedRatio
        liquidityPoolRatio
        launchDate
        maximumPerUser
        timestamp
        owner
      }
      amount
      blockNumber
      timestamp
    }
  }
`;

export const LAST_UPDATE_TRANSFER_EVENTS = gql`
  query MyQuery($pageSize: Int!, $skip: Int!, $timestamp: BigInt!) {
    transferEvents(
      orderBy: timestamp
      orderDirection: asc
      first: $pageSize
      skip: $skip
      where: { timestamp_gt: $timestamp }
    ) {
      hash
      token {
        id
        name
        symbol
        decimals
        currentHolderCount
        transferCount
        mintCount
        burnCount
        totalSupply
        totalMinted
        timestamp
        salesRatio
        reservedRatio
        liquidityPoolRatio
        launchDate
        maximumPerUser
        owner
      }
      amount
      from {
        id
      }
      to {
        id
      }
      blockNumber
      timestamp
    }
  }
`;

export const LAST_UPDATE_PURCHASE_HISTORIES = gql`
  query MyQuery($pageSize: Int!, $skip: Int!, $timestamp: BigInt!) {
    purchaseHistories(
      orderBy: timestamp
      orderDirection: asc
      first: $pageSize
      skip: $skip
      where: { timestamp_gt: $timestamp }
    ) {
      account {
        id
      }
      token {
        id
        name
        symbol
        decimals
        currentHolderCount
        transferCount
        mintCount
        burnCount
        totalSupply
        totalMinted
        salesRatio
        reservedRatio
        liquidityPoolRatio
        launchDate
        maximumPerUser
        timestamp
        owner
      }
      eid
      amount
      blockNumber
      timestamp
      hash
      type
      ethAmount
      price
    }
  }
`;
