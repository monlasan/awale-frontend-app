import AsideNavigation from '@/pages/dashboard/_components/AsideNavigation';
import TopHeaderRightOptions from '@/pages/dashboard/_components/TopHeaderRightOptions';
import React from 'react';

type TLayout = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: TLayout) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex fixed top-0 right-0 left-0 z-30 justify-between items-center h-[58px] bg-zinc-800 border-b border-zinc-700'>
        <div className='flex items-center text-zinc-400 gap-2 px-4 py-3'>
          <div className='w-8 h-8 border-8 border-primary rounded-xl skew-x-12 -skew-y-6 text-zinc-300'></div>
          {/* Swoole */}
        </div>
        <TopHeaderRightOptions />
      </header>
      <div className='flex flex-1'>
        <AsideNavigation />
        <main className='bg-background ml-[56px] sm:ml-[207px] pt-[58px] text-foreground overflow-auto flex-1'>
          {children}
        </main>
      </div>
      {/* <footer>DASHBOARD FOOTER</footer> */}
    </div>
  );
};

export default DashboardLayout;
