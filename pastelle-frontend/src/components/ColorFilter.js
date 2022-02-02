import React from 'react';

const ColorFilter = (props) => {
    return (
        <div className='flex flex-row'>
            <button className="bg-gradient-to-r from-yellow-400 to-blue-500 via-pink-500 via-green-200 h-5 w-5 rounded border-none h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="multicolor"
                title="Multicolor"></button>
            <button className="bg-black h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="black"
                title="Black"></button>
            <button className="bg-gray-100 h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="white"
                title="White"></button>
            <button className="bg-red-500 h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="red"
                title="Red"></button>
            <button className="bg-yellow-400 h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="yellow"
                title="Yellow"></button>
            <button className="bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="green"
                title="Green"></button>
            <button className="bg-blue-500 h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="blue"
                title="Blue"></button>
            <button className="bg-purple-500 h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="purple"
                title="Purple"></button>
            <button className="bg-pink-400 h-5 w-5 rounded-full shadow-md mr-2"
                onClick={props.handleFilter}
                value="pink"
                title="Pink"></button>
        </div>
    )
};

export default ColorFilter;
