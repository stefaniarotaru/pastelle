import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {

const card = props.card;

    return (
        <div className="shadow-lg rounded-lg">
        <Link to={`/product/${card.id}`}>
            <img className="rounded-tl-lg rounded-tr-lg" src={card.url}/>
        </Link>
        <div className="p-5">
            <h3><Link to={`/product/${card.id}`}>{card.name}</Link></h3>
            <h3 className="text-xl">{card.price}</h3>
            <div className="flex flex-row my-3">
                <div className="bg-red-300 h-5 w-5 rounded-full shadow-md mr-2"></div>
                <div className="bg-green-300 h-5 w-5 rounded-full shadow-md mr-2"></div>
                <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
        </div>
    </div>
    )
}

export default Card
