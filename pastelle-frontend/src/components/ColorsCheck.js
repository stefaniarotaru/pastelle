import React from 'react';

const ColorsCheck = (props) => {

    return (

        <div className="flex flex-row items-center w-60">

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Multicolor"
                    className="bg-gradient-to-r from-yellow-400 to-blue-500 via-pink-500 via-green-200 h-5 w-5 rounded border-none
                    " 
                    value="multicolor"
                    onChange={props.onChange}/>
                    <span className="ml-2 text-gray-700" />
            </label>
            
            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Black"
                    className="form-checkbox h-5 w-5 text-black bg-black rounded border-none"
                    value="black"
                    onChange={props.onChange}
                />
                <span className="ml-2 text-gray-700" />
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="White"
                    className="form-checkbox h-5 w-5 text-gray-100 bg-gray-100  rounded border-none"
                    value="white"
                    onChange={props.onChange} />
                <span className="ml-2 text-gray-700" />
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Red"
                    className="form-checkbox h-5 w-5 text-red-500 bg-red-500 rounded border-none"
                    value="red"
                    onChange={props.onChange} />
                <span className="ml-2 text-gray-700" />
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Yellow"
                    className="form-checkbox h-5 w-5 text-yellow-400 bg-yellow-400  rounded border-none"
                    value="yellow"
                    onChange={props.onChange} />
                <span className="ml-2 text-gray-700" />
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Green"
                    className="form-checkbox h-5 w-5 text-green-600 bg-green-600 rounded border-none"
                    value="green"
                    onChange={props.onChange} />
                <span className="ml-2 text-gray-700" />
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Blue"
                    className="form-checkbox h-5 w-5 text-blue-500 bg-blue-500  rounded border-none"
                    value="blue"
                    onChange={props.onChange} />
                <span className="ml-2 text-gray-700" />
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Purple"
                    className="form-checkbox h-5 w-5 text-purple-500 bg-purple-500  rounded border-none"
                    value="purple"
                    onChange={props.onChange} />
                <span className="ml-2 text-gray-700" />
            </label>

            <label className="inline-flex items-center mt-3">
                <input type="checkbox"
                    title="Pink"
                    className="form-checkbox h-5 w-5 text-pink-400 bg-pink-400  rounded border-none"
                    value="pink"
                    onChange={props.onChange} />
                <span className="ml-2 text-gray-700" />
            </label>

        </div>
    )
};

export default ColorsCheck;
