// import React from 'react';
import { useAppSelector } from '@/hooks/useRedux';
import { cn } from '@/lib/utils';
import { toggle } from '@/redux/sidenav/sideNav.slice';
import {
  ArrowLeftRight,
  BookOpenText,
  BookUser,
  Boxes,
  FileBox,
  List,
  Menu,
  PackagePlus,
  PieChart,
  ReceiptText,
  Scroll,
  ScrollText,
  ShoppingCart,
  Store,
  Truck,
  // User,
  UserPlus,
  Users,
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const AsideNavigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const { isToggled } = useAppSelector((state) => state.sidenav);

  const GROUP_LINKS = [
    {
      groupName: 'Dashboard',
      groupIcon: <PieChart size={20} />,
      groupLink: '/dashboard',
      groupLinkIsActive: currentPath.startsWith('/dashboard'),
    },
    {
      groupName: 'Contacts',
      groupIcon: <BookUser size={20} />,
      groupLink: null,
      groupLinkIsActive: currentPath.startsWith('/contact'),
      groupLinks: [
        {
          to: '/contact/list',
          text: 'Contacts list',
          linkIcon: <List size={20} />,
          isActive: currentPath.startsWith('/contact/list'),
        },
        {
          to: '/contact/new',
          text: 'Add a contact',
          linkIcon: <UserPlus size={20} />,
          isActive: currentPath.startsWith('/contact/create'),
        },
      ],
    },
    // {
    //   groupName: 'Customers',
    //   groupIcon: <Users size={20} />,
    //   groupLink: null,
    //   groupLinkIsActive: currentPath.startsWith('/customer'),
    //   groupLinks: [
    //     {
    //       to: '/customer/list',
    //       text: 'Customers list',
    //       linkIcon: <List size={20} />,
    //       isActive: currentPath.startsWith('/customer/list'),
    //     },
    //     {
    //       to: '/customer/new',
    //       text: 'Add a customer',
    //       linkIcon: <UserPlus size={20} />,
    //       isActive: currentPath.startsWith('/customer/create'),
    //     },
    //   ],
    // },
    {
      groupName: 'Articles',
      groupIcon: <BookOpenText size={20} />,
      groupLink: null,
      groupLinkIsActive: currentPath.startsWith('/article'),
      groupLinks: [
        {
          to: '/article/list',
          text: 'Articles list',
          linkIcon: <List size={20} />,
          isActive: currentPath.startsWith('/article/list'),
        },
        {
          to: '/article/new',
          text: 'Add an article',
          linkIcon: <PackagePlus size={20} />,
          isActive: currentPath.startsWith('/article/new'),
        },
      ],
    },
    {
      groupName: 'Inventories',
      groupIcon: <Boxes size={20} />,
      groupLink: null,
      groupLinkIsActive: currentPath.startsWith('/inventory'),
      groupLinks: [
        {
          to: '/inventory/overview',
          text: 'Inventories overview',
          linkIcon: <FileBox size={20} />,
          isActive: currentPath.startsWith('/inventory/overview'),
        },
        {
          to: '/dashboard',
          text: 'Marchandise transfert',
          linkIcon: <ArrowLeftRight size={20} />,
          isActive: currentPath.startsWith('/dashboard'),
        },
      ],
    },
    {
      groupName: 'Purchase',
      groupIcon: <ShoppingCart size={20} />,
      groupLink: null,
      groupLinkIsActive: currentPath.startsWith('/purchase'),
      // cotation, commande, livraison, facture
      groupLinks: [
        {
          to: '/purchase/list',
          text: 'Documents list',
          linkIcon: <List size={20} />,
          isActive: currentPath.startsWith('/purchase/list'),
        },
        {
          to: '/purchase/document/quotation/new',
          text: 'Create a quotation',
          linkIcon: <Scroll size={20} />,
          isActive: currentPath.startsWith('/purchase/document/quotation/new'),
        },
        {
          to: '/purchase/document/delivery/new',
          text: 'Create a delivery',
          linkIcon: <Truck size={20} />,
          isActive: currentPath.startsWith('/purchase/document/delivery/new'),
        },
        {
          to: '/purchase/document/order/new',
          text: 'Create an order',
          linkIcon: <ReceiptText size={20} />,
          isActive: currentPath.startsWith('/purchase/document/order/new'),
        },
        {
          to: '/purchase/document/bill/new',
          text: 'Create a bill',
          linkIcon: <ScrollText size={20} />,
          isActive: currentPath.startsWith('/purchase/document/bill/new'),
        },
      ],
    },
    {
      groupName: 'Sale',
      groupIcon: <Store size={20} />,
      groupLink: null,
      groupLinkIsActive: currentPath.startsWith('/sale'),
      // devis, commande, livraison, facture
      groupLinks: [
        {
          to: '/sale/list',
          text: 'Documents list',
          linkIcon: <List size={20} />,
          isActive: currentPath.startsWith('/sale/list'),
        },
        {
          to: '/sale/document/quote/new',
          text: 'Create a quote',
          linkIcon: <Scroll size={20} />,
          isActive: currentPath.startsWith('/sale/document/quote/new'),
        },
        {
          to: '/sale/document/delivery/new',
          text: 'Create a delivery',
          linkIcon: <Truck size={20} />,
          isActive: currentPath.startsWith('/sale/document/delivery/new'),
        },
        {
          to: '/sale/document/order/new',
          text: 'Create an order',
          linkIcon: <ReceiptText size={20} />,
          isActive: currentPath.startsWith('/sale/document/order/new'),
        },
        {
          to: '/sale/document/bill/new',
          text: 'Create a bill',
          linkIcon: <ScrollText size={20} />,
          isActive: currentPath.startsWith('/sale/document/bill/new'),
        },
      ],
    },
  ];

  return (
    // bg-secondary text-secondary-foreground
    <div
      className={cn(
        'fixed z-30 left-0 top-[58px] bottom-0  dark:bg-secondary dark:text-secondary-foreground  flex-col flex-shrink  border-r py-4 border-zinc-200 dark:border-zinc-700',
        !isToggled && 'max-w-52 sm:w-full transition-all'
      )}
    >
      <div className='px-4 mb-3'>
        <button
          onClick={() => dispatch(toggle())}
          className='p-3 bg-secondary w-5 h-5 grid place-content-center'
        >
          <Menu size={14} />
        </button>
      </div>

      {GROUP_LINKS.map((group) => (
        <div
          key={group.groupName}
          className='relative grid text-sm group font-medium dark:font-normal'
        >
          {group.groupLink && (
            <Link
              to={group.groupLink}
              className={cn(
                ' flex gap-2 items-center border-l-4  border-transparent hover:border-primary hover:bg-background transition-all font-medium px-3.5 py-3 ',
                group.groupLinkIsActive &&
                  'border-l-4 border-primary bg-muted hover:bg-muted'
              )}
            >
              <span
                className={cn(
                  'text-foreground opacity-30 dark:opacity-50 dark:group-hover:opacity-100',
                  group.groupLinkIsActive && 'opacity-60 dark:opacity-100'
                )}
              >
                {group.groupIcon}
              </span>

              <span
                className={cn(
                  'ml-1 hidden dark:group-hover:opacity-100 transition-all',
                  !group.groupLinkIsActive && 'dark:opacity-60',
                  !isToggled && 'sm:inline-block '
                )}
              >
                {group.groupName}
              </span>
            </Link>
          )}
          {!group.groupLink && (
            <div
              className={cn(
                ' flex gap-2 items-center border-l-4 border-transparent hover:border-primary hover:bg-background  dark:opacity-50 dark:hover:opacity-100 transition-all font-medium px-3.5 py-3 select-none',
                group.groupLinkIsActive &&
                  'border-primary bg-muted hover:bg-muted  dark:opacity-100'
              )}
            >
              <span
                className={cn(
                  'text-foreground opacity-60 dark:opacity-100 mr-1 inline-block',
                  !group.groupLinkIsActive && 'opacity-30 dark:opacity-100'
                )}
              >
                {group.groupIcon}
              </span>

              <span
                className={cn(
                  'transition-all hidden',
                  !isToggled && 'sm:inline-block '
                )}
              >
                {group.groupName}
              </span>
            </div>
          )}
          {group.groupLinks && (
            <ul className='absolute  z-50 w-60  right-0 hidden dark:bg-secondary bg-white border dark:border-border border-l-border dark:border-l-secondary group-hover:flex flex-col translate-x-full top-0'>
              {group.groupLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'border-l-4 hover:border-primary border-transparent hover:bg-background inline-block',
                    link.isActive &&
                      'border-l-4 border-primary hover:bg-muted bg-muted'
                  )}
                >
                  <li
                    className={cn(
                      'flex items-center gap-3 px-3 whitespace-nowrap py-3 opacity-80 hover:opacity-100',
                      link.isActive && 'opacity-100'
                    )}
                  >
                    <span className='opacity-70'>{link.linkIcon}</span>
                    <span>{link.text}</span>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AsideNavigation;
