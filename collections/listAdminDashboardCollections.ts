import { RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

export const NavbarItems = [
  {
    label: 'Dashbord',
  },
  {
    label: 'Welcome back,',
  },
];

export const SidebarItems = [
  {
    label: 'Dashboard',
    icon: RxDashboard,
    icon_size: 20,
    route: '/',
  },
  {
    label: 'Users',
    icon: RxPerson,
    icon_size: 20,
    route: '/user',
  },
  {
    label: 'orders',
    icon: HiOutlineShoppingBag,
    icon_size: 20,
    route: '/orders',
  },
  {
    label: 'Settings',
    icon: FiSettings,
    icon_size: 20,
    route: '/settings',
  },
];

export const TopCardItems = [
  {
    label: 'Daily Revenue',
    value: '8,203',
    percentage: 19,
    css: 'lg:col-span-2 col-span-1',
  },
  {
    label: 'Weekly Revenue',
    value: '67,203',
    percentage: 9,
    css: 'lg:col-span-2 col-span-1',
  },
  {
    label: 'Monthly Revenue',
    value: '309,203',
    percentage: 23,
    css: '',
  },
];
