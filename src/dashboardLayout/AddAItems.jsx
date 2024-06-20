import { useForm } from "react-hook-form";
import useAxiosPublic from "../customHooks/useAxiosPublic";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import Swal from "sweetalert2";
// import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddAItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // img upload to imgbb
    const imageFile = { image: data.photo[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.description,
        price: parseInt(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menus", menuItem);
      if (menuRes.data.insertedId) {
        //show success popup
        // toast("Item Added Successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "successfully added an item",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    reset();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <div className="lg:flex  gap-4">
          {/* register your input into the hook by invoking the "register" function */}
          <input
            type="text"
            className="border w-full lg:w-1/2 mb-3 p-2 rounded"
            placeholder="Food name"
            {...register("name")}
          />
          <input
            type="text"
            className="border w-full lg:w-1/2 mb-3 p-2 rounded"
            placeholder="Description"
            {...register("description")}
          />
        </div>
        <div className="lg:flex  gap-4">
          {/* register your input into the hook by invoking the "register" function */}
          <input
            type="text"
            className="border w-full lg:w-1/2 mb-3 p-2 rounded"
            placeholder="Category"
            {...register("category")}
          />
          <input
            type="number"
            className="border w-full lg:w-1/2 mb-3 p-2 rounded"
            placeholder="Price"
            {...register("price")}
          />
        </div>

        <div>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            type="file"
            className="border w-full p-2 rounded mb-3"
            placeholder="Photo url"
            {...register("photo", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <input className="btn btn-accent w-full" type="submit" />
      </form>
    </div>
  );
};

export default AddAItems;
