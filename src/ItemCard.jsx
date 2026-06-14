export default function ItemCard({item}) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure>
        <img
          src={item.image}
          alt="Product"
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{item.name}</h2>
          <div className="badge badge-secondary">New</div>
        </div>

        <p className="text-gray-500">
          {item.description}
        </p>

        <div className="flex items-center gap-2">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="text-sm text-gray-500">(4.0)</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-primary">{item.price}</span>

          <div className="card-actions">
            <button className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}