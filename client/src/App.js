import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navbars/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Add from "./pages/Add/Add";
import View from "./pages/viewperson/View";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Login />
            </>
          }
        />
        <Route
          path="/main"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
