import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Main = () => {
  const [image, setImage] = useState("https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw_");
  const changeImage = () => {
    setImage("https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
  }
  return (
    <div className="mx-[22rem]">
      <div id="mainImage" className="relative">
        <img
          className=" rounded-xl  h-[700px] w-full  object-cover bg-gradient-to-t"
          src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw__"
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
