import { Link } from "react-router-dom";
import MenuItem from "../share/MenuItem";
import Cover from "./Cover";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="py-9">
      {title && <Cover menuCoverImg={coverImg} title={title}></Cover>}
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-10 w-[80%] mx-auto">
        {items?.map((menu) => (
          <MenuItem key={menu._id} menuItem={menu}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline ms-14 md:ms-32 border-0 border-b-4 w-36 ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
