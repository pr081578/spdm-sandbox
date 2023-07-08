import { NavbarItems } from '@collections/listAdminDashboardCollections';

const AdminNavber = () => {
  const navbarItems = NavbarItems;
  return (
    <div className="flex justify-between px-4 pt-4">
      {navbarItems.map((item) => (
        <div key={item.label}>{item.label}</div>
      ))}
    </div>
  );
};

export default AdminNavber;
