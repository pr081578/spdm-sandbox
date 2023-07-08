/* eslint-disable @next/next/no-async-client-component */
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = async () => {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      router.push('/home');
    }
  }, [router]);

  return <>Welcome to SPDM</>;
};

export default Page;
