import ThemeToggle from '@/components/theme-toggle';
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
import { Bell, ChevronDown, Cog, LogOut } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { signOut } from '@/redux/user/user.slice';
import { toast } from 'sonner';
import authService from '@/services/http/auth.service';

const TopHeaderRightOptions = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      dispatch(signOut());
      await authService.logout();
      toast.success('Disconnected successfully!');
      // Hpow1O4k
    } catch (err: any) {
      toast.error(err);
    }
  };

  return (
    <div className='flex items-center px-4 gap-2 text-zinc-300'>
      <ThemeToggle />
      {/* <Button variant='ghost' size='icon' className='relative'>
        <Cog size={21} />
        <span className='sr-only'>Settings Icon</span>
      </Button> */}
      <Button variant='ghost' size='icon' className='relative'>
        <Bell size={21} />
        <span className='absolute top-2 right-2 animate-ping h-2.5 w-2.5 rounded-full bg-primary'></span>
        <span className='sr-only'>Notifications Icon</span>
      </Button>
      <Avatar className='ml-3'>
        <AvatarImage
          src={currentUser?.user.avatar_url}
          alt={'@' + currentUser?.user.first_name + currentUser?.user.last_name}
        />
        <AvatarFallback className='text-black dark:text-zinc-200'>
          {currentUser?.user.first_name[0]}
          {currentUser?.user.last_name[0]}
        </AvatarFallback>
      </Avatar>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='link'
            className='ml-3 decoration-transparent text-zinc-200 gap-2 px-1'
          >
            {currentUser?.user && (
              <Avatar>
                <AvatarImage
                  src={currentUser?.user.avatar_url}
                  alt={
                    '@' +
                    currentUser?.user.first_name +
                    currentUser?.user.last_name
                  }
                />
                <AvatarFallback className='text-black dark:text-zinc-200'>
                  {currentUser?.user.first_name[0]}
                  {currentUser?.user.last_name[0]}
                </AvatarFallback>
              </Avatar>
            )}
            <ChevronDown size={21} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel className='sr-only'>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='p-0'>
            <Button
              className='w-full'
              variant='destructive'
              onClick={handleSignOut}
              size='sm'
            >
              <LogOut size={21} className='mr-2 ' />
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};

export default TopHeaderRightOptions;
