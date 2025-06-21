import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { UserDropdownMenu } from './user-dropdown-menu';
import { auth0 } from '@/lib/auth0';
import { Button } from '@/components/ui/button';

export const NavBar = async () => {
  const session = await auth0.getSession();
  return (
    <nav className="w-full flex items-center justify-around px-3 py-4">
      <Link href="/">
        <h1>BillerApp</h1>
      </Link>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        {session?.user ? (
          <UserDropdownMenu
            src={session.user.picture!}
            alt={session.user.name?.slice(0, 2)!}
          />
        ) : (
          <Button>
            <a href="/auth/login">Login</a>
          </Button>
        )}
      </div>
    </nav>
  );
};
