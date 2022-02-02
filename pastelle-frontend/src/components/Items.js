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

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
    )
}

export default Items
