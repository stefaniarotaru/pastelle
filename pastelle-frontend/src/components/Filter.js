import React from 'react';
import { useEffect, useState } from "react/cjs/react.development";
import axios from 'axios';
import ColorsCheck from './ColorsCheck';

const Filter = () => {

    return (
        <div className='md:ml-52 flex md:flex-row flex-col gap-x-4'>

            <select className='rounded-lg mb-4'>
                <option>Price...</option>
                <option>ascending</option>
                <option>descending</option>
            </select>

            <div className='flex flex-row items-center md:-mt-5'>
                <p className='mr-2 text-base'>Color :</p>
                <div className='-mt-3'>
                    <ColorsCheck  />
                </div>

            </div>


        </div>
    )
};

export default Filter;
