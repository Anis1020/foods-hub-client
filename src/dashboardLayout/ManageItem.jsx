// import useAxiosPublic from "../customHooks/useAxiosPublic";

import { FaDeleteLeft } from "react-icons/fa6";
import useMenu from "../customHooks/useMenu";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

const ManageItem = () => {
  // const axiosPublic=useAxiosPublic()
  const [menus, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  //   const {data:menuItems=[]} = useQuery({
  //     queryKey: ["menuDelete"],
  //     queryFn: async () => {
  //       //here have to data fetch
  //     },
  //   });

  const handleDeleteItem = (menu) => {
    console.log(menu);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menus/${menu._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menus?.map((menu, index) => (
              <tr key={menu._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={menu.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{menu.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">{menu._id}</span>
                </td>
                <td>
                  <Link to={`/updateItem/${menu._id}`}>
                    <button className="btn btn-ghost btn-md">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteItem(menu)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaDeleteLeft></FaDeleteLeft>
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

export default ManageItem;
