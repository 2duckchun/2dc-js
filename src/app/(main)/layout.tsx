import type { Metadata } from 'next';

import { FunctionComponent, PropsWithChildren } from 'react';

import { MainBody } from '@/containers/layout/MainBody/MainBody';
import { TopNav } from '@/containers/layout/TopNav';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
interface layoutProps extends PropsWithChildren {}

const layout: FunctionComponent<layoutProps> = ({ children }) => {
  return (
    <>
      <TopNav />
      <MainBody>{children}</MainBody>
    </>
  );
};

export default layout;