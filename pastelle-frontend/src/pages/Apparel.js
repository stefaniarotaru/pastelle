import { useEffect, useState } from "react/cjs/react.development";
import React from 'react'
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import ColorsCheck from "../components/ColorsCheck";
import ColorFilter from "../components/ColorFilter";

const Apparel = () => {

    const cardSource = "http://localhost:8080/product/category/apparel";
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    const filterCards = (criteria) => {
        setFilteredCards(
            cards.filter(card => card.subcategory === criteria || card.color === criteria)
        )
    }
    useEffect(() => {
        axios.get(cardSource).then(res => {

            setCards(res.data)
            setFilteredCards(res.data)

        })
    }, [])
    return (
        <>
            <div className="my-20 container mx-auto p-5 ">
                <Navbar />
                <div className="text-2xl my-5">
                    Apparel
                </div>
                <div className='md:ml-52 ml-6 flex flex-row items-center md:-mt-8'>
                    <p className='mr-2 '>Color :</p>

                    <ColorFilter value={cards.color}
                            handleFilter={(e) => { filterCards(e.target.value); console.log("clicked: " + e.target.value) }}/>
                </div>
                <div className="md:flex md:flex-row">
                    <div className="mr-4 md:flex md:flex-col gap-y-6 w-80  ">
                        {/* <p className="font-bold">Subcategories</p> */}
                        <div className="flex mx-6 md:flex-col gap-y-10 gap-x-10 my-6">
                            <p onClick={() => filterCards('blouse')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Tops</p>
                            <p onClick={() => filterCards('dress')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Dresses</p>
                            <p onClick={() => filterCards('skirt')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Skirts</p>
                            <p onClick={() => filterCards('pants')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Pants</p>
                            <p onClick={() => filterCards('jacket')}
                                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">Jackets</p>
                        </div>
                    </div>

                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">

                        {/* {filteredCards.map(card => <Card key={card.id} card={card} />)} */}
                        {filteredCards.length >= 1 ?
                            filteredCards.map(card => <Card key={card.id} card={card} />) :
                            <p className="text-3xl w-96 mt-40 text-pink-500">Couldn't find anything! :(</p>}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Apparel
