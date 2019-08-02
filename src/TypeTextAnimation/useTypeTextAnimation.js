import { useState, useEffect } from "react";
import TypeIt from "typeit";

export function useTypeTextAnimation({ elRef, required }) {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    if (!elRef || !required) return
      setAnimation(
        new TypeIt(elRef, {
          speed: 20,
          lifeLike: true,
        })
      );
  }, [elRef, required]);

  return animation;
}
