'use client';

import { useForm } from 'react-hook-form';
import Ratings from '../Ratings/Ratings';
import { Inputs } from '../ReviewForm/ReviewForm.utils';
import { FC } from 'react';
import Button from '../Button';
import Link from '../Link';
import FormSection from './FormSection';
import Tooltip from '../Tooltip';
import Textarea from '../Textarea';
import EditInput from '../EditInput';
import DateInput from '../DateInput';

export interface FormProps {
  onSubmit(data: Inputs): void;
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const watchRatingCheck = watch('rating');

  return (
    <div className="flex justify-center">
      <div className="bg-white border w-screen md:w-[510px] overflow-hidden mt-[16px] p-[16px] md:p-[24px] rounded-[8px] mx-2">
        <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-[18px] font-bold mb-[8px]">
              Rate your recent experience
            </label>
            <div>
              <Ratings control={control} name="rating" />
            </div>
          </div>
          {watchRatingCheck && (
            <FormSection>
              <label
                htmlFor="review-text"
                className="text-[18px] font-bold mb-[8px]"
              >
                Tell us more about your experience
              </label>
              <Link
                href="https://legal.trustpilot.com/for-reviewers/guidelines-for-reviewers"
                target="_blank"
                className="mt-[4px] mb-[16px]"
              >
                Read our Guidelines for Reviewers
              </Link>
              <Textarea
                placeholder="What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive!"
                rows={7}
                aria-label="content"
                error={
                  errors.content &&
                  'Your review must be at least 10 characters.'
                }
                {...register('content', { required: true, minLength: 10 })}
              />
              <Link
                href="https://support.trustpilot.com/hc/articles/223402108"
                target="_blank"
                className="mt-[16px]"
              >
                How to write a useful review
              </Link>
            </FormSection>
          )}
          {watchRatingCheck && (
            <FormSection>
              <label
                htmlFor="review-title"
                className="text-[18px] font-bold mb-[8px]"
              >
                Give your review a title
              </label>
              <EditInput
                placeholder="What's important for people to know?"
                error={
                  errors.title && 'Your title must be at least 4 characters.'
                }
                {...register('title', { required: true, minLength: 4 })}
              />
            </FormSection>
          )}
          {watchRatingCheck && (
            <FormSection>
              <div className="block relative">
                <div className="flex mb-[8px] items-center">
                  <label
                    htmlFor="review-date-of-experience"
                    className="text-[18px] font-bold items-center flex"
                  >
                    Date of experience
                  </label>
                  <div>
                    <Tooltip content="Your review must be about a past experience that took place in the last 12 months. Displaying a date helps others know this review is genuine.">
                      <svg
                        viewBox="0 0 16 16"
                        fill="inherit"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        className="align-middle fill-default ml-[4px]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5 7h-.75V6H8.5v5.502h.75v1h-2.5v-1h.75V7ZM6.75 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                </div>
                <DateInput
                  placeholder="mm/dd/yyyy"
                  {...register('date', { required: true })}
                  error={
                    errors.date &&
                    'Please confirm when you had this experience. If you don’t know the exact date, you can estimate.'
                  }
                />
              </div>
            </FormSection>
          )}
          {watchRatingCheck && (
            <FormSection>
              <div className="block text-[16px] text-left mt-[16px]">
                <p className="text-[14px]">
                  By submitting this review, you confirm it’s
                  <Link
                    href="https://support.trustpilot.com/hc/articles/205675248"
                    target="_blank"
                    className="mx-1"
                  >
                    based on a genuine experience
                  </Link>
                  and you haven’t received an incentive to write it.
                </p>
              </div>
            </FormSection>
          )}
          {watchRatingCheck && (
            <FormSection>
              <Button name="submit-review" type="submit">
                Submit review
              </Button>
            </FormSection>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
