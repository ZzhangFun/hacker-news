import React, { FC } from "react";
import { newsAPI } from "../API/NewsService";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";

const NewsIdPage: FC = () => {
  const params = useParams();
  const { data: page, isLoading } = newsAPI.useFetchNewsPageWithCommentsQuery(
    params.id,
    {
      pollingInterval: 60000,
    }
  );
  console.log(page);
  const time = page && new Date(page.time * 1000);
  if (isLoading) return <>Типо загрузка...</>;
  return (
    <>
      {page && time && (
        <>
          <h1>{page.title}</h1>
          <p>Author: {page?.user}</p>
          <p>Url: {page?.url}</p>
          <p>
            Date: {time.getDate()}.{time.getMonth()}.{time.getFullYear()}{" "}
            {time.getHours()}:{time.getMinutes()}
          </p>
          <p>Comments: {page.comments_count}</p>
          {page.comments && <Comments comments={page.comments} />}
        </>
      )}
    </>
  );
};

export default NewsIdPage;
