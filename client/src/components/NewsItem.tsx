import React, { FC } from "react";
import { INews } from "../types/INews";
import { Link } from "react-router-dom";

interface NewsItemProps {
  news: INews;
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  const time = new Date(news.time * 1000);
  return (
    <Link to={`/news/${news.id}`}>
      <h1>{news.title}</h1>
      <p>Author: {news.user}</p>
      <p>Rate: {news.points}</p>
      <p>
        Date: {time.getDate()}.{time.getMonth()}.{time.getFullYear()}{" "}
        {time.getHours()}:{time.getMinutes()}
      </p>
    </Link>
  );
};

export default NewsItem;
