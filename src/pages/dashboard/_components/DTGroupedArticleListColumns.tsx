import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, Eye, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';

// import { Badge } from '@/components/ui/badge';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Article = {
  id: string;
  reference: string;
  name: string;
  quantity: number;
  total_price: number;
  photo_url: string | null;
  created_at: string;
  updated_at: string;
};

export const columns: ColumnDef<Article>[] = [
  // {
  //   accessorKey: 'reference',
  //   header: 'Reference',
  // },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center gap-1'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Article
          <ArrowUpDown className='ml-2 h-4 w-4 text-primary' />
        </button>
      );
    },
    cell: ({ row }) => {
      const name: string = row.getValue('name');
      const photo_url = row.original.photo_url;
      return (
        <div className='flex items-center gap-2'>
          <>
            <Avatar>
              <AvatarImage
                src={
                  photo_url && photo_url.length > 0
                    ? photo_url
                    : 'https://via.placeholder.com/200x200.png'
                }
                alt={'@' + name}
              />
              <AvatarFallback className='text-black uppercase dark:text-zinc-200'>
                {name[0] + '' + name[1]}
              </AvatarFallback>
            </Avatar>
          </>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'quantity',
    header: 'Qty',
    cell: ({ row }) => {
      return <span>x{row.getValue('quantity')}</span>;
    },
  },
  {
    accessorKey: 'total_price',
    header: 'Total price',
  },
  // {
  //   accessorKey: 'created_at',
  //   header: 'Created at',
  //   cell: ({ row }) => {
  //     return <time>{formatDate(row.getValue('created_at'))}</time>;
  //   },
  // },
  // {
  //   accessorKey: 'updated_at',
  //   header: 'Last update',
  //   cell: ({ row }) => {
  //     return <time>{formatDate(row.getValue('updated_at'))}</time>;
  //   },
  // },
  {
    id: 'actions',
    // header: 'Actions',
    cell: ({ row }) => {
      const item = row.original;

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
              onClick={() => navigator.clipboard.writeText(item.id)}
            >
              <Eye className='mr-2 h-4 w-4' /> See details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(item.id)}
            >
              <Edit className='mr-2 h-4 w-4' /> Edit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
