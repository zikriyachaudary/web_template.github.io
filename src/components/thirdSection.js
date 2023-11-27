import Bg from "./images/bg-3.jpg";
function thirdSection() {
  return (
    <>
      <div>
        <div className="mt-[10%]">
          <img src={Bg} />
          <div className="w-[100%] h-[112.5%] bg-[blue] opacity-25 absolute top-[165%]"></div>
        </div>
        <div className="font-medium text-4xl flex justify-center absolute left-[40%] top-[200%] text-white">
          <h1>Our Latest Courses </h1>
        </div>
        <div className="columns-3 absolute top-[200%] p-[5%] ml-12">
          <div className=" border-2 border-[white] bg-[#7087fa] rounded-xl shadow-2xl hover:bg-[white] hover:border-[#7087fa] transition duration-500">
            <img className="w-[80%] ml-[10%] mt-[15%]" src={Bg} />
            <p className=" font-medium text-2xl text-center mb-[20%]">
              Course Name 1
            </p>
          </div>
          <div className=" border-2 border-[white] bg-[#7087fa] rounded-xl shadow-2xl hover:bg-[white] hover:border-[#7087fa] transition duration-500">
            <img className="w-[80%] ml-[10%] mt-[15%]" src={Bg} />
            <p className=" font-medium text-2xl text-center mb-[20%]">
              Course Name 2
            </p>
          </div>
          <div className=" border-2 border-[white] bg-[#7087fa] rounded-xl shadow-2xl hover:bg-[white] hover:border-[#7087fa] transition duration-500">
            <img className="w-[80%] ml-[10%] mt-[15%]" src={Bg} />
            <p className=" font-medium text-2xl text-center mb-[20%]">
              Course Name 3
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default thirdSection;
