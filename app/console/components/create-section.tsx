import { Card } from '@/components/ui/card';
import { CreateCategoryForm } from './create-category-form';
import { UploadBillForm } from './upload-bill';

export const CreateSection = () => {
  return (
    <div className="w-3/4 flex justify-between flex-col lg:flex-row shadow rounded-md mx-auto px-4 py-6 gap-6 lg:items-start">
      <div className="w-full lg:w-1/2 flex flex-col items-center h-full border rounded-md px-2 py-3 mt-2">
        <h1>Create a category</h1>
        <CreateCategoryForm />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center h-full border rounded-md px-2 py-3 mt-2">
        <h1>Create a bill</h1>
        <UploadBillForm />
      </div>
    </div>
  );
};
