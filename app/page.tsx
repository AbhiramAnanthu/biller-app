'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import { LoginPrompt } from './_components/login-prompt';
import { BillDisplay } from './_components/home';
import { Loader } from 'lucide-react';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if (error) return <p>{error.message}</p>;
  if (loading)
    return (
      <div className="w-full h-[90vh] flex justify-center items-center">
        <Loader className="animate-spin place-self-center" />
      </div>
    );
  if (!user) return <LoginPrompt />;
  return <BillDisplay />;
}
