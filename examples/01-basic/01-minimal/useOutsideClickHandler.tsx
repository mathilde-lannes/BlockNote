import { RefObject, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideClickHandler(
  ref: RefObject<HTMLElement>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
