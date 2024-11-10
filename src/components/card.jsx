import { SearchContext } from "@/provider/search-provider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Card = () => {
  const [articles, setArticles] = useState([]);
  const { searchValue } = useContext(SearchContext);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=9&per_page=12"
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);
 
  const findPost = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  

  console.log("articles", articles);
  console.log(searchValue);
  return (
    <div className="max-w-[1500px] mx-auto">
       <div className="pl-3">
        <p className="min-w-96 h-10 bg-gray-100 rounded text-blue-300">
          Хайлт утга:{searchValue}
        </p>
       </div>
       <div className="grid grid-cols-3 gap-5 my-5">
        {findPost.map((article) => {
          // console.log("article", article.id);
          return (
            <Link href={`/${article.id}`}>
              <div className="border pl-9">
                <img
                  className="w-[380px]  rounded mt-3"
                  src={article.social_image}
                />
                <p className="bg-gray-300 w-64 h-12 my-3 rounded-sm text-center text-blue-500">
                  {article.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    
   
  );
};
export default Card;
