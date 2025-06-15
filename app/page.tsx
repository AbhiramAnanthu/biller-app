import { getServerSession } from 'next-auth';
import { Hero } from './components/hero';

export default async function Welcome() {
  const session = await getServerSession();
  return (
    <>
      {session?.user ? (
        <Hero name={session?.user?.name!} email={session?.user?.email!} />
      ) : (
        <div className="w-full h-[90vh] flex items-center justify-center">
          <p>Please signin :)</p>
        </div>
      )}
    </>
  );
}
