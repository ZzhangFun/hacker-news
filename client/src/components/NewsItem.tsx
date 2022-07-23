import React, { FC } from "react";
import { INews } from "../types/INews";
import { Link } from "react-router-dom";

interface NewsItemProps {
  news: INews;
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  const time = new Date(news.time * 1000);
  return (
    <Link className="newsItem" to={`/news/${news.id}`}>
      <h1>{news.title}</h1>
      <h2
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        Author: <h3>{news.user}</h3>
      </h2>

      <div>
        <p>Rate: {news.points}</p>
        <p>
          Date: {time.getDate()}.{`0${time.getMonth() + 1}`}.
          {time.getFullYear()} {time.getHours()}:{time.getMinutes()}
        </p>
      </div>
    </Link>
  );
};

export default NewsItem;
