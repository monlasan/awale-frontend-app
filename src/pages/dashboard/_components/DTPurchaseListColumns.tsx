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
import { Link } from 'react-router-dom';
import { formatDate, formatOption } from '@/lib/utils';
import { document_type, purchase_bill_state } from '@/lib/constants';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Purchase = {
  id: string;
  reference: string;
  type: string;
  articles_price: number;
  status: 'IN_WRITTING' | 'IS_COMPLETED';
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
    header: 'Document',
    cell: ({ row }) => {
      const type: string = row.getValue('type');
      return (
        <Badge variant='outline'>{formatOption(type, document_type)}</Badge>
      );
    },
  },
  {
    accessorKey: 'status',
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
      const status: string = row.getValue('status');
      return (
        <Badge variant='secondary'>
          {formatOption(status, purchase_bill_state)}
        </Badge>
      );
    },
  },
  // {
  //   accessorKey: 'provider_fullname',
  //   header: ({ column }) => {
  //     return (
  //       <button
  //         className='flex items-center gap-1'
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //       >
  //         Fournisseur
  //         <ArrowUpDown className='ml-2 h-4 w-4 text-primary' />
  //       </button>
  //     );
  //   },
  // },
  {
    accessorKey: 'articles_price',
    header: 'Amount',
  },
  {
    accessorKey: 'created_at',
    header: 'Created at',
    cell: ({ row }) => {
      return <time>{formatDate(row.getValue('created_at'))}</time>;
    },
  },
  {
    accessorKey: 'updated_at',
    header: 'Last update',
    cell: ({ row }) => {
      return <time>{formatDate(row.getValue('updated_at'))}</time>;
    },
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
            <Link to={'/purchase/document/' + purchaseDocument.id}>
              <DropdownMenuItem>Voir les détails</DropdownMenuItem>
            </Link>
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
