import DashboardLayout from './DashboardLayout';

const ErrorDashboardLayout = () => {
  return (
    <DashboardLayout>
      <div className='p-4 h-full flex flex-col'>
        <div className='py-4 text-center border-destructive border bg-destructive/10 text-destructive'>
          <p>Something went wrong !</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ErrorDashboardLayout;
