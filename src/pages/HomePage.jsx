import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import FeatureItem from "../components/home/FeatureItem";
import PopularMenu from "../components/home/PopularMenu";
import Testimonial from "../components/home/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant | Fresh Foods</title>
      </Helmet>
      <Banner></Banner>
      <SectionTitle
        subHeading={"Always Open"}
        heading={"Order Now"}
      ></SectionTitle>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <FeatureItem></FeatureItem>
      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
