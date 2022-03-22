import { useEffect, useState } from 'react';
import React from 'react'
import axios from "axios";
import Card from "../components/Card";
import FilterColor from "../components/FilterColor";
import FilterSubcategory from "../components/FilterSubcategory";
import colors from "../components/Colors";
import FilterTags from '../components/FilterTags';
import PriceRangeFilter from '../components/priceSlider/PriceRangeFilter'


const ProductsWithFilters = ({ defaultFilter, filterTypes, title }) => {

    const searchBaseUrl = `http://localhost:8080/product/products?search=${defaultFilter},`;
    const [filters, setFilters] = useState({});
    const [cards, setCards] = useState([]);
    const [priceRange, setPriceRange] = useState({});


    const buildSearchUrl = (filters) => {
        let newSearchUrl = searchBaseUrl;
        for (const filterKey in filters) {
            if (filterKey === 'subcategory' || filterKey === 'color') {
                newSearchUrl = newSearchUrl.concat(filterKey, ":", filters[filterKey], ",")
            }
            if (filterKey === 'price') {
                newSearchUrl = newSearchUrl.concat(filterKey, ">", filters[filterKey][0], ",", filterKey, "<", filters[filterKey][1], ",")
            }
        }
        return newSearchUrl
    }

    useEffect(() => {
        axios.get(searchBaseUrl).then(res => {
            setCards(res.data)
            showPrices(res.data)
        })
    }, [searchBaseUrl])

    const showPrices = (cards) => {
        const prices = cards.map(card => card.price)
        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)
        setPriceRange({ min: minPrice, max: maxPrice })
    }

    const filterCards = (key, value) => {
        let newFilters = { ...filters, [key]: value }
        let newSearchUrl = buildSearchUrl(newFilters)

        setFilters(newFilters)
        axios.get(newSearchUrl).then(res => {
            setCards(res.data)
        })
    }
    const removeFilter = (key) => {
        let newFilters = filters;
        newFilters[key] = '';
        let newSearchUrl = buildSearchUrl(newFilters)
        setFilters(newFilters)
        axios.get(newSearchUrl).then(res => {
            setCards(res.data)

        })
    }
    PriceRangeFilter.defaultProps = {
        min: priceRange.min,
        max: priceRange.max,
        step: 1
    };

    return (
        <>
            <div className="my-20 container mx-auto p-5 ">

                <div className="text-2xl my-5">
                    {title}
                </div>
                <div className='md:ml-52 ml-6 flex flex-row items-center md:-mt-8'>
                    <p className='mr-2 '>Color :</p>

                    <FilterColor
                        filterCards={filterCards}
                        colors={colors}
                    />
                    <FilterTags filters={filters} removeFilter={removeFilter} />
                    <div className='ml-8 pt-6'>
                        {
                            priceRange?.min ?
                                <PriceRangeFilter filterCards={filterCards} />
                                : ''
                        }
                    </div>
                </div>

                <div className="md:flex md:flex-row items-start">
                    <div className="mr-4 md:flex md:flex-col gap-y-6 w-80">
                        <div className="flex mx-6 md:flex-col gap-y-10 gap-x-10 my-6 flex-row flex-wrap w-[40rem] md:w-[8rem]">
                            <FilterSubcategory filterCards={filterCards} types={filterTypes} />
                        </div>
                    </div>

                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                        {cards.length >= 1 ?
                            cards.map(card => <Card key={card.id} card={card} />) :
                            <p className="text-3xl w-96 mt-40 text-pink-500">Couldn't find anything! :(</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsWithFilters
