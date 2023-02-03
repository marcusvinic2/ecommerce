import React from "react";

type ProductProps = {
    id: number;
    title: string
    price: string;
    category: string;
    description: string;
    image: string;
}

async function getData(product: number): Promise<ProductProps> {

    const response = await fetch(`https://fakestoreapi.com/products/${product}`);
    return response.json();

}

export default async function Teste({ params }: any) {

    const result = await getData(params.produto);
    console.log(result)

    return (
        <>
            <div>
                <h1>{result.title}</h1> 
                <br />
                <img width={300} height={300} src={result.image} alt="product" placeholder="blur" />
            </div>
        </>
    )
}