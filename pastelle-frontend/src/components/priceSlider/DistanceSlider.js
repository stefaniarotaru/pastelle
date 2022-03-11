import React, { useState } from "react";
import { Range } from "react-range";
import SliderTrack from '../priceSlider/SliderTrack'
import SliderThumb from '../priceSlider/SliderThumb'
import { PRICES } from "../../Store";
import { useAtom } from "jotai";

const DistanceSlider = ({ min, max, step, filterCards }) => {
    // const [atomPrices, setAtomPrices] = useAtom(PRICES);

    const [values, setValues] = useState([min, max]);  
    const handleChange = (values) => {
      setValues(values);
    };
  
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
        //   onMove={() => filterCards('price', values)}
          renderTrack={renderTrack}
          renderThumb={SliderThumb}
        />
        <output className='flex gap-x-[10rem] mt-2'>
         <p>${values[0]}</p>   <p>${values[1]}</p>
        <button className="bg-pink-300" onClick={() => filterCards('price', values), () => console.log("x", values)}>PRICE</button>
        </output>
      </>
    );
  };

export default DistanceSlider;