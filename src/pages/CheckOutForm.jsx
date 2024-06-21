import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import useCart from "../customHooks/useCart";
import useAuth from "../customHooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState();
  const [error, setError] = useState("");
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [carts, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("payment intent error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Payment successfully done", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        //now save the payment history in database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // have to convert utc date, use moment js
          cartIds: carts.map((item) => item._id),
          menuIds: carts.map((item) => item.foodId),
          status: "pending",
        };
        axiosSecure
          .post("/payment", payment)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
        refetch();
        navigate("/payHistory");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="border p-3 my-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-accent my-6"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-400">{error}</p>
      {transactionId && (
        <p className="text-green-400">
          Your transaction id is: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckOutForm;
