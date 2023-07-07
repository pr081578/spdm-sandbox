'use client';

import { useRouter } from 'next/navigation';
import MenuItem from './MenuItem';
import { listNavbarItems } from '@collections/listNavbarItems';

const NavbarItem = () => {
  const menuItemms = listNavbarItems;
  const router = useRouter();
  return (
    <>
      {menuItemms.map((item) => (
        <MenuItem
          key={item.label}
          label={item.label}
          onClick={() => router.push(`${item.route}`)}
        />
      ))}
    </>
  );
};

export default NavbarItem;
