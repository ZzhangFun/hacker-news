import { INews } from "../types/INews";
import { useEffect, useState } from "react";
import { newsAPI } from "../API/NewsService";

export const useFetchAllNews = () => {
  const [news, setNews] = useState<INews[]>([]);
  const { data: newsFirst, isLoading: loadFirst } =
    newsAPI.useFetchAllNewsQuery(1, {
      pollingInterval: 60000,
    });
  const { data: newsSecond, isLoading: loadSecond } =
    newsAPI.useFetchAllNewsQuery(2, {
      pollingInterval: 60000,
    });
  const { data: newsThird, isLoading: loadThird } =
    newsAPI.useFetchAllNewsQuery(3, {
      pollingInterval: 60000,
    });
  const { data: newsFourth, isLoading: loadFourth } =
    newsAPI.useFetchAllNewsQuery(4, {
      pollingInterval: 60000,
    });

  useEffect(() => {
    if (newsFirst && newsSecond && newsThird && newsFourth) {
      setNews(newsFirst.concat(newsSecond, newsThird, newsFourth.slice(0, 10)));
    }
  }, [newsFirst, newsSecond, newsThird, newsFourth]);
  return {
    news,
    isLoading: loadFirst && loadSecond && loadThird && loadFourth,
  };
};

//Документальный фильм, спиздили (хук спёр у Вани, пригорел с обсёрва,
//прост взял у чувака это, правда выглядит странно, но лень придумывать что-то другое
