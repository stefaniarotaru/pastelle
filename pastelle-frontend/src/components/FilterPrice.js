import { useAtom } from 'jotai';
import React, { useState } from 'react';
import DistanceSlider from '../components/priceSlider/DistanceSlider'
import { PRICES } from '../Store';


const FilterPrice = ({ min, max, filterCards, values }) => {

    DistanceSlider.defaultProps = {
        min: min,
        max: max,
        step: 1
    };
    console.log("default", DistanceSlider.defaultProps)
    return (
        <div>
            <DistanceSlider filterCards={() =>filterCards('price', values)}/>
        </div>
    )
};

export default FilterPrice;

