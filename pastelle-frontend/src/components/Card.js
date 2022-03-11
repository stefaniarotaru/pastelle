import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

    const card = props.card;

    return (
        <div className="shadow-lg rounded-lg relative">
            <Link to={`/product/${card.id}`}>
                {card.percentage > 1 ?
                    <div className='absolute bg-pink-100/80 h-10 w-32 rounded-r-lg mt-6 flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-2" fill="none" viewBox="0 0 24 24" stroke="#f472b6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <p className='text-pink-400 font-bold ml-2'>SALE -{card.percentage}%</p>
                    </div> : ''}
                <img className="rounded-tl-lg rounded-tr-lg" src={card.imageUrls[0]} />

            </Link>
            <div className="p-5">
                <h3><Link to={`/product/${card.id}`}>{card.name}</Link></h3>
                {!card.salePrice ? '' : <h3 className="text-green-500 text-xl">${card.salePrice}</h3>}
                <h3 className={`text-lg ${card.sale ? 'line-through' : ''}`}>${card.price}</h3>
            </div>
        </div>


    )
}

export default Card
