import { forwardRef } from 'react';
import clsx from 'clsx';
import Error from './Error';

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, error, ...restProps }, ref) => {
    const merged = clsx(
      'text-[16px] border w-full px-[16px] py-[10px] rounded-[4px_0px_0px_4px] border-solid',
      !!error
        ? 'border-[rgb(208,30,8)] text-[rgb(208,30,8)]'
        : 'border-[rgb(105,106,106)]',
      className
    );

    return (
      <div>
        <input ref={ref} type="date" className={merged} {...restProps} />

        {error && <Error>{error}</Error>}
      </div>
    );
  }
);

DateInput.displayName = 'DateInput';

export default DateInput;
