const AddAItems = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;

    const itemInfo = { title };
    console.log(itemInfo);
  };
  return (
    <>
      <form onSubmit={handleAddItem} className="card-body">
        <div className="form-control">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>{" "}
        <div className="form-control">
          <input
            type="text"
            placeholder="Description"
            name="Description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="price"
            name="price"
            className="input input-bordered"
            required
          />
        </div>{" "}
        <div className="form-control">
          <input
            type="image"
            placeholder="img url"
            name="img"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </>
  );
};

export default AddAItems;
