import Image1 from "./images/image1.jpg";
function SecondSection() {
  return (
    <>
      <div className=" h-[300px] w-[100%]">
        <div className="px-[18%] py-[5%] ">
          <h1 className="font-bold text-3xl">
            Work in Germany<br></br>as a nurse
          </h1>
          <p className="text-lg">
            more <p className="text-[#52a7c2] inline font-bold">respect</p>,
            higher <p className="text-[#52a7c2] inline font-bold">security</p>,
            better <p className="text-[#52a7c2] inline font-bold">life</p>
          </p>
          <p className="w-[350px] text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.
          </p>
          <button className="transition duration-500 bg-[#52a7c2] px-8 py-2 mt-2 rounded-md hover:bg-white hover:text-black hover:scale-110 hover:border-2 hover:border-[#52a7c2]">
            Enroll Now
          </button>
          <img
            className="absolute top-[110%] left-[47%] w-[30%] "
            src={Image1}
          />
        </div>
      </div>
    </>
  );
}

export default SecondSection;
