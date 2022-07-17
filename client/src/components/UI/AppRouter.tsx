import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../router/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element></route.element>}
        />
      ))}
      <Route path="*" element={<Navigate to="/news" />} />
    </Routes>
  );
};

export default AppRouter;
