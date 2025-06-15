import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ReceiptIndianRupee, SidebarCloseIcon } from 'lucide-react';
import Link from 'next/link';
import { BillDropdownMenu } from './bill-dropdown-menu';
import { CategoryDropdownMenu } from './category-dropdown-menu';
import { AnalyticDropdownMenu } from './analytic-dropdown-menu';

export function AppSideBar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="mt-5">
        <h1>Budget</h1>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup>
          <BillDropdownMenu />
          <CategoryDropdownMenu />
          <AnalyticDropdownMenu />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenuItem>settings</SidebarMenuItem>
          <SidebarMenuItem>help</SidebarMenuItem>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
