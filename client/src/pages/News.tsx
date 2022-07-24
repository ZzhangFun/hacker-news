import React, { FC } from "react";
import NewsItem from "../components/NewsItem";
import { useFetchAllNews } from "../hooks/useFetchAllNews";
import Loader from "../components/UI/Loader/Loader";
import { ReloadOutline } from "react-ionicons";

const News: FC = () => {
  const { news, isLoading } = useFetchAllNews();
  if (isLoading) return <Loader />;
  return (
    <div className="newsBox news__height">
      <span onClick={() => console.log("Doesn`t work")} className="reload">
        <ReloadOutline color={"#0affa1"} rotate />
      </span>
      {news && news.map((n) => <NewsItem key={n.id} news={n} />)};
    </div>
  );
};

export default News;
