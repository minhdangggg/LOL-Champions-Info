import { useState } from "react";
import "./style.scss";
export default function Cell(props) {
  const { index, value, handleClick } = props;
  const handleCl = () => {
    handleClick(index);
  };
  return (
    <div className="cell" onClick={handleCl}>
      {value}
    </div>
  );
}
