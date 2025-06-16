import { Plus } from 'lucide-react';
import { SidebarCollapsibleSection } from './drop-down-menu';

export function AddDropdownMenu() {
  const billDropdownMenuItems = {
    title: 'New',
    icon: <Plus />,
    items: [
      {
        itemName: 'Bill',
        href: '/console/bill/new',
      },
      {
        itemName: 'category',
        href: '/category/new',
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
