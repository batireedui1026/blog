import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ArticleDetail = () => {
  const { query } = useRouter();
  console.log("QR", query.id);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticleById(query.id);
  }, []);

  const dateOfArticle = new Date(articleDetail?.created_at);
  console.log("dateOfArticle", dateOfArticle.getUTCMonth());
  console.log("dateOfArticle", dateOfArticle.getFullYear());
  // console.log("articleDetail", articleDetail);
  return (
    <div className="p-10">
      <div className="flex">
        {/* <img
          className="w-10 h-10 rounded-full"
          src={articleDetail?.user.profile_image}
          alt=""
        /> */}
        <div className="">
          <h2>{articleDetail?.title}</h2>
          <p>{articleDetail?.created_at}</p>
        </div>
      </div>
      <div
        className="blog-detail"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};

export default ArticleDetail;
