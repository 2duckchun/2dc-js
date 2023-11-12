import { TopNav } from '@/components/layouts/TopNav';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNav />
      <div>
        <div className='fixed h-full w-[250px]  shadow-2xl '>사이드바</div>
        {children}
      </div>
    </>
  );
}
