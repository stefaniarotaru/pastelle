import React from 'react';

const FilterSubcategory = ({ filterCards, types }) => {

    return (
        <div className="flex justify-between mx-6 md:flex-col gap-y-10">
            
            {types.map((type, i) => <p key={i} onClick={() => filterCards('subcategory', type.db_name)}
                className="hover:text-pink-400 active:text-pink-400 w-36 cursor-pointer">{type.displayName}</p>)}

        </div>
    )
};

export default FilterSubcategory;