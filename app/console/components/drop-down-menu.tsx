import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

type MenuItem = {
  itemName: string;
  href: string;
};

export const SidebarCollapsibleSection = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: Array<MenuItem>;
}) => {
  return (
    <Collapsible className="w-full group/collapsible">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex justify-between items-center px-2"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="text-sm font-medium">{title}</span>
          </div>
          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="flex flex-col gap-1 pl-4 transition-all ease-in-out delay-200">
        {items.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="px-2 flex justify-start"
          >
            <Link href={item.href} className="text-sm">
              {item.itemName}
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
