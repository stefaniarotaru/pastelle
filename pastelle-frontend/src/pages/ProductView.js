import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { PRODUCTS } from '../Atoms';
import { useParams } from 'react-router';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Product = () => {

    // const[products, setProducts] = useAtom(PRODUCTS);
    // console.log("product item: ", products[0].name);
    let { id } = useParams();
    const cardSource = "http://localhost:8080/product";
    const [card, setCard] = useState([]);
    useEffect(() => {
        axios.get(cardSource + `/${id}`).then(res => {
            setCard(res.data)
            console.log(res.data)
        })
    }, [])

    console.log("ID: ", id);

    // const product = products.filter(product => product.id == id)[0];
    // console.log("result: ", product)

    return (

        <div>
            <header className="py-4 shadow-sm bg-white">

            </header>

            <Navbar />
            {/* breadcrumbs */}
            <div className="container py-4 flex items-center gap-3">

            </div>

            {/* product view */}
            <div className="container grid grid-cols-2 gap-6 ">
                {/* image */}
                <div>
                    <img className="w-full rounded-lg" src={card.url} />
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <img className="w-full cursor-pointer border border-primary" src={card.url} />
                        <img className="w-full cursor-pointer border" src={card.url} />
                        <img className="w-full cursor-pointer border" src={card.url} />
                        <img className="w-full cursor-pointer border" src={card.url} />
                        <img className="w-full cursor-pointer border" src={card.url} />
                    </div>
                </div>
                {/* product content */}
                <div>
                    <h2 className="text-3xl font-medium uppercase mb-2">{card.name}</h2>
                    <div>
                        <p className="text-gray-800 font-semibold">
                            <span>Availability:</span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                    </div>
                </div>

            </div>
            <Footer />


        </div>
    )
}

export default Product