import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Main = () => {
  const [image, setImage] = useState("/image/back.png");

  const changeImage = () => {
    setImage(
      "https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  };

  return (
    <div className="mx-[22rem] flex">
      <div id="mainImage" className="relative ">
        <img
          className=" rounded-xl  h-[700px] w-full  object-cover bg-gradient-to-t"
          src={image}
        />
        <div className="w-[598px] h-[252px] bg-white pl-11  pt-16 rounded-xl  absolute  left-10 bottom-10 border">
          <p className="bg-blue-500 w-24 rounded-sm text-stone-100">
            Technology
          </p>
          <br />
          <p className="text-2xl font-semibold   ">
            Grid system for better <br />
            Design User Interface
          </p>
          <br />
          <p className="text-gray-400">August 20, 2022</p>
        </div>
      </div>
      <div className="flex gap-3 justify-end pt-5 ">
        <FaChevronLeft className="border text-3xl" />
        <FaChevronRight onClick={changeImage} className="border text-3xl" />
      </div>

      <div id="mainImage" className="relative">
        <img
          className=" rounded-xl  h-[700px] w-full  object-cover bg-gradient-to-t"
          src={image}
        />
        <div className="w-[598px] h-[252px] bg-white pl-11  pt-16 rounded-xl  absolute  left-10 bottom-10 border">
          <p className="bg-blue-500 w-24 rounded-sm text-stone-100">
            Technology
          </p>
          <br />
          <p className="text-2xl font-semibold   ">
            Grid system for better <br />
            Design User Interface
          </p>
          <br />
          <p className="text-gray-400">August 20, 2022</p>
        </div>
      </div>
      <div className="flex gap-3 justify-end pt-5 ">
        <FaChevronLeft className="border text-3xl" />
        <FaChevronRight onClick={changeImage} className="border text-3xl" />
      </div>

      <div id="mainImage" className="relative">
        <img
          className=" rounded-xl  h-[700px] w-full  object-cover bg-gradient-to-t"
          src={image}
        />
        <div className="w-[598px] h-[252px] bg-white pl-11  pt-16 rounded-xl  absolute  left-10 bottom-10 border">
          <p className="bg-blue-500 w-24 rounded-sm text-stone-100">
            Technology
          </p>
          <br />
          <p className="text-2xl font-semibold   ">
            Grid system for better <br />
            Design User Interface
          </p>
          <br />
          <p className="text-gray-400">August 20, 2022</p>
        </div>
      </div>
      <div className="flex gap-3 justify-end pt-5 ">
        <FaChevronLeft className="border text-3xl" />
        <FaChevronRight onClick={changeImage} className="border text-3xl" />
      </div>
    </div>
  );
};
export default Main;
