const MenuItem = ({ menuItem }) => {
  const { image, price, name, recipe } = menuItem;
  return (
    <>
      <div className="flex gap-3">
        <img
          className="w-16 h-16 rounded-r-full rounded-b-full"
          src={image}
          alt=""
        />
        <div>
          <p>{name}</p>
          <p>{recipe}</p>
        </div>
        <p>{price}</p>
      </div>
    </>
  );
};

export default MenuItem;
