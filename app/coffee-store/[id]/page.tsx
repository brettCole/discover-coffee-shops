import { fetchCoffeeStore } from '@/lib/coffee-stores';
import Link from 'next/link';
import React from 'react';

async function getData(id: string) {
  return await fetchCoffeeStore(id);
}

export default async function Page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  
  const coffeeStore = await getData(id);

  console.log('coffeeStore', coffeeStore);

  return (
    <div>Coffee Store Page: {id}
      <Link href='/'>DashBoard</Link>
    </div>
  )
}