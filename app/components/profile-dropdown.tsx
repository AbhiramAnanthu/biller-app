import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Profile } from './profile';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoutButton } from './logout-button';

export async function ProfileDropdown({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Profile src={url} alt={alt} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2" align="end">
        <DropdownMenuItem asChild>
          <Button variant="link" className="flex justify-start px-2">
            <Link href="/">Profile</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
