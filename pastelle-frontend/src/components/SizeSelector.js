import React from 'react'
import { useState } from 'react';

const SizeSelector = (props) => {
    const size = props.size;


    return (
        <div className="size-selector bg-pink-200 rounded-lg hover:bg-pink-300">
            <input type="radio" name="size" className="hidden" id="size" />
            <label for="size"
                className="text-xs 
                   border-gray-200 
                   rounded-sm 
                   p-1 
                   px-2
                   flex 
                   items-center 
                   justify-center 
                   cursor-pointer 
                   shadow-sm 
                   text-gray-600">
                {size.displayName}
            </label>

        </div>
    )
}

export default SizeSelector
