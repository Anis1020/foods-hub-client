import { Link } from "react-router-dom";

const FoodCard = ({ menuItem, handleAddToCard }) => {
  const { _id, image, price, name, recipe } = menuItem;

  // const handleAddToCard = (id = {

  // });
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure className=" pt-5">
          <img src={image} alt="Shoes" className="rounded-xl" />
          <p className="absolute top-10 right-10 bg-slate-900 text-white">
            $ {price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
            <Link to={`/cart/${_id}`}>
              <button
                onClick={() => handleAddToCard(menuItem)}
                className="btn btn-primary"
              >
                Add to card
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
