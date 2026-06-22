import  { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToStoredCart } from '../../utilis/utilis';

const Bottles = ({ bottlesData }) => {

    const [buy, setBuy] =useState([])

    const handleBuy=(bottle)=>{

        const addCart = [...buy, bottle]
        setBuy(addCart)
        console.log("add to cart", bottle)
        addToStoredCart(bottle.id)
    }

    const bottles = use(bottlesData);
    console.log(bottles)

    return (
        <div>
            <h1>Bottles : {bottles.length}</h1>
            <p>add to cart: {buy.length}</p>

            <div className="bottles-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bottles.map((bottle)=><Bottle key={bottle.id} bottle={bottle} handleBuy={handleBuy}/>)}
            </div>
        </div>
    );
};

export default Bottles;