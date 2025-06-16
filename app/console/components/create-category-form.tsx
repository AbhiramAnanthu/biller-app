'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export const CreateCategoryForm = () => {
  const tags: Array<string> = [];
  const [tagItem, setTagItem] = useState('');
  const [name, setName] = useState('');

  return (
    <form className="flex flex-col gap-4 w-full max-w-md px-4 py-6 border h-full">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="tag">Enter Some Tags</Label>
        <Input
          id="tag"
          name="tag"
          required
          value={tagItem}
          onChange={(e) => setTagItem(e.target.value)}
        />
      </div>

      <Button type="submit" variant="outline" className="self-start">
        create
      </Button>
    </form>
  );
};
