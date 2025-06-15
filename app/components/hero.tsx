import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export function Hero({ name, email }: { name: string; email: string }) {
  return (
    <section className="w-full mt-8">
      <Card className="w-3/4 mx-auto px-4 py-6">
        <CardTitle className="text-start">Welcome, {name}</CardTitle>
        <CardDescription className="text-start"> {email}</CardDescription>
        <CardContent className="flex justify-start px-0 py-2">
          <Button className="">
            <Link href="/console">Go to console</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
