import { Dispatch } from "redux";
import { NewsAction, NewsActionTypes } from "../../types/news";
import axios from "axios";

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: "Чёт шляпа какая-то",
      });
    }
  };
};
