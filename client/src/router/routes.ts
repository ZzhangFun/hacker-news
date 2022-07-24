import News from "../pages/News";
import NewsIdPage from "../pages/NewsIdPage";

export const routes = [
  { path: "/news", element: News },
  { path: "/news/:id", element: NewsIdPage },
];
