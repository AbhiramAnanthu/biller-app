import { UploadBillForm } from './component/upload-bill';

export default function BillCreatePage() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="md:w-3/4 w-3/5 h-1/2 md:mx-auto mx-5 border px-3 py-4 rounded-md">
        <UploadBillForm />
      </div>
    </div>
  );
}
