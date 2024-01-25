import { useAppSelector } from '@/hooks/useRedux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useAppSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' replace />;
}
// https://www.robinwieruch.de/react-router-private-routes/
