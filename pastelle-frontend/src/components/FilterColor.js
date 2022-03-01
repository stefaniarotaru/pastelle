import React from 'react';

const FilterColor = ({ filterCards, colors }) => {
    return (
        <div>
            {colors.map((color, i) =>
                <button key={i}
                    className={`${color.colorCSS} h-5 w-5 rounded-full shadow-md mr-2`}
                    onClick={() => filterCards('color', color.colorCode)}
                    value={color.colorCode}
                    title={color.colorName} />)}
        </div>
    )
};

export default FilterColor;