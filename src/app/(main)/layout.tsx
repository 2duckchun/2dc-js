import { TopNav } from '@/components/layouts/TopNav';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
}
