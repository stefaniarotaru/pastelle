import React from 'react'

const Footer = () => {
    return (

        <footer className="p-10
         bg-pink-50 
         text-gray-200 
         
         mt-auto
         w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    <div className="mb-5">
                        <h4 className="pb-4 text-pink-500">INFO</h4>
                        <ul className="text-gray-500">
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">How to buy?</a></li>
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">My account</a></li>
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">Size guide</a></li>
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">Terms and Conditions</a></li>

                        </ul>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-4 text-pink-500">DELIVERY AND RETURNS</h4>
                        <ul className="text-gray-500">
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">How do I return a product?</a></li>
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">Payment</a></li>
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">Shipping</a></li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-4 text-pink-500">ABOUT PASTELLE</h4>
                        <ul className="text-gray-500">
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">About</a></li>
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">Careers</a></li>
                            <li className="pb-4"><a href="/" className="hover:text-pink-300">Contact</a></li>

                        </ul>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-4 text-pink-500">FOLLOW US:</h4>
                        <div className="pb-4 flex flex-row gap-x-12">
                            <a href='https://www.facebook.com/stefania.rotaru/'><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" /></a>
                            <a href='https://www.instagram.com/stefania.rotaru/?hl=en'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" /></a>
                            <a href='https://twitter.com/?lang=en'> <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" /></a>
                        </div>

                        <a href='/'>
                            <div className='flex flex-col
                                        bg-white 
                                        hover:bg-pink-200
                                        rounded-lg 
                                        mt-4 
                                        shadow-lg
                                        w-80
                                        mr-6
                                        -ml-8
                                        items-center'>

                                <div className='text-gray-700 
                                        flex 
                                        flex-row 
                                        items-center'>
                                    <h4 className="py-4 px-2 font-bold ml-8">SUBSCRIBE TO OUR NEWSLETTER!</h4>

                                    <div className='mr-12'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <input type='text'
                                    className='-mt-2 mb-8 w-60 rounded-lg'
                                    placeholder='Enter your e-mail' />
                            </div>

                        </a>


                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
