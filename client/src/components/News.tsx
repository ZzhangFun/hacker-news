import React, { FC, useEffect } from "react";
import { fetchNews } from "../store/action-creators/news";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";

const News: FC = () => {
  const { news, loading, error } = useTypedSelector((state) => state.news);
  const { fetchNews } = useAction();

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) return <div>Типо загрузка</div>;
  if (error) return <div>Типо ошибка</div>;

  return (
    <div>
      {news.map((n) => (
        <div key={n.id}>{n.name}</div>
      ))}
    </div>
  );
};

export default News;
