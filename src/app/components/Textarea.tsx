import { forwardRef } from 'react';
import Error from './Error';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError;
}
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...restProps }, ref) => {
    const merged = clsx(
      'text-[16px] h-[186px] resize-none w-full px-[16px] py-[8px] rounded-[4px] border border-solid',
      !!error ? 'border-[rgb(208,30,8)]' : 'border-[rgb(105,106,106)]',
      className
    );
    console.log(error);

    return (
      <div>
        <textarea ref={ref} className={merged} {...restProps} />
        {error && <Error>Your review must be at least 10 characters.</Error>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
