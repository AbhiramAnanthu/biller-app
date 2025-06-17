import { PreviousPageButton } from '../components/previous-page-button';

export default function BillLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <div className="w-16 flex items-center self-start justify-start py-3 px-2">
        <PreviousPageButton />
      </div>
      <div className="flex items-center justify-center w-full h-[75vh]">
        {children}
      </div>
    </div>
  );
}
