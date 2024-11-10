
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/provider/search-provider";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const { setSearchValue, setArticles, articles, searchValue } = useContext(SearchContext);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setSearchValue(inputValue);
  };

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?page=9&per_page=12");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, [searchValue]);

  const filteredArticles = articles?.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="flex justify-around py-6">
      <img className="w-14 h-7" src="/image/copy.png" alt="Logo" />
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
      <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
        <input
          onChange={handleChange}
          value={value}
          placeholder="Search"
          type="text"
          className="outline-none flex-grow px-2"
        />
        <CiSearch className="text-gray-500 cursor-pointer" />
      </div> 

    </div>
  );
};

export default Header;

