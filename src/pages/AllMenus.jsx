import { Helmet } from "react-helmet-async";

import SectionTitle from "../components/SectionTitle";
import Cover from "../components/Cover";
import menuCoverImg from "../assets/menu/banner3.jpg";
import Category1 from "../assets/menu/dessert-bg.jpeg";
import Category2 from "../assets/menu/pizza-bg.jpg";
import Category3 from "../assets/menu/salad-bg.jpg";
import Category4 from "../assets/menu/dessert-bg.jpeg";

import useMenu from "../customHooks/useMenu";
import MenuCategory from "../components/MenuCategory";

const AllMenus = () => {
  const [menus] = useMenu();
  const salads = menus.filter((salad) => salad.category === "salad");
  const pizzas = menus.filter((salad) => salad.category === "pizza");
  const soups = menus.filter((salad) => salad.category === "soup");
  const desserts = menus.filter((salad) => salad.category === "dessert");
  const drinks = menus.filter((salad) => salad.category === "drinks");
  const todaysOffers = menus.filter((salad) => salad.category === "offered");

  return (
    <section className="">
      <Helmet>
        <title>Restaurant || All Menus</title>
      </Helmet>
      <div>
        <Cover menuCoverImg={menuCoverImg} title={"our menu"}></Cover>
        <SectionTitle
          subHeading={"Do not miss"}
          heading={"Todays Offer"}
        ></SectionTitle>
        <MenuCategory items={todaysOffers}></MenuCategory>
        <MenuCategory
          items={desserts}
          coverImg={Category1}
          title="desserts"
        ></MenuCategory>
        <MenuCategory
          items={pizzas}
          coverImg={Category2}
          title="pizzas"
        ></MenuCategory>{" "}
        <MenuCategory
          items={salads}
          coverImg={Category3}
          title="salads"
        ></MenuCategory>
        <MenuCategory
          items={soups}
          coverImg={Category4}
          title="soups"
        ></MenuCategory>{" "}
        <MenuCategory
          items={drinks}
          coverImg={Category4}
          title="drinks"
        ></MenuCategory>
      </div>
    </section>
  );
};

export default AllMenus;
