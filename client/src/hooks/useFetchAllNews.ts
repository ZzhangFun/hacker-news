import { INews } from "../types/INews";
import { useEffect, useState } from "react";
import { newsAPI } from "../API/NewsService";

export const useFetchAllNews = () => {
  const [news, setNews] = useState<INews[]>([]);
  const { data: newsArr1, isLoading: load1 } = newsAPI.useFetchAllNewsQuery(1, {
    pollingInterval: 60000,
  });
  const { data: newsArr2, isLoading: load2 } = newsAPI.useFetchAllNewsQuery(2, {
    pollingInterval: 60000,
  });
  const { data: newsArr3, isLoading: load3 } = newsAPI.useFetchAllNewsQuery(3, {
    pollingInterval: 60000,
  });
  const { data: newsArr4, isLoading: load4 } = newsAPI.useFetchAllNewsQuery(4, {
    pollingInterval: 60000,
  });

  useEffect(() => {
    if (newsArr3 && newsArr2 && newsArr1 && newsArr4) {
      setNews(newsArr1.concat(newsArr2, newsArr3, newsArr4.slice(0, 10)));
    }
  }, [newsArr1, newsArr2, newsArr3, newsArr4]);
  return { news: news, isLoading: load1 && load2 && load3 && load4 };
};

//Документальный фильм, спиздили (хук спёр у Вани, пригорел с обсёрва,
//прост взял у чувака это, правда выглядит странно, но лень придумывать что-то другое
