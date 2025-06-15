import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSideBar } from './components/app-sidebar';
import { getServerSession } from 'next-auth';

export default async function ConsoleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <div>
      <SidebarProvider>
        {session?.user && <AppSideBar />}
        <main className="flex flex-col w-screen">
          {session?.user && <SidebarTrigger className="ml-4" />}
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
