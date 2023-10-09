import { useViewPort } from "@hooks/useViewPort";

export const ViewPort = () => {
  const size = useViewPort();

  return (
    <div>
      <span>X: {size.x}</span> <span>Y: {size.y}</span>
    </div>
  );
};
