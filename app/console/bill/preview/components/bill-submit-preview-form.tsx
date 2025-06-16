'use client';

import { BillSchema } from '@/app/utils/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { z } from 'zod';

export const BillSubmitPreviewForm = ({
  formData,
}: {
  formData: z.infer<typeof BillSchema>;
}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [recipientName, setRecipientName] = useState('');

  useEffect(() => {
    setTitle(formData.title!);
    setTotalAmount(formData.total_amount!);
    setRecipientName(formData.recipient_name!);
  }, []);

  return (
    <form
      action=""
      className="border w-full h-full px-3 py-4 flex flex-col justify-evenly"
    >
      <div>
        <Label htmlFor="title" className="mb-1">
          Title
        </Label>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 "
        />
      </div>

      <div>
        <Label htmlFor="issuedDate" className="mb-1">
          Issued date
        </Label>
        <Input
          type="date"
          id="issuedDate"
          name="issuedDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-2"
        />
      </div>

      <div>
        <Label htmlFor="billLastDate" className="mb-1">
          Bill Last date
        </Label>
        <Input
          type="date"
          id="billLastDate"
          name="billLastDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-2"
        />
      </div>
      <div>{}</div>
      <div>
        <Label htmlFor="totalAmount" className="mb-1">
          Total Amount
        </Label>
        <Input
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(parseInt(e.target.value, 10))}
          required
          className="mb-2"
        />
      </div>

      <div>
        <Label htmlFor="recipientName" className="mb-1">
          Recipient name
        </Label>
        <Input
          type="text"
          id="recipientName"
          name="recipientName"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          required
          className="mb-2"
        />
      </div>

      <Button variant="outline">Confirm</Button>
    </form>
  );
};
