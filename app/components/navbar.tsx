import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { UserDropdownMenu } from './user-dropdown-menu';

export const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-around px-3 py-4">
      <Link href="/">
        <h1>BillerApp</h1>
      </Link>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        <UserDropdownMenu
          src="https://avatars.githubusercontent.com/u/162581534?v=4"
          alt="AB"
        />
      </div>
    </nav>
  );
};
