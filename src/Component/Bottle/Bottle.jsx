
const Bottle = ({bottle, handleBuy}) => {
    const { name, price, img} = bottle;
    return (
        <div className="bottle-card border p-4 rounded-lg shadow-md">
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
            <button onClick={()=>handleBuy(bottle)} className="btn btn-primary">Buy Now</button>
        </div>
    );
};

export default Bottle;