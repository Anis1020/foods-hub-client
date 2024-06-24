import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY);
const CheckOut = () => {
  return (
    <div className="pt-16 w-[70%] mx-auto">
      <SectionTitle heading="Payment" subHeading="Pay for Foods"></SectionTitle>
      <h2>this is check out page</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default CheckOut;
