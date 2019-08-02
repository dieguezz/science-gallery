import React, { useRef, useEffect, useState } from "react";
import useImage from "use-image";
import "./itemPage.scss";
import { useTypeTextAnimation } from "../TypeTextAnimation/useTypeTextAnimation";
import { Spinner } from "../Spinner";
import { useItem } from "./useItem.hook";
export function ItemPage({ match }) {
  const id = match.params.id;
  const elRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const item = useItem(id);
  const animation = useTypeTextAnimation({ elRef: elRef.current, required: item.description });
  const [image, status] = useImage(item ? item.fullPicture : null);

  useEffect(() => {
    if (animation && status !== 'loading') {
      console.log("ANIMATION GO!");
        animation.go();
    }
  }, [animation, item, collapsed, status]);

  function toggleCollapse() {
    setCollapsed(val => {
      return !val;
    });
  }
  return (
    <div className="itemPage">
      {status !== "loading" && (
        <img className="item-image" src={image.src} alt={item.title} />
      )}
      {status === "loading" && <Spinner absolute />}
      <div className="item-description" onClick={toggleCollapse}>
        <p ref={elRef}>{collapsed ? "Tap to expand" : item.description}</p>
      </div>
    </div>
  );
}
