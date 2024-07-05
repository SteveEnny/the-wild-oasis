import { useEffect, useRef } from "react";

export function useCloseWindows(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);
      // using listenCapturing makes the even to be handleed in the capturing phase as the event move down the tree;
      // if ture is not used the modal will open and close immedatly because is handled in the bubbling phase which will detect that the "add cabin was called outside the "styled components""
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, ref, listenCapturing]
  );

  return ref;
}
