import AdminNavber from '@components/elements/navbar/dashboards/AdminNavbar';
import AdminSidebar from '@components/elements/sidebar/dashboard/AdminSidebar';

import ClientOnly from '@components/commons/ClientOnly';
import TopCards from '@components/elements/cards/TopCards';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminSidebar>
        <AdminNavber />
        <TopCards />
      </AdminSidebar>

      <div className="pb-20 pt-28">{children}</div>
    </div>
  );
}
