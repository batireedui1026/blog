import { SearchContext } from "@/provider/search-provider";
import { useContext } from "react";

const Post = () => {
  return (
    <div className="w-[1500px] mx-auto py-6">
      <h1 className="font-semibold text-2xl  py-4 pl-28">All Blog Post</h1>
      <div className="flex justify-between mx-28 ">
        <div className="flex gap-5">
          <p className="text-red-400">All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <p>View All</p>
      </div>
    </div>
  );
};
export default Post;
