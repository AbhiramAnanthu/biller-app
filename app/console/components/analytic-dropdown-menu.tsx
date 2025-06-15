import { ChartArea } from 'lucide-react';
import { SidebarCollapsibleSection } from './drop-down-menu';

export function AnalyticDropdownMenu() {
  const analyticDropdownMenuItems = {
    title: 'Analytics',
    icon: <ChartArea />,
    items: [
      {
        itemName: 'Monthly Report',
        href: '/analytics/report/monthly/?current=true',
      },
      {
        itemName: 'Spending Trends',
        href: '/analytics/trends/spending',
      },
      {
        itemName: 'Budget',
        href: '/analytics/budget',
      },
      {
        itemName: 'Budget vs Actual',
        href: '/analytics/budget-vs-actual',
      },
    ],
  };
  return (
    <>
      <SidebarCollapsibleSection {...analyticDropdownMenuItems} />
    </>
  );
}
