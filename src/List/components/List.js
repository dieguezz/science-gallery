import React from "react";
import { Item } from "../../Item";
import { Spinner } from "../../Spinner";
import "./list.scss";

export function List({ list }) {


  if (list.length) {
    return (
      <div className="list">
        <ol className="flex align-center-center flex-grow flex-wrap">
          {list.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </ol>
      </div>
    );
  }
  return (
    <div className="list">
      <Spinner absolute />
    </div>
  );
}
