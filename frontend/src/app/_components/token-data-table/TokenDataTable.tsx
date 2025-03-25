'use client'

import { DataTable } from './DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-react'

interface TokenData {
  id: string
  name?: string
  symbol?: string
  marketcap?: string
  ownerName?: string
  currentHolderCount?: string
  address?: string
  totalSupply?: string
  priceInDecimal?: string
  volume?: string
}

const columns: ColumnDef<TokenData>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Token Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) => cell.getValue() || 'N/A',
  },
  {
    accessorKey: 'symbol',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Symbol
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) => cell.getValue() || 'N/A',
  },
  {
    accessorKey: 'marketcap',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Market Cap
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) =>
      cell.getValue()
        ? `$${parseFloat(cell.getValue() as string).toFixed(2)}`
        : 'N/A',
  },
  {
    accessorKey: 'ownerName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Owner Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) => cell.getValue() || 'Unknown',
  },
  {
    accessorKey: 'currentHolderCount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Holders
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) => `${cell.getValue() || '0'} Holders`,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) => {
      const value = cell.getValue()
      return (
        <span className="block w-36 truncate">
          {typeof value === 'string' && value.trim() ? value : 'Unknown'}
        </span>
      )
    },
  },
  {
    accessorKey: 'totalSupply',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Total Supply
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) =>
      cell.getValue()
        ? `${(parseFloat(cell.getValue() as string) / 1e18).toFixed(2)} Tokens`
        : '0 Tokens',
  },
  {
    accessorKey: 'priceInDecimal',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) =>
      cell.getValue()
        ? `$${parseFloat(cell.getValue() as string).toFixed(8)}`
        : 'N/A',
  },
  {
    accessorKey: 'volume',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Volume
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ cell }) =>
      cell.getValue()
        ? `$${parseFloat(cell.getValue() as string).toFixed(2)}`
        : 'N/A',
  },
]

export default function TokenDataTable({ tokens }: { tokens: any[] }) {
  // Transform tokens into TokenData structure
  const transformedTokens: TokenData[] = tokens.map((token) => ({
    id: token.id,
    name: token.name || 'N/A',
    symbol: token.symbol || 'N/A',
    marketcap: token.marketcap || '0',
    ownerName: token.ownerName || 'Unknown',
    currentHolderCount: token.currentHolderCount || '0',
    address: token.address || 'Unknown',
    totalSupply: token.totalSupply || '0',
    priceInDecimal: token.priceInDecimal || '0',
    chainId: token.chainId || 'Unknown',
    volume: token.volume || 'N/A',
  }))

  return <DataTable columns={columns} data={transformedTokens} />
}
