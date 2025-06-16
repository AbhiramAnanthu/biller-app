'use client';

import { useSession } from 'next-auth/react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSideBar } from './components/app-sidebar';

export default function ConsoleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = useSession();
  return (
    <div className="">
      <SidebarProvider>
        {data?.user && <AppSideBar />}
        <main className="flex flex-col w-full h-full min-h-screen px-4 py-3 gap-5 items-start justify-start">
          {data?.user && <SidebarTrigger className="" />}
          <div className="border-2 w-full h-[80vh] flex items-center justify-center rounded-md">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
