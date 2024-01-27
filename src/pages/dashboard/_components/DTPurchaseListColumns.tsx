import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Purchase = {
  id: string;
  reference: string;
  type: string;
  provider_fullname: string;
  amount: number;
  state: 'inWritting' | 'isCompleted';
  created_at: string;
  updated_at: string;
};

export const columns: ColumnDef<Purchase>[] = [
  {
    accessorKey: 'reference',
    header: 'Reference',
  },
  {
    accessorKey: 'type',
    header: 'Type de document',
  },
  {
    accessorKey: 'state',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center gap-1'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          État
          <ArrowUpDown className='ml-2 h-4 w-4 text-primary' />
        </button>
      );
    },
    cell: ({ row }) => {
      const state: string = row.getValue('state');
      return <Badge variant='secondary'>{state}</Badge>;
    },
  },
  {
    accessorKey: 'provider_fullname',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center gap-1'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Fournisseur
          <ArrowUpDown className='ml-2 h-4 w-4 text-primary' />
        </button>
      );
    },
  },
  {
    accessorKey: 'amount',
    header: 'Montant',
  },
  {
    accessorKey: 'created_at',
    header: 'Date de création',
  },
  {
    id: 'actions',
    // header: 'Actions',
    cell: ({ row }) => {
      const purchaseDocument = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='h-8 w-8 p-0 '>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(purchaseDocument.id)}
            >
              Voir les détails
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(purchaseDocument.id)}
            >
              Modifier
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
