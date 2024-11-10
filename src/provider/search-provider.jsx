import { createContext, useEffect, useState } from "react";
export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=9&per_page=12"
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
    const findUser = () => {
      setArticles.filter((artice) => articles.includes(article.name).toLowerCase());
    }
  }; 

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, setArticles }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
