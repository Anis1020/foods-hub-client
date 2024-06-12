import Cover from "../components/Cover";
import orderCoverImg from "../assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../customHooks/useMenu";

import OrderTab from "../components/order/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import useAuth from "../customHooks/useAuth";
// import { useParams } from "react-router-dom";
const Order = () => {
  // const { setCount } = useAuth();
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menus] = useMenu();
  const salads = menus.filter((salad) => salad.category === "salad");
  const pizzas = menus.filter((salad) => salad.category === "pizza");
  const soups = menus.filter((salad) => salad.category === "soup");
  const desserts = menus.filter((salad) => salad.category === "dessert");
  const drinks = menus.filter((salad) => salad.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Restaurant || Menu</title>
      </Helmet>
      <Cover menuCoverImg={orderCoverImg} title={"Order Food"}></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drink</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
