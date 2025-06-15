'use client';

import { extractBill } from '@/app/utils/extract-bill';
import { BillSchema } from '@/app/utils/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export const UploadBillForm = () => {
  const [file, setFile] = useState<File | undefined | null>(undefined);

  const handleBillUpload = async () => {
    try {
      const llmResponse = await extractBill(file!);
      const extractedBill = BillSchema.parse(JSON.parse(llmResponse.text!));
      console.log(extractedBill);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center gap-4 px-3 py-4 h-full"
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

      <Button variant="ghost" type="submit" className="self-center">
        Submit
      </Button>
    </form>
  );
};
