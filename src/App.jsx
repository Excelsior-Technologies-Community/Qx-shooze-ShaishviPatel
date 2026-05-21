import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      {/* <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main> */}

      <Footer />
    </>
  );
}

export default App;
