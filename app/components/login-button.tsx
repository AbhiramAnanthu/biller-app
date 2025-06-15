'use client';

import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { signIn } from 'next-auth/react';
import { ReactNode } from 'react';

export const LoginButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className={className ? className : 'cursor-pointer'}>
        Login
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Login</DialogTitle>
        <Button
          onClick={async () => {
            await signIn('google', { callbackUrl: '/' });
          }}
        >
          {children}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
