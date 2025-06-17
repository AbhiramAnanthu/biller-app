'use client';

import { ImagePreview } from './components/image-preview';
import { PdfPreview } from './components/pdf-preview';
import { BillSubmitPreviewForm } from './components/bill-submit-preview-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Preview() {
  const [billData, setBillData] = useState<any>(null);
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('billdata')!);
      setBillData(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (!billData) return <p>Loading ...</p>;
  return (
    <div className="w-full h-full md:w-3/4 md:h-11/12 py-3 my-4 flex flex-col md:flex-row items-center justify-center border">
      {billData?.type === 'image/jpeg' ? (
        <div className="w-full md:w-1/2 h-full md:flex items-center justify-center hidden">
          <ImagePreview url={billData.url!} />
        </div>
      ) : (
        <div className="w-full md:w-1/2 h-full md:flex items-center justify-center hidden">
          <PdfPreview url={billData.url!} />
        </div>
      )}
      <div className="md:hidden block">
        
         <Button>
          <Link href={billData.url}>File preview</Link>
        </Button>
      </div>
      <div className="w-full md:w-1/2 h-full px-2 py-3 flex items-center justify-center">
        <BillSubmitPreviewForm formData={billData.data} />
      </div>
    </div>
  );
}
