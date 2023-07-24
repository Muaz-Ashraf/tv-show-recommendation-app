import React from "react";
import "./App.css";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<SearchForm />} path="/" />
        <Route element={<Details />} path={"/details"} />
      </Routes>
    </>
  );
};

export default App;
