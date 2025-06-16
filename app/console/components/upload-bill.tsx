'use client';

import { extractBill } from '@/app/utils/extract-bill';
import { BillSchema } from '@/app/utils/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const UploadBillForm = () => {
  const [file, setFile] = useState<File | undefined | null>(undefined);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleBillUpload = async () => {
    const fileUrl = URL.createObjectURL(file!);
    try {
      setLoading(true);
      const llmResponse = await extractBill(file!);
      const extractedBill = BillSchema.parse(JSON.parse(llmResponse.text!));
      localStorage.setItem(
        'billdata',
        JSON.stringify({
          type: file?.type,
          url: fileUrl,
          data: extractedBill,
        })
      );
      setLoading(false);
      router.push(`/console/bill/preview`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="w-full lg:w-3/4 flex flex-col justify-center gap-4 px-3 py-4 h-full"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleBillUpload();
      }}
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="bill">Bill – PDF or Image</Label>
        <Input
          type="file"
          required
          name="bill"
          id="bill"
          onChange={(e) => {
            const file = e.target.files?.item(0);
            setFile(file);
          }}
        />
      </div>

      <Button variant="outline" type="submit" className="self-start w-1/2">
        {loading ? <Loader className="animate-spin" /> : <p>create</p>}
      </Button>
    </form>
  );
};
