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
import SizeSelector from '../components/SizeSelector';


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
                    <img className="w-full" src={card.url} />
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
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold">
                            <span>Availability:</span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand:</span>
                            <span className="text-gray-600">Blouse</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-red-400 font-semibold">${card.price}</p>
                        <p className="text-base text-gray-400 line-through">$79.99</p>
                    </div>
                {/* size */}
                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
                        <div className="flex items-center gap-2">
                            {card.sizes?.map(size => <SizeSelector size={size}/>)}
                        </div>
                    </div>
                    {/* cart */}
                    <div className="flex gap-3border-gray-200 pb-5 mt-6">
                        <a href='#' className="bg-pink-300 border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-green-200 transition">
                            Add to cart
                        </a>
                        <a href='#' className="bg-white border border-primary text-pink-400 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-green-200 transition">
                            Wishlist
                        </a>
                    </div>
                    {/* details */}
                    <div className="container pb-16">
                        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Details</h3>
                        <div className="text-gray-600 space-y-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique nisl, a vestibulum augue. Mauris vel vehicula magna. Nullam quam nulla, vehicula in convallis vel, ornare nec enim. Vivamus ut ultricies nisi, a dapibus neque. Nunc orci massa, efficitur nec mi ac, ultricies pellentesque mi. </p>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />


        </div>
    )
}

export default Product
