import { auth0 } from '@/lib/auth0';
import './globals.css';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default async function Home() {
  const session = await auth0.getSession();
  if (!session?.user) return <p>Not authorized</p>;
  return (
    <div className="w-screen">
      <div className="">
        <Link href="/category/new">
          {' '}
          <Plus />
        </Link>
      </div>
    </div>
  );
}
