import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return <p>Customer Page</p>;
}
