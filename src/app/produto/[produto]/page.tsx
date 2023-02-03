import React from "react";

async function getData(product: number) {
    const response = await fetch(`https://fakestoreapi.com/products/${product}`, { next: { revalidate: 10 } });
    return {
        response
    }
    
}

export default async function Teste({ params }: any) {

    const response = await getData(params.produto);

    return (
        <>
            <div>
                teste
            </div>
        </>
    )
}