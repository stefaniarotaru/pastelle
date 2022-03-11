import React from 'react';

const UserPage = () => {
    return (
        <div className='my-20 mx-auto'>

            <div className='text-3xl'>
                My Account
            </div>

            <div className='flex md:flex-row flex-col gap-x-4'>

                <div className='flex flex-col mt-4 gap-y-4'>
                    <div className='bg-pink-200 
                                    hover:bg-pink-400
                                    hover:text-white
                                    hover:shadow
                                    text-xl
                                    rounded 
                                    w-80 
                                    h-16
                                    py-1
                                    px-4
                                    cursor-pointer'>
                                        <p>Order history</p>
                                        <p className='text-sm'>View your past orders</p>
                        
                        </div>
                    <div className='bg-pink-200 
                                    hover:bg-pink-400
                                    hover:text-white
                                    hover:shadow
                                    text-xl
                                    rounded 
                                    w-80 
                                    h-16
                                    py-1
                                    px-4
                                    cursor-pointer'>Returns
                                    <p className='text-sm'>View your returns</p></div>
                    <div className='bg-pink-200 
                                    hover:bg-pink-400
                                    hover:text-white
                                    hover:shadow
                                    text-xl
                                    rounded 
                                    w-80 
                                    h-16
                                    py-1
                                    px-4
                                    cursor-pointer'>Account settings
                                    <p className='text-sm'>Edit your account details</p></div>
                    <div className='bg-pink-200 
                                    hover:bg-pink-400
                                    hover:text-white
                                    hover:shadow
                                    text-xl
                                    rounded 
                                    w-80 
                                    h-16
                                    py-1
                                    px-4
                                    cursor-pointer'>My addresses
                                    <p className='text-sm'>Edit your addresses</p></div>
                </div>

                <div className='bg-gray-300 w-[80rem] mt-4 rounded'>
                    
                </div>
            </div>

        </div>
    )
};

export default UserPage;
