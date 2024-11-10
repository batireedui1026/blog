import Link from "next/link";
import { useEffect, useState } from "react";

const BlogCard = () => {
  const [articles, setArticles] = useState([]);

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

  console.log("articles", articles);
  return (
    <div className="grid grid-cols-3 gap-5 py-20">
      {articles.map((article) => {
        // console.log("article", article.id);
        return (
          <Link href={`/${article.id}`}>
            <div className="border pl-9">
              <img
                className="w-[380px]  rounded mt-3"
                src={article.social_image}
              />
              <p className=" w-24 h-5 my-3 rounded-sm text-center text-blue-500">
                {articles.title}
              </p>
              {/* <h2 className="text-xl font-medium w-96">{articles.label}</h2>
            <div className="flex gap-4 items-center pb-3">
              <img className="w-9 rounded-full mt-5" src={articles.img2} />
              <p className="text-gray-300">{articles.ner}</p>
              <p className="text-gray-300">{articles.date}</p>
            </div> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default BlogCard;