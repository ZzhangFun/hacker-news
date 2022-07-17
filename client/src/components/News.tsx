import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../store/action-creators/news";
import { useTypedSelector } from "../hooks/useTypedSelector";

const News: FC = () => {
  const { news, loading, error } = useTypedSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (loading) return <div>Типо загрузка</div>;
  if (error) return <div>Типо ошибка</div>;

  return (
    <div>
      {news.map((n) => (
        <div>{n.name}</div>
      ))}
    </div>
  );
};

export default News;
