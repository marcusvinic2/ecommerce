import React from "react";

type ProductProps = {
    title: string;
    description: string;
    map: any;
}

async function getData() {
    try {
        const response = await fetch('https://fakestoreapii.com/products?limit=10');
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function Teste() {

    const result = await getData();
    console.log(result)

    return (
        <div>
            {
                result !== undefined && (
                    result.map((res: any, index: number) =>
                        <div>{res.title}</div>
                    )
                )
            }
        </div>
    )
}