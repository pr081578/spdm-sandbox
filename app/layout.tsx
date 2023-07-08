import { Nunito } from 'next/font/google';

import Navbar from '@components/elements/navbar/Navbar';
import LoginModal from '@components/modals/LoginModal';
import RegisterModal from '@components/modals/RegisterModal';
import SearchModal from '@components/modals/SearchModal';

import ToasterProvider from '@providers/ToasterProvider';

import '@styles/globals.css';
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '@components/commons/ClientOnly';

export const metadata = {
  title: 'SPDM',
  description: 'Car Sharing Depot - Fleet Management Services',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <div className="pb-20 pt-2">{children}</div>
      </body>
    </html>
  );
}
