import ThemeToggle from '@/components/theme-toggle';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>HOME</h1>
      <div className='bg-background flex flex-wrap gap-4 items-center justify-center py-2'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/sign-in'>SignIn</Link>
        <Link to='/sign-up'>SignUp</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/chinchilla'>NOTFOUND</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
