import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <h1>What's the weather like?</h1>
          <Search />
          <Footer />
        </div>
      </header>
    </div>
  );
}
export default App;
