import bg_1 from "./images/bg1.jpg";
import bg2 from "./images/bg-2.png";
function firstSection() {
  return (
    <>
      <div>
        <img className="w-[100%] h-[500px]" src={bg_1} />
        <div className="w-[100%] h-[500px] bg-[#212591] absolute top-[75px] opacity-40"></div>
      </div>
      <div className="absolute top-[40%] left-[20%] w-[32%]">
        <div className="">
          <h1 className="text-5xl text-white">
            <span className="font-extrabold">German Language School</span> "for
            nurses"
          </h1>
          <br></br>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="m-2 text-white font-bold text-lg ">
            <button className="transition duration-500 bg-[#52a7c2] px-8 py-2 m-6 rounded-md hover:bg-white hover:text-black hover:scale-110">
              Enroll Now
            </button>
            <button className="transition duration-500 bg-[#ffffff] text-[#52a7c2] px-8 py-2 m-6 rounded-md hover:bg-[#52a7c2] hover:text-white hover:scale-110">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-[20.5%] left-[52%]">
          <img className="h-[450px]" src={bg2} />
        </div>
      </div>
    </>
  );
}
export default firstSection;
