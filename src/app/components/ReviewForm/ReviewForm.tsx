'use client';

import { SubmitHandler } from 'react-hook-form';
import { Inputs } from './ReviewForm.utils';
import { FC, useState } from 'react';
import Form from '../Form/Form';

const ReviewForm: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          date: new Date(data.date).toISOString(),
        }),
      });

      if (data.rating >= 4) {
        window.location.assign(
          `https://www.trustpilot.com/evaluate/www.google.com?stars=${data.rating}`
        );
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="font-normal tracking-[0.5px] box-border bg-white border max-w-[510px] overflow-hidden mt-[16px] mb-0 mx-[697.5px] p-[24px] rounded-[8px] border-solid border-[rgb(229,229,221)]">
        <div className="font-normal tracking-[0.5px] box-border flex flex-col">
          <label className="text-[rgb(28,28,28)] text-[18px] font-bold tracking-[-0.198px] leading-[21.6px] box-border block mt-0 mb-[8px] mx-0">
            Thanks for your review!
          </label>
        </div>
      </div>
    );
  }

  return <Form onSubmit={onSubmit} />;
};

export default ReviewForm;
