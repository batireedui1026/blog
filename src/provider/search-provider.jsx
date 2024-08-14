import { createContext, useState } from "react";
export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  // const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=9&per_page=12"
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  // useEffect(() => {
  //   getArticleData();
  // }, []);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
