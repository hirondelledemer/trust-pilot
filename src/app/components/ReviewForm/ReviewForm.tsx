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
      <div className="flex justify-center">
        <div className="bg-white border w-screen md:w-[510px] overflow-hidden mt-[16px] p-[24px] rounded-[8px]">
          <label className="text-[rgb(28,28,28)] text-[18px] font-bold mb-[8px]">
            Thanks for your review!
          </label>
        </div>
      </div>
    );
  }

  return <Form onSubmit={onSubmit} />;
};

export default ReviewForm;
