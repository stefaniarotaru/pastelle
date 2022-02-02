import React from 'react';
import { useEffect, useState } from "react/cjs/react.development";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

const Subcategory = () => {
    let { subcategory } = useParams();

    const url = "http://localhost:8080/product/subcategory";

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        axios.get(url + `/${subcategory}`).then(res => {
            setCards(res.data)
            console.log(res.data)
        })
    }, [])
    return (

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            
            {cards.map(card => <Card key={card.id} card={card} />)}
                        
        </div>
    )
   

   
};

export default Subcategory;
