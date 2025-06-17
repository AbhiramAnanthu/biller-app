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
  const [issuedDate, setIssuedDate] = useState(
    `${formData.issued_date.year}-${
      formData.issued_date.month < 10
        ? `0${formData.issued_date.month}`
        : `${formData.issued_date.month}`
    }-${
      formData.issued_date.day < 10
        ? `0${formData.issued_date.day}`
        : `${formData.issued_date.day}`
    }`
  );

  const [billLastDate, setbillLastDate] = useState(
    `${formData.bill_last_date.year}-${
      formData.bill_last_date.month < 10
        ? `0${formData.bill_last_date.month}`
        : `${formData.bill_last_date.month}`
    }-${
      formData.bill_last_date.day < 10
        ? `0${formData.bill_last_date.day}`
        : `${formData.bill_last_date.day}`
    }`
  );

  const [totalAmount, setTotalAmount] = useState(0);
  const [recipientName, setRecipientName] = useState('');

  useEffect(() => {
    console.log(formData);
    setTitle(formData.title!);
    setTotalAmount(formData.total_amount!);
    setRecipientName(formData.recipient_name!);
    console.log(billLastDate);
  }, []);

  return (
    <form
      action=""
      className="border w-5/6 h-5/6 px-3 py-4 flex flex-col justify-evenly"
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
          value={issuedDate}
          onChange={(e) => {
            e.target.value;
          }}
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
          value={billLastDate}
          onChange={(e) => {
            setbillLastDate(e.target.value);
          }}
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
