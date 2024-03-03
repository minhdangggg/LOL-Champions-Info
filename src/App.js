import "./app.scss";
import { useState } from "react";
import Home from "./Home";
import ChampionInfo from "./ChampionInfo";
import { Routes, Route } from "react-router-dom";
import Board from "./tic-tac-toe/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ChampionInfo />} />
      </Routes>
      <Board />
    </div>
  );
}

export default App;
