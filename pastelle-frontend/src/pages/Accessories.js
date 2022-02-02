import { useEffect, useState } from "react/cjs/react.development";
import React from 'react'
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ColorFilter from "../components/ColorFilter";

const Accessories = () => {

    const [filteredCards, setFilteredCards] = useState([]);

    const filterCards = (subcat) => {
        setFilteredCards(
            cards.filter(card => card.subcategory === subcat)
        )
    }
    const cardSource = "http://localhost:8080/product/category/accessories";
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios.get(cardSource).then(res => {

            setCards(res.data)
            setFilteredCards(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <>
            <div className="my-20 container mx-auto p-5 ">
                <Navbar />
                <div className="text-2xl my-5">
                    Accessories
                </div>
                <div className='md:ml-52 ml-6 flex flex-row items-center md:-mt-8'>
                    <p className='mr-2 '>Color :</p>

                    <ColorFilter value={cards.color}
                            handleFilter={(e) => { filterCards(e.target.value); console.log("clicked: " + e.target.value) }}/>
                </div>

                <div className="md:flex md:flex-row">
                    <div className="mr-4 md:flex md:flex-col gap-y-6 w-full md:mt-16">
                        {/* <p className="font-bold">Subcategories</p> */}
                        <div className="flex justify-between mx-6 md:flex-col gap-y-10">
                            <p onClick={() => filterCards('shoes')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Shoes</p>
                            {/* <p onClick={() => filterCards('sandals')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Sandals</p> */}
                            <p onClick={() => filterCards('platforms')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Platforms</p>
                            <p onClick={() => filterCards('backpack')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Backpacks</p>
                            <p onClick={() => filterCards('bag')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Bags</p>
                        </div>
                    </div>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {filteredCards.map(card => <Card key={card.id} card={card} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Accessories
