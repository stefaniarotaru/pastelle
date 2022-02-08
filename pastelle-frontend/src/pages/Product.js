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
import { Carousel } from 'react-carousel-minimal';
import { Redirect } from 'react-router-dom'



const Product = () => {

    let { id } = useParams();
    const cardSource = "http://localhost:8080/product";
    const [card, setCard] = useState([]);
    const [imageUrls, setImageUrls] = useState([])
    useEffect(() => {
        axios.get(cardSource + `/${id}`).then(res => {
            setCard(res.data)
            console.log(res.data)

            setImageUrls(res.data.imageUrls.map(imageUrl => { return { image: imageUrl } }))
        }).catch((resp) => {
            console.log("AHDHJGJWSFH" + resp)
            if (resp.status === 404) {
                return <Redirect to='/' />
            }
        })
    }, [])

    return (

        <div>
            <Navbar />

            {/* product view */}
            <div className="container grid md:grid-cols-2 gap-6 ">

                {/* image */}

                <div className='relative'>
                {card.percentage > 1 ?
                    <div className='absolute bg-pink-100/60 h-16 w-40 rounded-r-lg mt-[7rem] ml-10 flex flex-row items-center z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2" fill="none" viewBox="0 0 24 24" stroke="#f472b6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <p className='text-pink-400 font-bold ml-2 text-xl'>SALE -{card.percentage}%</p>
                    </div> : ''}
                    <div className='md:ml-10 my-20'>
                        {imageUrls.length > 0 && <Carousel
                            data={imageUrls}
                            width="700px"
                            height="700px"
                            radius="10px"
                            automatic={false}
                            dots={imageUrls.length > 1}
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            thumbnails={imageUrls.length > 1}
                            thumbnailWidth="100px"
                            style={{
                                textAlign: "center",
                                maxWidth: "800px",
                                maxHeight: "800px"
                            }}
                        />
                        }
                    </div>

                </div>


                {/* product content */}
                <div className='-mt-36 md:mt-6 mx-6'>
                    <h2 className="text-3xl font-medium uppercase mb-2 mt-16">{card.name}</h2>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold mt-6">
                            <span>Availability:</span>
                            <span className="text-green-600 ml-2">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Type:</span>
                            <span className="text-gray-600">{card.subcategory}</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                    {!card.salePrice ? '' : <p className="text-3xl text-pink-400 font-semibold">${card.salePrice}</p>}
                        <p className={`text-lg ${card.sale ? 'line-through' : ''}`}>${card.price}</p>
                    </div>
                    {/* size */}
                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
                        <div className="flex items-center gap-2 ">
                            {card.sizes?.map(size => <SizeSelector size={size}/>)}
                        </div>
                    </div>
                    {/* cart */}
                    <div className="flex gap-3border-gray-200 pb-5 mt-6 gap-x-4">
                        <a href='#' className="bg-pink-300 border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-green-200 transition">
                            Add to cart
                        </a>
                        <a href='#' className="bg-white border border-primary text-pink-400 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-green-200 transition">
                            Wishlist
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    {/* details */}
                    <div className="container pb-16">
                        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Details</h3>
                        <div className="text-gray-600 space-y-3 w-80 md:w-full">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique nisl, a vestibulum augue. Mauris vel vehicula magna. Nullam quam nulla, vehicula in convallis vel, ornare nec enim. Vivamus ut ultricies nisi, a dapibus neque. Nunc orci massa, efficitur nec mi ac, ultricies pellentesque mi. </p>

                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-8'>
                <Footer />
            </div>


        </div>
    )
}

export default Product
