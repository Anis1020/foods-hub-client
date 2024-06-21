import SectionTitle from "../components/SectionTitle";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import useAuth from "../customHooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading={"Payment History"}
        subHeading={"You have been pay for those item"}
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {paymentHistory?.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>{item.price}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
