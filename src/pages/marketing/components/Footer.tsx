import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=' pb-12 pt-4 bg-white border-zinc-200'>
      <div className='max-w-6xl px-4 py-3 mx-auto flex items-center justify-between'>
        <Link to='/' className='flex items-center text-zinc-800 gap-2'>
          <div className='w-10 aspect-auto'>
            <img
              src='/awale4.png'
              className='w-full h-full'
              alt='Awale Store Logo black white'
            />
          </div>
          <div className='flex flex-col translate-y-1 text-sm font-semibold'>
            <span>awale</span>
            <span className='-translate-y-2'>store</span>
          </div>
        </Link>
        <div>
          © {new Date().getFullYear()} awale.store —{' '}
          <Link className='underline' to='/terms'>
            Terms
          </Link>{' '}
          &{' '}
          <Link className='underline' to='/privacy'>
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
