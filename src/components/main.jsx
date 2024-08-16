import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Carousel from "./carousel";
const Main = () => {
  // const [image, setImage] = useState("/image/back.png");

  // const changeImage = () => {
  //   setImage(
  //     "https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   );
  // };
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g8FiZFru0SLgdmdveGmwo1CYpan6ntVe0sUeshN6bhnE3GlN2NWBMWlJxNT-~AHpzo1i9vWcqSL91kIFM8ze5UNYAg99~eW9SR1mtTUR9aeQAWSQeFB~QOTHTAyWN0Q9qVYs8gQGR14rub3Js~ZN02HfiRxLjUGIccRMXFjItL0ePDPNeCp~oFpABK~ggqoF46XWaKx2c6tj0yKi9jw9dQcQIUEZUaTRyKcK4IsbvQVKYpuJeF1r8Vt9DkJT~DOJ9cjpDoRotq2IpGLSXMtsiJZ7s6ese0Xd8Yyy73khAS095tv~e7JjuaPYXB7fnpQ~pkLpSj3XwOpffnQieqGvjA__",
    "https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="">
      {/* <div id="mainImage" className="relative ">
        <img
          className=" rounded-xl  h-[700px] w-full  object-cover bg-gradient-to-t"
          src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g8FiZFru0SLgdmdveGmwo1CYpan6ntVe0sUeshN6bhnE3GlN2NWBMWlJxNT-~AHpzo1i9vWcqSL91kIFM8ze5UNYAg99~eW9SR1mtTUR9aeQAWSQeFB~QOTHTAyWN0Q9qVYs8gQGR14rub3Js~ZN02HfiRxLjUGIccRMXFjItL0ePDPNeCp~oFpABK~ggqoF46XWaKx2c6tj0yKi9jw9dQcQIUEZUaTRyKcK4IsbvQVKYpuJeF1r8Vt9DkJT~DOJ9cjpDoRotq2IpGLSXMtsiJZ7s6ese0Xd8Yyy73khAS095tv~e7JjuaPYXB7fnpQ~pkLpSj3XwOpffnQieqGvjA__"
        />
      //   <div className="w-[598px] h-[252px] bg-white pl-11  pt-16 rounded-xl  absolute  left-10 bottom-10 border overflow-hidden">
      //     <p className="bg-blue-500 w-24 rounded-sm text-stone-100">
      //       Technology
      //     </p>
      //     <br />
      //     <p className="text-2xl font-semibold   ">
      //       Grid system for better <br />
      //       Design User Interface
      //     </p>
      //     <br />
      //     <p className="text-gray-400">August 20, 2022</p>
      //   </div>
      // </div> */}
      <Carousel slides={slides} currentIndex={currentIndex} />
      <div className="flex gap-3 justify-end pt-5 ">
        <FaChevronLeft
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
          className="border text-3xl"
          color="black"
        />
        <FaChevronRight
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
          className="border text-3xl"
        />
      </div>
    </div>
  );
};
export default Main;

// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Carousel from "./carousel";

// const Main = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g8FiZFru0SLgdmdveGmwo1CYpan6ntVe0sUeshN6bhnE3GlN2NWBMWlJxNT-~AHpzo1i9vWcqSL91kIFM8ze5UNYAg99~eW9SR1mtTUR9aeQAWSQeFB~QOTHTAyWN0Q9qVYs8gQGR14rub3Js~ZN02HfiRxLjUGIccRMXFjItL0ePDPNeCp~oFpABK~ggqoF46XWaKx2c6tj0yKi9jw9dQcQIUEZUaTRyKcK4IsbvQVKYpuJeF1r8Vt9DkJT~DOJ9cjpDoRotq2IpGLSXMtsiJZ7s6ese0Xd8Yyy73khAS095tv~e7JjuaPYXB7fnpQ~pkLpSj3XwOpffnQieqGvjA__",
//     "https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const handlePrevious = () => {
//     const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="mx-[22rem] flex">
//       <div id="mainImage" className="relative ">
//         <img
//           className="rounded-xl h-[700px] w-full object-cover bg-gradient-to-t"
//           src={slides[currentIndex]}
//           alt="Carousel Slide"
//         />
//         <div className="w-[598px] h-[252px] bg-white pl-11 pt-16 rounded-xl absolute left-10 bottom-10 border overflow-hidden">
//           <p className="bg-blue-500 w-24 rounded-sm text-stone-100">
//             Technology
//           </p>
//           <br />
//           <p className="text-2xl font-semibold">
//             Grid system for better <br />
//             Design User Interface
//           </p>
//           <br />
//           <p className="text-gray-400">August 20, 2022</p>
//         </div>
//       </div>
//       <div className="flex gap-3 justify-end pt-5">
//         <FaChevronLeft
//           onClick={handlePrevious}
//           className="border text-3xl cursor-pointer"
//         />
//         <FaChevronRight
//           onClick={handleNext}
//           className="border text-3xl cursor-pointer"
//         />
//       </div>
//       <Carousel slides={slides} currentIndex={currentIndex} />
//     </div>
//   );
// };

// export default Main;
