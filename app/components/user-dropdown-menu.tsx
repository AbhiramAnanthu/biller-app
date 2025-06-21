'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export const UserDropdownMenu = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{alt.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex gap-3 flex-col items-start py-2 px-2">
        <DropdownMenuItem asChild className="px-0">
          <Button variant="ghost" className="w-full px-0">
            <Link href="/profile"> profile</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="px-2">
          <Button variant="ghost" className="w-full px-2">
            <a href="/auth/logout">logout</a>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
