'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<
  TData extends {
    id: string
    address?: string
    chainId?: string
    symbol?: string
  },
  TValue,
>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      if (filterValue === '') return true
      if (
        columnId === 'name' ||
        columnId === 'symbol' ||
        columnId === 'address'
      ) {
        return (
          row
            .getValue(columnId)
            ?.toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ?? false
        )
      }
      return false
    },
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  })

  const router = useRouter()

  return (
    <div className="w-full rounded-md border border-accent/10">
      <div className="ml-2 flex items-center py-4">
        <Input
          placeholder="Filter Token Name, Symbol or Address..."
          value={globalFilter ?? ''}
          onChange={(event) => {
            table.setGlobalFilter(event.target.value)
          }}
          className="max-w-[300px]"
        />
      </div>
      <Table>
        <TableHeader className="border-white/10 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-accent/10">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="font-hanson text-sm font-extrabold text-accent"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const { address, chainId, symbol } = row.original
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="cursor-pointer border-accent/10 hover:bg-accent/10"
                  onClick={() =>
                    router.push(
                      `/token/${address}?chain=${chainId}&symbol=${symbol}`,
                    )
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
