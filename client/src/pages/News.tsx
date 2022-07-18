import React, { FC } from "react";
import NewsItem from "../components/NewsItem";
import { useFetchAllNews } from "../hooks/useFetchAllNews";

const News: FC = () => {
  const { news, isLoading } = useFetchAllNews();
  if (isLoading) return <>Типо загрузка...</>;
  return (
    <div className="newsBox">
      {news && news.map((n) => <NewsItem key={n.id} news={n} />)};
    </div>
  );
};

export default News;
