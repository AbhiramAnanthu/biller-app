'use client';

import { ImagePreview } from './components/image-preview';
import { PdfPreview } from './components/pdf-preview';
import { BillSubmitPreviewForm } from './components/bill-submit-preview-form';
import { useEffect, useState } from 'react';

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
    <div className="w-full h-full md:w-3/4 md:h-3/4 flex flex-col md:flex-row items-center justify-center border">
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        {billData?.type === 'image/jpeg' ? (
          <ImagePreview url={billData.url!} />
        ) : (
          <PdfPreview url={billData.url!} />
        )}
      </div>
      <div className="w-full md:w-1/2 h-full px-2 py-3">
        <BillSubmitPreviewForm formData={billData.data} />
      </div>
    </div>
  );
}
