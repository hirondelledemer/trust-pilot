import { forwardRef } from 'react';
import Error from './Error';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

interface EditInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}
const EditInput = forwardRef<HTMLInputElement, EditInputProps>(
  ({ className, error, ...restProps }, ref) => {
    const merged = clsx(
      'text-[16px] border w-full px-[16px] py-[10px] rounded-[4px_0px_0px_4px] border-solid',
      !!error ? 'border-[rgb(208,30,8)]' : 'border-[rgb(105,106,106)]',
      className
    );

    const iconMerged = clsx(
      'flex justify-center items-center bg-[rgb(227,228,228)] min-w-[43px] border border-l-0 border-solid rounded-[0px_4px_4px_0px]',
      !!error
        ? 'border-[rgb(208,30,8)] fill-[rgb(208,30,8)]'
        : 'border-[rgb(105,106,106)] fill-[rgb(105,106,106)]'
    );
    return (
      <div>
        <div className="flex">
          <input ref={ref} type="text" className={merged} {...restProps} />
          <div className={iconMerged}>
            <svg
              viewBox="0 0 16 16"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 2.713 13.288 0l-1.567 1.567-9.564 9.56L0 15.996l4.934-2.223 9.145-9.14L16 2.714Zm-2.274.86.86-.86-1.298-1.3-.86.86 1.298 1.3ZM1.962 14.034l1.75-.776-.974-.975-.776 1.751Zm2.62-1.32-1.3-1.3 8.438-8.433L13.02 4.28 4.58 12.714Z"
              />
            </svg>
          </div>
        </div>

        {error && <Error>Your title must be at least 4 characters.</Error>}
      </div>
    );
  }
);

EditInput.displayName = 'EditInput';

export default EditInput;
