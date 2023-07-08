import Navbar from '@components/elements/navbar/Navbar';
import LoginModal from '@components/modals/LoginModal';
import RegisterModal from '@components/modals/RegisterModal';
import SearchModal from '@components/modals/SearchModal';

import ToasterProvider from '@providers/ToasterProvider';
import getCurrentUser from '@actions/getCurrentUser';
import ClientOnly from '@components/commons/ClientOnly';

import '@styles/globals.css';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <>
      <ClientOnly>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
      </ClientOnly>
      <div className="pb-20 pt-28">{children}</div>
    </>
  );
}
