import { Link as RRDLink } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

type Props = LinkProps;

export const Link = ({ to, children, ...rest } : Props) => {
  return (
    <RRDLink
      to={to}
      className="text-sky-500 hover:text-sky-600 hover:underline"
      {...rest}
    >
      {children}
    </RRDLink>
  );
}