import img from "../../assets/img1.png";

const Curriculum = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-[#2B2B2B] p-5">
        <div className="flex justify-center">
          <img className="w-32 rounded-full" src={img} />
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
      <div className="w-3/4  bg-[#1C1C1C] p-5"></div>
    </div>
  );
};

export default Curriculum;
