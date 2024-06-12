import SectionTitle from "../SectionTitle";
import MenuItem from "../../share/MenuItem";
import useMenu from "../../customHooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto">
        {popular?.map((menu) => (
          <MenuItem key={menu._id} menuItem={menu}></MenuItem>
        ))}
        <Link to={"/allMenus"}>
          <button className="btn btn-outline border-0 border-b-4 w-36 ">
            See All Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
