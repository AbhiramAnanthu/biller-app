import { getServerSession } from 'next-auth';
import { CreateSection } from './components/create-section';

export default async function Console() {
  const session = await getServerSession();

  return (
    <div className="mt-10 mb-4">
      {session?.user ? (
        <div className="flex flex-col md:flex-row gap-4 border rounded-md p-4 mx-8">
          {/* Sidebar (Visible on md and up) */}
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:text-center w-32">
            <span>Play</span>
            <span>Around</span>
          </div>

          {/* Main Section */}
          <div className="flex-1">
            <CreateSection />
          </div>
        </div>
      ) : (
        <p>Not authorized</p>
      )}
    </div>
  );
}
