import { useEffect, useState } from "react";

const getSize = () => ({ x: window.innerWidth, y: window.innerHeight });
// const getSize = () => 123;
// const getSize = () => {
//   return { x: window.innerWidth, y: window.innerHeight };
// };

export const useViewPort = () => {
  const [size, setSize] = useState(getSize());

  // useEffect
  // useState
  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // destructor, unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // version 1
  // return getSize();

  // version 2
  return size;
};
