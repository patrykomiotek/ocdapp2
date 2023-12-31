type Props = {
  children: React.ReactNode;
  // children: string | string[]; // React.ReactNode
};

// export const Text = (props: Props) => {
//   return <p>{props.children}</p>;
// };

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};
