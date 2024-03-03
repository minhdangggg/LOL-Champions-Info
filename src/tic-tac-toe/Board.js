import { useState } from "react";
import Cell from "./Cell";
import "./style.scss";
export default function Board() {
  const [listItem, setListItem] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(listItem) | listItem[index]) {
      return;
    }
    const nextCell = [...listItem];
    nextCell[index] = xIsNext ? "X" : "O";
    setListItem(nextCell);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="board">
      {listItem.map((item, index) => {
        return (
          <Cell
            key={index}
            value={item}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
function calculateWinner(listItem) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      listItem[a] &&
      listItem[a] === listItem[b] &&
      listItem[a] === listItem[c]
    ) {
      return listItem[a];
    }
  }
  return null;
}
