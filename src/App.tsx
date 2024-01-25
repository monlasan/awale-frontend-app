// import { Button } from '@/components/ui/button';
// import ThemeToggle from '@/components/theme-toggle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/private-route';
import Home from './pages/marketing/Home';
import About from './pages/marketing/About';
import SignIn from './pages/marketing/SignIn';
import SignUp from './pages/marketing/SignUp';
import Profile from './pages/dashboard/Profile';

import Dashboard from './pages/dashboard';
import ThemeToggle from './components/theme-toggle';
import ContactList from './pages/dashboard/directory/ContactList';
import PurchaseList from './pages/dashboard/purchase/PurchaseList';
import SaleList from './pages/dashboard/sale/SaleList';
import ProductList from './pages/dashboard/product/ProductList';
import AlreadyLoggedIn from './components/already-logged-in';
import Notfound from './pages/marketing/Notfound';
import NewContact from './pages/dashboard/directory/NewContact';

function App() {
  return (
    /**
     * TODO: here add an useEffect once to check if the user and token are present in localstorage... during the verification show a loader
     */
    <>
      <BrowserRouter>
        <Routes>
          {/* Marketing pages */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route element={<AlreadyLoggedIn />}>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            {/* CONTACT */}
            <Route path='/contact/list' element={<ContactList />} />
            <Route path='/contact/new' element={<NewContact />} />
            {/* PRODUCT */}
            <Route path='/product/list' element={<ProductList />} />
            {/* PURCHASE */}
            <Route path='/purchase/list' element={<PurchaseList />} />
            {/* SALE */}
            <Route path='/sale/list' element={<SaleList />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
        {/* <header className='bg-background flex flex-wrap gap-4 items-center justify-center py-2'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/sign-in'>SignIn</Link>
          <Link to='/sign-up'>SignUp</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/chinchilla'>NOTFOUND</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <ThemeToggle />
        </header> */}
      </BrowserRouter>
      {/* <h1 className='text-3xl font-bold'>Hello world!</h1>
      <div className='flex'>
        <Button>Click me</Button>
        <ThemeToggle />
      </div> */}
    </>
  );
}

export default App;
