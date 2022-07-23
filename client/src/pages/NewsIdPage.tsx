import React, { FC } from "react";
import { newsAPI } from "../API/NewsService";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Loader from "../components/UI/Loader/Loader";
import Error from "../components/UI/Error/Error";
import Back from "../components/UI/Back/Back";

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
              <h2
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Author: <h3>{page?.user}</h3>
              </h2>
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
          </h1>
          {page.comments && <Comments comments={page.comments} />}
        </>
      )}
    </>
  );
};

export default NewsIdPage;
