import { useEffect, useState } from "react/cjs/react.development";
import React from 'react'
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ColorFilter from "../components/ColorFilter";
import FilterSubcategory from "../components/FilterSubcategory";
import types from "../components/Types";

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
                        handleFilter={(e) => filterCards(e.target.value)} />
                </div>
                <div className="md:flex md:flex-row">
                    <div className="mr-4 md:flex md:flex-col gap-y-6 w-80  ">
                        <div className="flex mx-6 md:flex-col gap-y-10 gap-x-10 my-6">
                            <FilterSubcategory filterCards={filterCards} types={types.slice(0, 5)} />
                        </div>
                    </div>

                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
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
