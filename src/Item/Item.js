import React from "react";
import "./item.scss";
import useImage from "use-image";
import { Spinner } from "../Spinner";
import { Link } from "react-router-dom";

export function Item({ title, dateCreated, picture, id }) {
  const [image, status] = useImage(picture);

  return (
    <li className="flex align-end item full-width relative">
      <Link to={`item/${id}`}>
        <>
          {status === "loaded" && image && image.src && (
            <>
              <img className="item-image" src={image.src} alt={title} />
              <header className="item-header flex align-space-between-center p-x-8 p-y-8">
                <h2>{title}</h2>
                <time>{dateCreated}</time>
              </header>
            </>
          )}
          {(status === "loading" || !title) && <Spinner />}
        </>
      </Link>
    </li>
  );
}
