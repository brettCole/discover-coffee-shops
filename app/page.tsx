import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from '@/types';

async function getData() {
  return await fetchCoffeeStores();
}

export default async function Home() {
  const coffeeStores = await getData();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <div className="mt-20">
        <h2>Local Stores</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          {coffeeStores.map((coffeeStore: CoffeeStoreType) => (
            <Card 
              key={`${coffeeStore.name}-${coffeeStore.id}`}
              name={coffeeStore.name}
              imgUrl={coffeeStore.imgUrl}
              href={`/coffee-store/${coffeeStore.id}`} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
