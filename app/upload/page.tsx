'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useState } from 'react';
import { extractBill } from './utils/extract-bill';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';

export default function UploadBill() {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const billUploadHandle = async () => {
    setLoading(true);

    try {
      const response = await extractBill(file!);

      console.log(response.text);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center">
      <form
        className="border rounded-lg shadow-md px-6 py-8 flex flex-col items-center justify-center gap-4 w-full max-w-md mx-3 lg:mx-0"
        onSubmit={async (e) => {
          e.preventDefault();
          await billUploadHandle();
        }}
      >
        <h1 className="mb-2 text-2xl font-semibold text-center py-2">
          Upload your bill
        </h1>
        <Input
          type="file"
          className="w-full mb-2"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
          required
        />
        <Button
          type="submit"
          variant="outline"
          className="w-full"
          disabled={loading}
        >
          {loading == false ? (
            <span>submit</span>
          ) : (
            <Loader className="animate-spin" />
          )}
        </Button>
      </form>
    </div>
  );
}
