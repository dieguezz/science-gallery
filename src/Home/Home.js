import React, { useState } from "react";
import { useList } from "../List/hooks/useList.hook";
import { List } from "../List/components/List";
import { Pagination } from "../Pagination/Pagination";
import SearchIcon from "../search.svg";
import config from "../Core/config/particles.json";
import Particles from "react-particles-js";

export function Home() {
  const [page, setPage] = useState(1);
  const [searchStr, setSearchStr] = useState("");

  const list = useList({ page, searchStr });
  function onChangeSearch(e) {
    e.preventDefault();
    setSearchStr(e.target.value);
  }

  return (
    <div className="App relative">
      <Particles
        params={{ ...config }}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.5
        }}
      />
      <div className="form-control">
        <img className="search-button" src={SearchIcon} alt="search" />
        <input type="text" value={searchStr} onChange={onChangeSearch} />
      </div>
      <List page={page} list={list.items} />
      <Pagination page={page} totalPages={list.totalPages} setPage={setPage} />
    </div>
  );
}
