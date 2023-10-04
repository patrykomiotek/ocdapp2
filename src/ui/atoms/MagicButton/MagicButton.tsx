import { MouseEventHandler, useEffect, useRef } from "react";

export const MagicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // useEffect
  // useRef
  // useState

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
      buttonRef.current.style.color = "white";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    const ref = buttonRef.current;
    if (ref) {
      ref.style.backgroundColor = "green";
      ref.style.color = "black";
    }
  };

  return (
    <button
      ref={buttonRef}
      style={{ backgroundColor: "blue", color: "white" }}
      onMouseEnter={handleMouseEnter}
    >
      Click me
    </button>
  );
};
