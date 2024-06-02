import { FC, ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}
const Error: FC<ErrorProps> = ({ children }) => (
  <span className="text-[rgb(208,30,8)] text-[14px] font-normal tracking-[0.154px] leading-[19.6px] box-border inline-block bg-white mt-[8px] mb-0 mx-0">
    {children}
  </span>
);

export default Error;
