import { useAppSelector } from '@/hooks/useRedux';
import { cn } from '@/lib/utils';
import AsideNavigation from '@/pages/dashboard/_components/AsideNavigation';
import TopHeaderRightOptions from '@/pages/dashboard/_components/TopHeaderRightOptions';
import React from 'react';
import { Link } from 'react-router-dom';

type TLayout = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: TLayout) => {
  const { isToggled } = useAppSelector((state) => state.sidenav);

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex fixed top-0 right-0 left-0 z-30 justify-between items-center h-[58px] bg-zinc-800 border-b border-zinc-700'>
        <Link
          to='/'
          className='flex items-center text-zinc-800 gap-2 px-4 py-3'
        >
          <div className='w-10 aspect-auto'>
            <img
              src='/awale2.png'
              className='w-full h-full'
              alt='Awale Store Logo'
            />
          </div>
          <div className='flex flex-col translate-y-1 text-sm font-semibold'>
            <span className='text-primary'>awale</span>
            <span className='-translate-y-2 text-white'>store</span>
          </div>
        </Link>
        {/* <div className='flex items-center text-white gap-2 px-4 py-3'>
          <Link to='/' className='w-10 aspect-auto  text-zinc-300'>
            <img
              src='/awale2.png'
              className='w-full h-full'
              alt='Awale Store Logo'
            />
          </Link>
          <div className='flex flex-col translate-y-1 text-sm font-semibold'>
            <span className='text-primary'>awale</span>
            <span className='-translate-y-2'>store</span>
          </div>
        </div> */}
        <TopHeaderRightOptions />
      </header>
      <div className='flex flex-1'>
        <AsideNavigation />
        <main
          className={cn(
            'bg-secondary dark:bg-background ml-[56px]  pt-[58px] text-foreground transition-all overflow-auto flex-1',
            !isToggled && 'sm:ml-[207px]'
          )}
        >
          {children}
        </main>
      </div>
      {/* <footer>DASHBOARD FOOTER</footer> */}
    </div>
  );
};

export default DashboardLayout;
