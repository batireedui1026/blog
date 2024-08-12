// const cardEl = [

//   {
//     img1: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w_",
//     title: "technology",
//     label: "wtdgfufh",
//     img2: "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_",
//     ner: "ernie",
//     date: "4568",
//   },
//   {
//     img1: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w_",
//     title: "technology",
//     label: "wtdgfufh",
//     img2: "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1hoqgG4yeqEUDdsuoqZN4yCFy8iDZHwm0C7QSOu-iQZEQl6ttPeBpeyGGuOhgHGAzATy7oME3oVNEExyVruUe8JLX6PKhWJZ~0khhW6944D4IPl8wlBCcrg-rW4wSE0WSOZWZeLRIVisV4nj1PRnA35la67F5Ln3EfWks7ZktrNZln9WI5AjcOv-wS1GW~PHyJhxofU086gtJzYHPGIYmrm9pK0MUXyxUU0vIupzDVvWiLwfGtu5Xv6b13-4jVqqBcdlFp3kQwqjK0KC6QuArYu5MO-o2A8Yzh0Ze-xoakaXY7i45sXXbl80FOjtESWSHJ0YUf7nt73Zx8oLdIPvg_",
//     ner: "ernIreeduiie",
//     date: "4568",
//   },
// ];
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

  console.log("articles", articles);
  console.log(searchValue);
  return (
    <div className="grid grid-cols-3 gap-5">
      <p>{searchValue}</p>
      {articles.map((article) => {
        // console.log("article", article.id);
        return (
          <Link href={`/${article.id}`}>
            <div className="border pl-9">
              <img
                className="w-[380px]  rounded mt-3"
                src={article.social_image}
              />
              <p className="bg-gray-300 w-24 h-5 my-3 rounded-sm text-center text-blue-500">
                {article.title}
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
export default Card;
