import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatOption } from '@/lib/utils';
import { role_options } from '@/lib/constants';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Contact = {
  id: string;
  reference: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  avatar_url: string;
  role: ('ADMIN' | 'PROVIDER' | 'COMMERCIAL' | 'CONSTRUCTOR')[];
};

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: 'reference',
    header: 'Reference',
  },
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
          Full name
          <ArrowUpDown className='ml-2 h-4 w-4 text-primary' />
        </button>
      );
    },
    cell: ({ row }) => {
      const fullName: string =
        row.original.first_name + ' ' + row.original.last_name;
      const avatar_url: string = row.original.avatar_url;
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
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center gap-1'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className='ml-2 h-4 w-4 text-primary' />
        </button>
      );
    },
  },
  {
    accessorKey: 'phone_number',
    header: 'Phone number',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role: string = row.getValue('role');
      return (
        <Badge variant='outline'>{formatOption(role, role_options)}</Badge>
        // <div className='flex items-center gap-2 flex-wrap'>
        //   {roles.map((role: string) => (
        //     <Badge key={role} variant='secondary'>
        //       {role}
        //     </Badge>
        //   ))}
        // </div>
      );
    },
  },
  {
    id: 'actions',
    // header: 'Actions',
    cell: ({ row }) => {
      const contact = row.original;

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
              onClick={() => navigator.clipboard.writeText(contact.id)}
            >
              USE ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Modifier</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
