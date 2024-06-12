const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-16 w-96 mx-auto">
      <hr />
      <p className="text-xl">---{subHeading}---</p>

      <h1 className="text-3xl">{heading}</h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
