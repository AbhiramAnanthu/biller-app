'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const PreviousPageButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeft />
    </Button>
  );
};
