'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { createCategory } from '../lib/action';

export default function NewCategoryForm() {
  const [name, setName] = useState('');
  const [tagItem, setTagItem] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const addTag = () => {
    const trimmedTag = tagItem.trim();
    if (trimmedTag !== '') {
      setTags([...tags, trimmedTag]);
      setTagItem('');
    }
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createCategory(name, tags);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmitForm}
        className="w-full max-w-md mx-10 md:mx-auto p-8 rounded-lg shadow-lg space-y-6 border"
      >
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-4">
          Create a category
        </h1>
        <div>
          <Label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
          />
        </div>
        <div>
          <div className="flex items-end space-x-2">
            <div className="flex-1">
              <Label htmlFor="tag" className="block mb-2 text-sm font-medium">
                Tag
              </Label>
              <Input
                id="tag"
                name="tag"
                value={tagItem}
                onChange={(e) => setTagItem(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
              />
            </div>
            <Button
              type="button"
              className="h-10 px-4 py-2"
              onClick={addTag}
              variant="outline"
            >
              <Plus />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm border rounded-full flex items-center gap-2"
            >
              {item}
              <button
                type="button"
                onClick={() =>
                  setTags((prevTags) => prevTags.filter((_, i) => i !== index))
                }
                className="ml-1 text-xs hover:underline focus:outline-none"
                aria-label="Remove tag"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <Button type="submit" variant="outline" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
