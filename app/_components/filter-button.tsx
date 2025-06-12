'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

export function FilterButton({
  title,
  items,
  stateVar,
  stateCallback,
}: {
  title: string;
  items: Array<string>;
  stateVar: string;
  stateCallback: Dispatch<SetStateAction<string>>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="group/collapsible cursor-pointer w-32"
      >
        <Button variant="outline" className="">
          <span>{stateVar}</span>
          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <div className="grid grid-cols-1 gap-1 max-h-[250px]">
          {items.map((item, index) => {
            return (
              <DropdownMenuItem asChild key={index} className="">
                <Button
                  variant="ghost"
                  className="text-start cursor-pointer px-1 py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    stateCallback(item);
                  }}
                >
                  {item}
                </Button>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
