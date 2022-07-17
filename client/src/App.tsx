import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const App = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
