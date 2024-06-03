import { ReactNode, FC } from 'react';
import clsx from 'clsx';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}
const Link: FC<LinkProps> = ({ children, className, ...restProps }) => {
  const merged = clsx('text-[rgb(32,92,212)] text-[14px]', className);
  return (
    <a className={merged} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
