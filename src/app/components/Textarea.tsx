import { forwardRef } from 'react';
import clsx from 'clsx';
import Error from './Error';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...restProps }, ref) => {
    const merged = clsx(
      'text-[16px] h-[186px] resize-none w-full px-[16px] py-[8px] rounded-[4px] border border-solid',
      !!error ? 'border-error' : 'border-default',
      className
    );
    console.log(error);

    return (
      <div>
        <textarea ref={ref} className={merged} {...restProps} />
        {error && <Error>{error}</Error>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
