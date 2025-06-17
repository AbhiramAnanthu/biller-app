'use client';

import { extractBill } from '@/app/utils/extract-bill';
import { BillSchema } from '@/app/utils/schema';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronDown, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export const UploadBillForm = () => {
  const categoryList = ['general', 'internet', 'groceries'];

  const [file, setFile] = useState<File | undefined | null>(undefined);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(categoryList[0]);
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);

    const reader = new FileReader();

    reader.onload = () => {
      setPreviewUrl(reader.result);
      setFile(file);
    };

    reader.readAsDataURL(file!);
  };

  const handleBillUpload = async () => {
    try {
      setLoading(true);
      const bill = await extractBill(file!);
      bill.category = category;
      localStorage.setItem(
        'billdata',
        JSON.stringify({
          type: file?.type,
          url: previewUrl,
          data: bill,
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
          onChange={handleFileChange}
        />
      </div>

      <Label htmlFor="category">Select Category</Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-between"
          >
            <span>{category}</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
          {categoryList.map((item, index) => (
            <DropdownMenuItem key={index} onSelect={() => setCategory(item)}>
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline" type="submit" className="self-start w-1/2">
        {loading ? <Loader className="animate-spin" /> : <p>create</p>}
      </Button>
    </form>
  );
};
