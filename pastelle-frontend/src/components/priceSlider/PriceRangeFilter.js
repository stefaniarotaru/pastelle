import React, { useState } from "react";
import { Range } from "react-range";
import SliderTrack from './SliderTrack'
import SliderThumb from './SliderThumb'

const PriceRangeFilter = ({ min, max, step, filterCards }) => {

    const [values, setValues] = useState([min, max]);
    const handleChange = (values) => {
        setValues(values);

    };

    const handleFinalChange = (values) => {
        handleChange(values);
        filterCards('price', values)
    }

    const renderTrack = (props) => {
        return <SliderTrack {...props} min={min} max={max} values={values} />;
    };

    return (
        <>
            <Range
                allowOverlap
                values={values}
                step={step}
                min={min}
                max={max}
                onChange={handleChange}
                onFinalChange={handleFinalChange}
                renderTrack={renderTrack}
                renderThumb={SliderThumb}
            />
            <output className='flex gap-x-[10rem] mt-2'>
                <p>${values[0]}</p>   <p>${values[1]}</p>
            </output>
        </>
    );
};

export default PriceRangeFilter;