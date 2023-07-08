import Link from 'next/link';
import Image from 'next/image';
import LinkIcon from '../LinkIcon';

import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import { SidebarItems } from '@collections/listAdminDashboardCollections';

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const sidebarItems = SidebarItems;
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          {sidebarItems.map((item) => (
            <LinkIcon
              key={item.label}
              route={item.route}
              icon={item.icon}
              icon_size={item.icon_size}
            />
          ))}
        </div>
      </div>

      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default AdminSidebar;
