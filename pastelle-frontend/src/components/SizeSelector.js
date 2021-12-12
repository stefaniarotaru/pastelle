import React from 'react'
import { useState } from 'react';

const SizeSelector = (props) => {
    const size = props.size;


    return (
        <div className="size-selector">
            <input type="radio" name="size" className="hidden" id="size-xs" />
            <label for="size-xs" className="text-xs border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                {size}
            </label>

        </div>
    )
}

export default SizeSelector
