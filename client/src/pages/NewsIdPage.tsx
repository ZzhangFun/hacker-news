import React, { FC } from "react";
import { newsAPI } from "../API/NewsService";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Loader from "../components/UI/Loader/Loader";
import Error from "../components/UI/Error/Error";
import Back from "../components/UI/Back/Back";
import { ReloadOutline } from "react-ionicons";

const NewsIdPage: FC = () => {
  const params = useParams();
  const {
    data: page,
    isLoading,
    isError,
  } = newsAPI.useFetchNewsPageWithCommentsQuery(params.id, {
    pollingInterval: 60000,
  });
  const time = page && new Date(page.time * 1000);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      {page && time && (
        <>
          <div className="newsIdPage">
            <h1>{page.title}</h1>
            <div>
              <div className="newsItem__author">
                Author: <h3>{page?.user}</h3>
              </div>
              <Back />
            </div>
            <div>
              <p>
                Url: <a href={page?.url}>{page?.url}</a>
              </p>
              <p>
                Date: {time.getDate()}.{`0${time.getMonth() + 1}`}.
                {time.getFullYear()} {time.getHours()}:{time.getMinutes()}
              </p>
            </div>
          </div>

          <h1 className="comments__tag">
            {page.comments_count !== 0
              ? `Comments: ${page.comments_count}`
              : "Comments not found"}
            <span
              onClick={() => console.log("Doesn`t work")}
              className="reload"
            >
              <ReloadOutline color={"#0affa1"} rotate />
            </span>
          </h1>

          {page.comments && <Comments comments={page.comments} />}
        </>
      )}
    </>
  );
};

export default NewsIdPage;
