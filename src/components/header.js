import Logo from "./images/logo.jpeg";
import React from "react";

function header() {
  return (
    <div className="header flex mt-3 m-auto justify-center pt-[10px] pb-[10px]">
      <div className="flex">
        <img src={Logo} className="w-[60px]" />

        <h1 className="flex text-2xl">intermed</h1>
      </div>
      <div className="ml-[200px]">
        <ul className=" text-xl flex gap-[40px]">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/"> Components</a>
          </li>
          <li>
            <a href="/">Price</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
