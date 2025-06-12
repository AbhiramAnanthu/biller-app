import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export function UserDropDown({
  src,
  fallback,
}: {
  src: string;
  fallback: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 rounded-full h-10 w-10 flex items-center justify-center"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={src} alt={fallback} />
            <AvatarFallback>
              {fallback.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>
          <Button
            variant="link"
            className="w-full justify-start px-0 py-0 h-auto"
          >
            Profile
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant="link"
            className="w-full justify-start px-0 py-0 h-auto"
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
