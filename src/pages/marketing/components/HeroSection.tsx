import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className='overflow-hidden border-b border-zinc-200 isolate px-6 relative'>
      <div className='background-gradient-magic absolute inset-0 -z-10'></div>
      <div className='to-transparent via-zinc-50 from-emerald-50 bg-gradient-to-t absolute inset-0 -z-[5]'></div>
      <div className='max-w-6xl px-4 py-3 mx-auto text-center flex flex-col gap-6'>
        <div className='mt-8 sm:mt-16 mb-6 flex flex-col items-center'>
          <h1 className=' font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            Run your business like never before with a simple and opinionated
            ERP software.
          </h1>
          <p className='my-4 mb-6 text-sm sm:text-base'>
            Unlock the potential of streamlined collaboration and efficient
            operations with AwaleERP. Our comprehensive ERP solution is tailored
            for businesses of small to medium size, offering a powerful platform
            where administrators and collaborators can seamlessly manage every
            aspect of their operations.
          </p>
          <div className='flex flex-col sm:flex-row max-w-3xl items-center gap-4 mx-auto'>
            <Link className='w-full' to='/sign-in'>
              <Button className='w-full'>Start a free instance</Button>
            </Link>
            <Link className='w-full' to='/sign-in'>
              <Button className='w-full bg-white border border-zinc-200 hover:bg-zinc-200 text-zinc-800'>
                Run a demo
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className='rounded-xl lg:-mb-56 bg-white w-full aspect-video p-2 ring-1 ring-inset ring-gray-800/10 lg:rounded-2xl lg:p-4'> */}
        <div className='lg:-mb-56 bg-white w-full aspect-video p-2 ring-1 ring-inset ring-emerald-700/20 shadow-2xl shadow-emerald-300/40 lg:p-4'>
          {/* className='border border-zinc-200 lg:rounded-[10px] overflow-hidden' */}
          <img
            src='/landing-head-screenshot.jpeg'
            className='border border-zinc-200 overflow-hidden'
            alt='Dashboard description'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
