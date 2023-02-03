import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

async function getData() {
  const response = await fetch(`https://fakestoreapi.com/products`, { cache: 'no-store' });
  return response.json();
}

export default async function Home() {

  const response = await getData();
  console.log(response)

  return (
    <div>
      {
        response !== null ? (
          response.map((response: any, index: number) =>
            <div>
              <Link href={`produto/${response.id}`}>
                <h4>{response.title}</h4>
                <div>
                  <Image src={response.image} width={300} height={300} alt="product" />
                </div>
              </Link>
            </div>
          )
        ) : null
      }
    </div>
  )
}
