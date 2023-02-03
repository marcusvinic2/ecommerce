
import Link from "next/link";

interface WorldTimeAPI {
  title: string
  description: string;
}

async function getTime(product : any) {
  const response = await fetch(`https://fakestoreapi.com/products/${product}`, { next: { revalidate: 500 } });
  const time: WorldTimeAPI = await response.json();
  return time;
}

export default async function DataPage({ params } : any ) {
  const time = await getTime(params.produto);

  return (
    <>
      <h1>Titile: {time.title}</h1>
      <h2>Description: {time.description}</h2>
      <Link href="/">Home</Link>
    </>
  );
}

export const revalidate = 0;