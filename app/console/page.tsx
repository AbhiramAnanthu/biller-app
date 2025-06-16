import { getServerSession } from 'next-auth';

export default async function Console() {
  const session = await getServerSession();

  return (
    <div className="mt-10 mb-4">
      {session?.user ? (
        <div className="flex gap-2 justify-evenly items-center mx-auto w-3/4 px-3 py-6"></div>
      ) : (
        <p>Not authorized</p>
      )}
    </div>
  );
}
