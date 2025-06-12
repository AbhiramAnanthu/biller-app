import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function BillCard({
  title,
  splitUp,
  total,
  category,
}: {
  title: string;
  createdAt: string;
  issuedAt: string;
  splitUp: Record<string, any>;
  total: number;
  category: string;
}) {
  return (
    <Card className="w-3/4 lg:w-full max-w-md mx-auto shadow-md rounded-lg overflow-hidden">
      <div className="px-6 pt-2">
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>

        <CardDescription className="text-sm  mb-4 flex flex-row items-center justify-between">
          <div>
            <Button variant="link" className="px-0">
              <Link href={`/${category}`}>{category}</Link>
            </Button>
          </div>
          <Link href="/card">
            <ExternalLink />
          </Link>
        </CardDescription>
      </div>

      <CardContent className="px-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">#</TableHead>
              <TableHead>Breakdown</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(splitUp).map(([key, value], idx) => (
              <TableRow key={key}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{key}</TableCell>
                <TableCell>${value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter className="px-6 py-4 border-t flex justify-between items-center">
        <span className=" font-medium">Total:</span>
        <span className=" font-semibold">${total}</span>
      </CardFooter>
    </Card>
  );
}
