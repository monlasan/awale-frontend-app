import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='border-b border-zinc-200 sticky inset-x-0 top-0 z-30 w-full bg-white/60 backdrop-blur-lg transition-all'>
      <div className='max-w-6xl px-4 py-3 mx-auto flex items-center justify-between'>
        {/* <Link to='/'>
            <span className='text-primary font-bold'>awale</span>.store
          </Link> */}
        <Link to='/' className='flex items-center text-zinc-800 gap-2'>
          <div className='w-10 aspect-auto'>
            <img
              src='/awale3.png'
              className='w-full h-full'
              alt='Awale Store Logo'
            />
          </div>
          <div className='flex flex-col translate-y-1 text-sm font-semibold'>
            <span className='text-primary'>awale</span>
            <span className='-translate-y-2'>store</span>
          </div>
        </Link>
        <nav className='flex items-center gap-6'>
          <ul className='flex items-center gap-6'>
            {/* <li>
              <Link to='/'>Pricing</Link>
            </li> */}
            {/* <li>
              <Link to='/#features'>Features</Link>
            </li> */}
          </ul>
          <Link to='/sign-in'>
            <Button size='sm'>Log in</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
