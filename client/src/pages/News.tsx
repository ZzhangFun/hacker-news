import React, { FC } from "react";
import NewsItem from "../components/NewsItem";
import { useFetchAllNews } from "../hooks/useFetchAllNews";

const News: FC = () => {
  const { news, isLoading } = useFetchAllNews();
  if (isLoading) return <>Типо загрузка...</>;
  return <>{news && news.map((n) => <NewsItem key={n.id} news={n} />)};</>;
};

export default News;
