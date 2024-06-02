'use client';

import { useForm } from 'react-hook-form';
import Ratings from './Ratings';
import { Inputs } from './ReviewForm.utils';
import { FC } from 'react';

interface FormProps {
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
    <div className="font-normal tracking-[0.5px] box-border bg-white border max-w-[510px] overflow-hidden mt-[16px] mb-0 mx-[697.5px] p-[24px] rounded-[8px] border-solid border-[rgb(229,229,221)]">
      <form
        autoComplete="off"
        noValidate
        className="font-normal tracking-[0.5px] box-border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="font-normal tracking-[0.5px] box-border flex flex-col">
          <label className="text-[rgb(28,28,28)] text-[18px] font-bold tracking-[-0.198px] leading-[21.6px] box-border block mt-0 mb-[8px] mx-0">
            Rate your recent experience
          </label>
          <div className="font-normal tracking-[0.5px] box-border">
            <Ratings control={control} name="rating" />
          </div>
        </div>
        {watchRatingCheck && (
          <div className="font-normal tracking-[0.5px] box-border flex flex-col mt-[16px] mb-0 mx-0">
            <label
              htmlFor="review-text"
              className="text-[rgb(28,28,28)] text-[18px] font-bold tracking-[-0.198px] leading-[21.6px] box-border block mt-0 mb-[8px] mx-0"
            >
              Tell us more about your experience
            </label>
            <a
              href="https://legal.trustpilot.com/for-reviewers/guidelines-for-reviewers"
              target="_blank"
              className="text-[rgb(32,92,212)] text-[14px] font-normal tracking-[0.154px] leading-[19.6px] box-border mt-[4px] mb-[16px] mx-0"
            >
              Read our Guidelines for Reviewers
            </a>
            <div className="font-normal tracking-[0.5px] box-border relative w-[460px]">
              <div className="font-normal tracking-[0.5px] box-border absolute inset-0">
                <div className="font-normal tracking-[0.5px] box-border text-[rgba(0,0,0,0)] h-[18px] overflow-hidden break-words absolute whitespace-pre-wrap w-[34px] text-[16px] leading-[24px] border px-[16px] py-[8px] border-solid border-[rgba(0,0,0,0)]" />
              </div>
              <textarea
                placeholder="What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive!"
                rows={7}
                aria-invalid="false"
                aria-describedby="review-text-helper-text"
                data-review-text-input="true"
                className="font-normal tracking-[0.5px] box-border relative border text-[rgb(28,28,28)] block text-[16px] h-[186px] leading-[24px] resize-none w-[460px] px-[16px] py-[8px] rounded-[4px] border-solid border-[rgb(105,106,106)]"
                {...register('content', { required: true })}
              />
              {errors.content && (
                <span className="text-[rgb(208,30,8)] text-[14px] font-normal tracking-[0.154px] leading-[19.6px] box-border inline-block bg-white mt-[8px] mb-0 mx-0">
                  Your review must be at least 10 characters.
                </span>
              )}
            </div>
            <a
              href="https://support.trustpilot.com/hc/articles/223402108"
              target="_blank"
              className="text-[rgb(32,92,212)] text-[14px] font-normal tracking-[0.154px] leading-[19.6px] box-border mt-[16px] mb-0 mx-0"
            >
              How to write a useful review
            </a>
          </div>
        )}
        {watchRatingCheck && (
          <div className="font-normal tracking-[0.5px] box-border flex flex-col mt-[16px] mb-0 mx-0">
            <label
              htmlFor="review-title"
              className="text-[rgb(28,28,28)] text-[18px] font-bold tracking-[-0.198px] leading-[21.6px] box-border block mt-0 mb-[8px] mx-0"
            >
              Give your review a title
            </label>
            <div className="font-normal tracking-[0.5px] box-border relative w-[460px] h-[48px]">
              <div className="font-normal tracking-[0.5px] box-border absolute inset-0">
                <div className="font-normal tracking-[0.5px] box-border text-[rgba(0,0,0,0)] h-[24px] overflow-hidden break-words absolute whitespace-pre-wrap w-[34px] text-[16px] leading-[24px] border pt-[12px] pb-[10px] px-[16px] border-solid border-[rgba(0,0,0,0)]" />
              </div>
              <div className="font-normal tracking-[0.5px] box-border relative flex w-[460px] rounded-[4px]">
                <input
                  placeholder="What's important for people to know?"
                  type="text"
                  aria-invalid="false"
                  aria-describedby="review-title-helper-text"
                  data-review-title-input="true"
                  className="text-[16px] font-normal tracking-[0.5px] leading-[22.4px] border box-border text-[rgb(28,28,28)] block w-[416.766px] h-[48px] px-[16px] py-[10px] rounded-[4px_0px_0px_4px] border-solid border-[rgb(105,106,106)]"
                  {...register('title', { required: true })}
                />
                <div
                  role="presentation"
                  className="font-normal tracking-[0.5px] box-border items-center bg-[rgb(227,228,228)] text-[rgb(105,106,106)] flex justify-center w-[43.2344px] rounded-tr-[4px] rounded-br-[4px] border-l-0 border-l-[rgb(105,106,106)] border-none"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    className="font-normal tracking-[0.5px] align-middle box-border fill-[rgb(105,106,106)]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 2.713 13.288 0l-1.567 1.567-9.564 9.56L0 15.996l4.934-2.223 9.145-9.14L16 2.714Zm-2.274.86.86-.86-1.298-1.3-.86.86 1.298 1.3ZM1.962 14.034l1.75-.776-.974-.975-.776 1.751Zm2.62-1.32-1.3-1.3 8.438-8.433L13.02 4.28 4.58 12.714Z"
                      className="box-border font-normal tracking-[0.5px]"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {errors.title && (
              <span className="text-[rgb(208,30,8)] text-[14px] font-normal tracking-[0.154px] leading-[19.6px] box-border inline-block bg-white mt-[8px] mb-0 mx-0">
                Your title must be at least 4 characters.
              </span>
            )}
          </div>
        )}
        {watchRatingCheck && (
          <div className="font-normal tracking-[0.5px] box-border flex flex-col mt-[16px] mb-0 mx-0">
            <div className="font-normal tracking-[0.5px] box-border block relative">
              <div className="font-normal tracking-[0.5px] box-border flex mt-0 mb-[8px] mx-0">
                <label
                  htmlFor="review-date-of-experience"
                  className="text-[rgb(28,28,28)] text-[18px] font-bold tracking-[-0.198px] leading-[21.6px] box-border items-center flex"
                >
                  Date of experience
                </label>
                <span className="font-normal tracking-[0.5px] box-border">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label="Date of Experience tooltip"
                    className="font-normal tracking-[0.5px] box-border"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="inherit"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      className="font-normal tracking-[0.5px] align-middle box-border fill-[rgb(105,106,106)] ml-[4px] mr-0 my-0"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"
                        className="box-border font-normal tracking-[0.5px]"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 7h-.75V6H8.5v5.502h.75v1h-2.5v-1h.75V7ZM6.75 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                        className="box-border font-normal tracking-[0.5px]"
                      />
                    </svg>
                  </div>
                </span>
              </div>
              <div className="font-normal tracking-[0.5px] box-border">
                <input
                  type="date"
                  className="text-[14px] font-normal tracking-[0.5px] leading-[19.6px] border box-border text-[rgb(28,28,28)] flex w-[460px] appearance-none h-[44px] relative px-[16px] py-[10px] rounded-[4px] border-solid border-[rgb(105,106,106)]"
                  {...register('date', { required: true })}
                />
                {errors.date && (
                  <span className="text-[rgb(208,30,8)] text-[14px] font-normal tracking-[0.154px] leading-[19.6px] box-border inline-block bg-white mt-[8px] mb-0 mx-0">
                    Please confirm when you had this experience. If you don’t
                    know the exact date, you can estimate.
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        {watchRatingCheck && (
          <div className="font-normal tracking-[0.5px] box-border flex flex-col mt-[16px] mb-0 mx-0">
            <div className="font-normal tracking-[0.5px] box-border block text-[16px] text-left mt-[16px] mb-0 mx-0">
              <p className="text-[rgb(28,28,28)] text-[14px] font-normal tracking-[0.154px] leading-[19.6px] box-border m-0">
                By submitting this review, you confirm it’s
                <a
                  href="https://support.trustpilot.com/hc/articles/205675248"
                  target="_blank"
                  className="text-[rgb(32,92,212)] font-normal tracking-[0.5px] box-border mx-1"
                >
                  based on a genuine experience
                </a>
                and you haven’t received an incentive to write it.
              </p>
            </div>
          </div>
        )}
        {watchRatingCheck && (
          <div className="font-normal tracking-[0.5px] box-border flex flex-col mt-[16px] mb-0 mx-0">
            <button
              name="submit-review"
              type="submit"
              data-submit-review-button="true"
              className="items-center cursor-pointer flex justify-center min-w-[48px] overflow-hidden text-center whitespace-nowrap select-none box-border h-[48px] bg-[rgb(32,92,212)] text-white font-normal tracking-[0.5px] border px-[32px] py-0 rounded-full border-solid border-[rgba(0,0,0,0)]"
            >
              <span className="text-[16px] font-bold tracking-[-0.176px] leading-[19.2px] box-border items-center flex">
                Submit review
              </span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
