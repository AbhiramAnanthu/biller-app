import { BillCard } from '../_components/bill-card';
import { FilterArray } from '../_components/filter-array';

export default function Home() {
  const bills = [
    {
      title: 'Water Authority',
      createdAt: '23/01/25',
      issuedAt: '5/12/24',
      splitUp: {
        monthly: 200,
        due: 150,
        tax: '25%',
      },
      total: 700.0,
      category: 'general',
    },
    {
      title: 'Electricity Board',
      createdAt: '23/02/10',
      issuedAt: '6/12/24',
      splitUp: {
        monthly: 180,
        due: 120,
        tax: '18%',
      },
      total: 600.0,
      category: 'utilities',
    },
    {
      title: 'Internet Provider',
      createdAt: '23/03/05',
      issuedAt: '7/12/24',
      splitUp: {
        monthly: 90,
        due: 60,
        tax: '12%',
      },
      total: 300.0,
      category: 'internet',
    },
    {
      title: 'Gas Company',
      createdAt: '23/04/15',
      issuedAt: '8/12/24',
      splitUp: {
        monthly: 75,
        due: 50,
        tax: '10%',
      },
      total: 250.0,
      category: 'utilities',
    },
    {
      title: 'Rent',
      createdAt: '23/05/01',
      issuedAt: '9/12/24',
      splitUp: {
        monthly: 1000,
        due: 0,
        tax: '0%',
      },
      total: 1000.0,
      category: 'housing',
    },
  ];
  return (
    <div className="">
      <FilterArray />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {bills.map((item, index) => {
          return (
            <div key={index}>
              <BillCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
