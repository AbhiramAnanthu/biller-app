'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';

export function SignIn() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
      <Dialog>
        <DialogTrigger className="">Login</DialogTrigger>
        <DialogContent className="w-[400px] h-[200px] flex justify-center items-center px-3 py-4">
          <DialogHeader>
            <DialogTitle className="text-center mb-3">Login</DialogTitle>
            <DialogDescription className="self-place-center flex justify-center">
              <Button
                variant="outline"
                className="py-3"
                onClick={() => {
                  signInWithGoogle();
                }}
              >
                <Image
                  src="/google-icon.svg"
                  alt="google-icon"
                  width={32}
                  height={32}
                />
                Sign in with google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  );
}
