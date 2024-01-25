import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className='min-h-screen w-full  flex flex-col px-4 gap-6 justify-center items-center'>
      <h1 className='font-black text-7xl text-primary'>404!</h1>
      <h4 className='text-xl'>There is nothing here {':('}</h4>
      <p>
        Go{' '}
        <Link to='/' className='text-primary underline'>
          home
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
