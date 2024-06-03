import { ReactNode, FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const Button: FC<ButtonProps> = ({ children, ...restProps }) => (
  <button
    className="items-center cursor-pointer flex justify-center min-w-[48px] overflow-hidden text-center whitespace-nowrap select-none h-[48px] bg-[rgb(32,92,212)] text-white border px-[32px] py-0 rounded-full"
    {...restProps}
  >
    <span className="text-[16px] font-bold items-center flex">{children}</span>
  </button>
);

export default Button;
