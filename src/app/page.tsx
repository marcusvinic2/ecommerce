import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

type ProductProps = {
  id: Number;
  title: string;
  image: string;
}

async function getData() {
  const response = await fetch(`https://fakestoreapi.com/products`, { next: { revalidate: 10 } });
  return response.json();
}

export default async function Home() {

  const response = await getData();
  console.log(response)

  return (
    <div>
      {
        response !== null ? (
          response.map((response: ProductProps, index: number) =>
            <div>
              <Link href={`produto/${response.id}`}>
                <h4>{response.title}</h4>
                <div>
                  {response.image === null ? (<>loading...</>) : (<Image src={response.image} width={300} height={300} alt="product" placeholder="blur" />)}
                </div>
              </Link>
            </div>
          )
        ) : null
      }
    </div>
  )
}
