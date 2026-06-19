import  { use } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({ bottlesData }) => {

    const bottles = use(bottlesData);
    console.log(bottles)

    return (
        <div>
            <h1>Bottles : {bottles.length}</h1>

            <div className="bottles-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bottles.map((bottle)=><Bottle key={bottle.id} bottle={bottle} />)}
            </div>
        </div>
    );
};

export default Bottles;