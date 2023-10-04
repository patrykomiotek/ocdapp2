import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  let counterValue = 0;

  useEffect(() => {
    // mount
    console.log("MOUNT");
    const id = setInterval(() => {
      // setCount(count + 1);
      setCount((value) => value + 1);
      // counterValue++;
    }, 1000);

    return () => {
      console.log("UNMOUNT");
      clearInterval(id);
    };
  }, []);

  const handleClick = () => {
    setCount(counterValue);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

// import { useEffect, useState } from "react";

// export const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       // setCount(count + 1);
//       setCount((value) => value + 1);
//     }, 1000);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   return (
//     <div>
//       <span>{count}</span>
//     </div>
//   );
// };
