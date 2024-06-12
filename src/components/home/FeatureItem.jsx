import SectionTitle from "../SectionTitle";
import featureImg from "../../assets/home/featured.jpg";
import "./feature.css";
const FeatureItem = () => {
  return (
    <div className="featureIgm bg-fixed">
      <SectionTitle
        heading={"Our Special Items"}
        subHeading={"Special"}
      ></SectionTitle>
      <div className="md:flex w-[80%] mx-auto gap-4 pb-10">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="space-y-3">
          <p>23/2/24</p>
          <p className="uppercase">where can i get some</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            omnis assumenda quos nihil praesentium consequatur! Alias cumque
            necessitatibus voluptates corporis! Numquam neque maxime asperiores
            sed, ipsa perspiciatis enim quaerat consectetur dicta provident a
            cum omnis adipisci aliquam optio animi commodi deserunt eveniet ea
            vel voluptatem dolor! Quos itaque illum minus!
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
