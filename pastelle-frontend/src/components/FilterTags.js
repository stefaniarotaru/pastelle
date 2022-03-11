import React from 'react';

const FilterTags = ({filters, removeFilter}) => {


    return (
<div className="flex flex-row gap-x-2 ml-8 items-center">
                        {/* <p>Filters:</p> */}
                        {filters.subcategory ?
                            <button className="flex bg-pink-400/80 pl-4 pr-2 py-1 rounded text-white items-center"
                                onClick={() => removeFilter('subcategory')}
                            >{filters.subcategory}
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button> : ''}
                        {filters.color ?
                            <button className="flex bg-pink-400/80 pl-4 pr-2 py-1 rounded text-white items-center"
                                onClick={() => removeFilter('color')}
                            >{filters.color}
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            : ''}


                    </div>
    )
};

export default FilterTags;
