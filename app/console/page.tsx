import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Plus } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Console() {
  const session = await getServerSession();

  return (
    <div className="mt-10 mb-4">
      {session?.user ? (
        <div className="flex gap-2 justify-evenly items-center mx-auto w-3/4 px-3 py-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Plus />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex items-start gap-1 px-3 flex-col">
              <DropdownMenuItem asChild>
                <Button variant="link" className="px-0">
                  <Link href="/console/bill/new"> bill</Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button variant="link" className="px-0">
                  <Link href="/console/category/new">category</Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <p>Not authorized</p>
      )}
    </div>
  );
}
