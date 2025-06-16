import { UploadBillForm } from '../../components/upload-bill';

export default function BillCreatePage() {
  return (
    <div className="flex justify-center items-center border h-3/4 w-1/2 mx-auto">
      <div className="w-full border mx-4 px-3 py-4 rounded-md">
        <UploadBillForm />
      </div>
    </div>
  );
}
