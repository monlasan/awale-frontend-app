// import { Button } from '@/components/ui/button';
// import ThemeToggle from '@/components/theme-toggle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AlreadyLoggedIn from './components/already-logged-in';
import PrivateRoute from './components/private-route';
import Home from './pages/marketing/Home';
import About from './pages/marketing/About';
import SignIn from './pages/marketing/SignIn';
import SignUp from './pages/marketing/SignUp';
import Profile from './pages/dashboard/Profile';

import Dashboard from './pages/dashboard';
import ThemeToggle from './components/theme-toggle';
import ContactList from './pages/dashboard/contact/ContactList';
import PurchaseList from './pages/dashboard/purchase/PurchaseList';
import SaleList from './pages/dashboard/sale/SaleList';
import ArticleList from './pages/dashboard/article/ArticleList';
import Notfound from './pages/marketing/Notfound';
import NewContact from './pages/dashboard/contact/NewContact';
import NewArticle from './pages/dashboard/article/NewArticle';
import InventoryOverview from './pages/dashboard/inventory/InventoryOverview';
import PurchaseDocument from './pages/dashboard/purchase/PurchaseDocument';
import PurchaseDocumentNew from './pages/dashboard/purchase/PurchaseDocumentNew';
import SaleDocumentNew from './pages/dashboard/sale/SaleDocumentNew';

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
            {/* ARTICLES */}
            <Route path='/article/list' element={<ArticleList />} />
            <Route path='/article/new' element={<NewArticle />} />
            {/* INVENTORY */}
            <Route path='/inventory/overview' element={<InventoryOverview />} />
            {/* PURCHASE & SALE */}
            <Route
              path='/document/:documentId'
              element={<PurchaseDocument />}
            />
            {/* PURCHASE */}
            <Route path='/purchase/list' element={<PurchaseList />} />
            <Route
              path='/purchase/document/quotation/new'
              element={
                <PurchaseDocumentNew documentToCreate='purchase-quotation' />
              }
            />
            <Route
              path='/purchase/document/delivery/new'
              element={
                <PurchaseDocumentNew documentToCreate='purchase-delivery' />
              }
            />
            <Route
              path='/purchase/document/order/new'
              element={
                <PurchaseDocumentNew documentToCreate='purchase-order' />
              }
            />
            <Route
              path='/purchase/document/bill/new'
              element={<PurchaseDocumentNew documentToCreate='purchase-bill' />}
            />
            {/* SALE */}
            <Route path='/sale/list' element={<SaleList />} />
            <Route
              path='/sale/document/quote/new'
              element={<SaleDocumentNew documentToCreate='sale-quote' />}
            />
            <Route
              path='/sale/document/delivery/new'
              element={<SaleDocumentNew documentToCreate='sale-delivery' />}
            />
            <Route
              path='/sale/document/order/new'
              element={<SaleDocumentNew documentToCreate='sale-order' />}
            />
            <Route
              path='/sale/document/bill/new'
              element={<SaleDocumentNew documentToCreate='sale-bill' />}
            />
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
