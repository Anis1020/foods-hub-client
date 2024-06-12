import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
  const handleAddToCard = (product) => {
    console.log(product);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((salad) => (
          <FoodCard
            key={salad._id}
            menuItem={salad}
            handleAddToCard={handleAddToCard}
          ></FoodCard>
        ))}
      </div>
    </>
  );
};

export default OrderTab;
