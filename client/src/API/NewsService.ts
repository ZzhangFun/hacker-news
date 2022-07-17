import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from "../types/INews";
import { INewsId } from "../types/INewsId";

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.hnpwa.com/v0/" }),
  endpoints: (build) => ({
    fetchAllNews: build.query<INews[], number>({
      query: (page) => ({
        url: `newest/${page}.json`,
      }),
    }),
    fetchNewsPageWithComments: build.query<INewsId, any>({
      query: (id) => ({
        url: `item/${id}.json`,
      }),
    }),
  }),
});
