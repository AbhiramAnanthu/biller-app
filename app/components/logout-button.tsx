'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
  return (
    <Button
      variant="ghost"
      className="flex justify-start px-2"
      onClick={async () => {
        await signOut();
      }}
    >
      Logout
    </Button>
  );
};
