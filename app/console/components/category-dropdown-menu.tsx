import { Shapes } from 'lucide-react';
import { SidebarCollapsibleSection } from './drop-down-menu';

export function CategoryDropdownMenu() {
  const categoryDropdownMenuItems = {
    title: 'Category',
    icon: <Shapes />,
    items: [
      {
        itemName: 'Expense Categories',
        href: '/categories/expense',
      },
      {
        itemName: 'Income Categories',
        href: '/categories/income',
      },
      {
        itemName: 'Manage Categories',
        href: '/categories/manage',
      },
      {
        itemName: 'summary',
        href: '/category/summary',
      },
    ],
  };
  return (
    <>
      <SidebarCollapsibleSection {...categoryDropdownMenuItems} />
    </>
  );
}
