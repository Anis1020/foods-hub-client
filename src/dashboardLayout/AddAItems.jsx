import { useForm } from "react-hook-form";

const AddAItems = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            type="text"
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
