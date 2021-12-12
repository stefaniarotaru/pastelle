import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { PRODUCTS } from '../Atoms';

const Items = () => {
    // const cardSource = "http://localhost:8080/product";
    // const [cards, setCards] = useState([]);
    // const [products, setProducts] = useAtom(PRODUCTS);

    // async function getProducts() {
    //     const response = await axios.get(cardSource);
    //     setCards(response.data);
    //     setProducts(response.data);
    //     console.log("response: ", response.data);
    // }
    // console.log("products: ", products);
    // console.log("cards: ", cards);

    // useEffect(() => {
    //     const products = getProducts();


    // }, [])

    const cardSource = "http://localhost:8080/product";
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios.get(cardSource).then(res => {
            setCards(res.data)
            console.log(res.data)
        })
    }, [])


    return (
        <div className="my-20 container mx-auto p-5">
            <div className="flex flex-row justify-between my-5">
                <h2 className="text-3xl"> Collection 1</h2>
                <a href="#" className="text-xl flex flex-row">
                    View all
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {cards.map(card => <Card key={card.id} card={card} />)}
            </div>
        </div>

    )
}

export default Items
