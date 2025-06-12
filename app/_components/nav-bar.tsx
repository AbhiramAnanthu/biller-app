'use client';

import { Plus } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SignIn } from './signin';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { UserDropDown } from './user-dropdown';

export function NavBar() {
  const [user] = useAuthState(auth);

  const AccessPoint = () => {
    return user ? (
      <UserDropDown src={user.photoURL!} fallback={user.displayName!} />
    ) : (
      <SignIn />
    );
  };

  return (
    <nav className="mx-3">
      <div className="flex flex-col lg:flex-row justify-between items-center px-3 py-4 gap-2">
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl">BillerApp</h1>
        </Link>
        <div className="flex flex-row justify-between items-center gap-3">
          <div>
            <ModeToggle />
          </div>
          {user ? (
            <Button className="" variant="ghost" asChild>
              <Link href="/upload">
                <Plus />
              </Link>
            </Button>
          ) : (
            <></>
          )}
          <AccessPoint />
        </div>
      </div>
      <hr />
    </nav>
  );
}
