type Props = {
  id: string;
  children: string;
};

export const Label = ({ id, children }: Props) => {
  return <label htmlFor={id}>{children}</label>;
};
