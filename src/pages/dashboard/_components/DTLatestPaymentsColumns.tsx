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
import { formatDate, formatPrice } from '@/lib/utils';

// import { Badge } from '@/components/ui/badge';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  folder: any;
  amount: number;
  created_at: string;
  updated_at: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'first_name',
    header: ({ column }) => {
      return (
        // <Button
        //   variant='ghost'
        //   onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        // >
        // {/* </Button> */}

        <button
          className='flex items-center gap-1'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Client
          <ArrowUpDown className='ml-2 h-4 w-4 text-primary' />
        </button>
      );
    },
    cell: ({ row }) => {
      const fullName: string =
        row.original.folder.client.first_name +
        ' ' +
        row.original.folder.client.last_name;
      const avatar_url: string = row.original.folder.client.avatar_url;
      return (
        <div className='flex items-center gap-2'>
          <Avatar>
            {avatar_url.length > 0 && (
              <AvatarImage src={avatar_url} alt={'@' + fullName} />
            )}
            <AvatarFallback className='text-black dark:text-zinc-200'>
              {fullName.split(' ')[0][0]}
              {fullName.split(' ')[1][0]}
            </AvatarFallback>
          </Avatar>
          <span>{fullName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'folder',
    header: 'Folder',
    cell: ({ row }) => {
      const folder = row.original.folder;
      return <span>{folder.reference}</span>;
    },
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      return <span>{formatPrice(row.getValue('amount'))}</span>;
    },
  },
  {
    accessorKey: 'created_at',
    header: 'Created at',
    cell: ({ row }) => {
      return <time>{formatDate(row.getValue('created_at'))}</time>;
    },
  },
  // {
  //   accessorKey: 'updated_at',
  //   header: 'Last update',
  //   cell: ({ row }) => {
  //     return <time>{formatDate(row.getValue('updated_at'))}</time>;
  //   },
  // },
  // {
  //   id: 'actions',
  //   // header: 'Actions',
  //   cell: ({ row }) => {
  //     const item = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant='outline' className='h-8 w-8 p-0 '>
  //             <span className='sr-only'>Open menu</span>
  //             <MoreHorizontal className='h-4 w-4' />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align='end'>
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(item.id)}
  //           >
  //             <Eye className='mr-2 h-4 w-4' /> See details
  //           </DropdownMenuItem>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(item.id)}
  //           >
  //             <Edit className='mr-2 h-4 w-4' /> Edit
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
