import { MouseEventHandler, Ref, forwardRef } from "react";

type Props = {
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
};

export const MagicButton = forwardRef(
  ({ onMouseEnter }: Props, ref: Ref<HTMLButtonElement>) => {
    return (
      <button
        ref={ref}
        style={{ backgroundColor: "blue", color: "white" }}
        onMouseEnter={onMouseEnter}
      >
        Click me
      </button>
    );
  }
);

// forwardRef, memo
MagicButton.displayName = "forwardRef (MagicButton)";
