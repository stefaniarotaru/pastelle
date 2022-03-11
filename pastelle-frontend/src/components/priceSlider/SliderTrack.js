import React from "react";
import { getTrackBackground } from "react-range";



const SliderTrack = ({ props, children, min, max, values }) => {

    
    const colors = ["#fbcfe8", "#f472b6", "#fbcfe8"];
    const background = getTrackBackground({
        values,
        min,
        max,
        colors
    });

    return (
        <div
            className="flex w-60 rounded"
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ ...props.style, background }}
            
        >
            <div className={`h-2 w-full rounded self-center`} ref={props.ref}>
                {children}
            </div>
        </div>
    );
};

export default SliderTrack;