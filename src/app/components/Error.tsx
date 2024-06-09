import { FC, ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}
const Error: FC<ErrorProps> = ({ children }) => (
  <span className="text-error text-[14px] font-normal box-border inline-block bg-white mt-[8px] mb-0 mx-0">
    {children}
  </span>
);

export default Error;
