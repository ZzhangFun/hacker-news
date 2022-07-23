import React, { FC } from "react";
import NewsItem from "../components/NewsItem";
import { useFetchAllNews } from "../hooks/useFetchAllNews";
import Loader from "../components/UI/Loader/Loader";

const News: FC = () => {
  const { news, isLoading } = useFetchAllNews();
  if (isLoading) return <Loader />;
  return (
    <div className="newsBox news__height">
      {news && news.map((n) => <NewsItem key={n.id} news={n} />)};
    </div>
  );
};

export default News;
