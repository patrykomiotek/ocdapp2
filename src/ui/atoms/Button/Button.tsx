// import { CSSProperties } from "react";

import { ComponentProps } from "react";

// type SomeProperties = Pick<CSSProperties, "color" | "backgroundColor">;

const colors = {
  emerald: "#2ecc71",
  amethyst: "#9b59b6",
  alizarin: "#e74c3c",
};

// @ts-expect-error
enum COLORS {
  EMERALD = "#2ecc71",
  AMETHYST = "#9b59b6",
}

type Color = keyof typeof colors;
// type ColorType = Record<Color, string>

type Props = {
  label: string;
  color?: Color;
  bgColor?: Color;
};

export const Button = ({
  label,
  color = "alizarin",
  bgColor = "amethyst",
  ...rest
}: ComponentProps<"button"> & Props) => {
  const buttonStyles = {
    color: colors[color], // color
    backgroundColor: colors[bgColor],
  };

  return (
    <button style={buttonStyles} {...rest}>
      {label}
    </button>
  );
};

{
  /* <Button color="amethyst" /> */
}

{
  /* <Button color={COLORS.AMETHYST} /> */
}
