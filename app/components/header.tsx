import { ModeToggle } from './mode-toggle';
import { getServerSession } from 'next-auth';
import { ProfileDropdown } from './profile-dropdown';
import { Menu } from 'lucide-react';
import { LoginButton } from './login-button';
import Link from 'next/link';

export async function Header() {
  const session = await getServerSession();
  return (
    <header className="flex flex-row justify-between items-center w-full h-full gap-2 px-3 py-4">
      <h1 className="mx-4 md:text-2xl">
        <Link href="/">BillerApp</Link>
      </h1>
      <div className="flex gap-3 items-center mx-4">
        <ModeToggle />
        {session?.user ? (
          <ProfileDropdown url={session.user.image!} alt={session.user.name!} />
        ) : (
          <LoginButton className="">Login With Google</LoginButton>
        )}
      </div>
    </header>
  );
}
