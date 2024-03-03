import "./Home.scss";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ cl, setCl, handleCl }) {
  const [champions, setChampions] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChampionClick = (id) => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    async function getDataChampion() {
      try {
        const response = await axios.get(
          `https://ddragon.leagueoflegends.com/cdn/12.21.1/data/vn_VN/champion.json`
        );
        const data = response.data;
        setChampions(Object.values(data.data));
      } catch (error) {
        console.error("Error fetching champions:", error);
      }
    }
    getDataChampion();
  }, []);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredChampions =
    champions &&
    champions.filter((champion) => {
      return champion.name.toLowerCase().includes(searchValue.toLowerCase());
    });

  return (
    <div className="all-home">
      <div className="header-home">
        <div className="title-home">Liên Minh Huyền Thoại</div>
      </div>

      <div className="search-home">
        <input
          className="input-home"
          type="text"
          placeholder="Tìm theo tên tướng"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>

      <div className="cham-box-home">
        {champions ? (
          filteredChampions.map((champion) => (
            <div
              className="champion-home"
              key={champion.id}
              onClick={() => handleChampionClick(champion.id)}
            >
              <img
                className="cham-img-home"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.name}
              />
              <div className="mark"></div>
              <div className="cham-info">
                <div className="cham-name"> {champion.id} </div>
                <div className="cham-role">
                  <div>
                    {champion.tags.slice(0, 2).map((tag, index) => (
                      <div key={index} className={`cham-role${index + 1}`}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}

export default Home;
