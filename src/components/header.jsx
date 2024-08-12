import { SearchContext } from "@/provider/search-provider";
import Link from "next/link";
import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const { setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex justify-around  py-6">
      <img className="w-14 h-7" src="/image/copy.png" />
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center border-color">
        <input onChange={handleChange} placeholder="Search" type="text" />
        <CiSearch />
      </div>
    </div>
  );
};
export default Header;
