import { FaTrash } from "react-icons/fa";
import useCart from "../customHooks/useCart";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (id) => {
    console.log(id);
    axiosSecure
      .delete(`/carts/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const totalItems = carts.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );
  return (
    <div className="">
      <div className="flex justify-around items-center mb-4">
        <h1>Total Orders: {carts.length}</h1>
        <h1>Total Price: {totalItems}</h1>
        {carts.length ? (
          <Link to={"/payNow"}>
            <button className="btn bg-slate-300">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn bg-slate-300">
            Pay
          </button>
        )}
      </div>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
