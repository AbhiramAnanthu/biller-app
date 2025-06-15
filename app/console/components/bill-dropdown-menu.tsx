import { ReceiptIndianRupee } from 'lucide-react';
import { SidebarCollapsibleSection } from './drop-down-menu';

export function BillDropdownMenu() {
  const billDropdownMenuItems = {
    title: 'Bills',
    icon: <ReceiptIndianRupee />,
    items: [
      {
        itemName: 'upcoming bills',
        href: '/bills/due-date/future',
      },
      {
        itemName: 'recurring bills',
        href: '/bills/recurring/',
      },
      {
        itemName: 'paid bills',
        href: '/bills/paid',
      },
    ],
  };
  return (
    <>
      {' '}
      <SidebarCollapsibleSection {...billDropdownMenuItems} />
    </>
  );
}
