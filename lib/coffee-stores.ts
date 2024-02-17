import { MapboxType } from "@/types";

const transformCoffeeData = (result: MapboxType) => {
  return {
    id: result.id,
    address: result.properties?.address || "",
    name: result.text,
    imgUrl: "https://unsplash.com/photos/person-taking-picture-inside-of-restaurant-VobvKmG-StA"
  }
}

export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/Wilmington%2C%20DE%20coffee%20shops.json?limit=6&proximity=ip&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();

    return data.features.map((result: MapboxType) => transformCoffeeData(result))
  } catch (error) {
    console.error('Error while fetching coffee stores', error);
  }
}

export const fetchCoffeeStore = async (id: string) => {
  try {
    const response = await fetch (
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${id}.json?limit=6&proximity=ip&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();

    const coffeeStore = data.features.map((result: MapboxType) => transformCoffeeData(result))

    return coffeeStore.length > 0 ? coffeeStore[0] : {};
  } catch (error) {
    console.error('Error while fetching coffee stores', error);
  }
}