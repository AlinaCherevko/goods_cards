// import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CardPage from "../pages/CardPage/CardPage";
import css from "../src/App.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.siteHeader}>
        <NavLink className={css.headerNavigation} to="/">
          Shop
        </NavLink>
        <NavLink className={css.headerNavigation} to="/cards">
          Shopping Cards
        </NavLink>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<CardPage />} />
        </Routes>
      </main>
    </div>
  );
};
