import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="flex justify-around  py-6">
      <img className="w-14 h-7" src="/image/copy.png" />
      <div className="flex gap-5">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="flex items-center border-color">
        <input placeholder="Search" type="text" />
        <CiSearch />
      </div>
    </div>
  );
};
export default Header;
