import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <FadeLoader size={100} color="red" />
    </div>
  );
};

export default Loader;
