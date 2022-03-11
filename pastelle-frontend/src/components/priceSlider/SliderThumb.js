import React from "react";
import classNames from 'classnames';


const SliderThumb = ({ props, isDragged }) => {
    return (
      <div className="flex justify-center items-center outline-none h-4 w-4 rounded-full bg-pink-500" {...props}>
        <div
          className={classNames("slider-thumb h-1 w-[0.3rem] bg-none outline-0", { "is-dragged": isDragged })}
        />
      </div>
    );
  };

export default SliderThumb