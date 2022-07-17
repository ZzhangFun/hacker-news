import React, { FC } from "react";
import { INews } from "../types/INews";
import { Link } from "react-router-dom";

interface NewsItemProps {
  news: INews;
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  return (
    <Link to={`/news/${news.id}`}>
      <h1>{news.title}</h1>
      <p>Author: {news.user}</p>
      <p>Rate: {news.points}</p>
      <p>Date: {news.time}</p>
    </Link>
  );
};

export default NewsItem;
