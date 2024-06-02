'use client';

import { FC, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { Inputs } from './ReviewForm.utils';

interface RatingsProps {
  control: Control<Inputs>;
  name: keyof Inputs;
}

const ratingsInputs = [
  {
    'aria-label': '1 star: Bad',
    value: 1,
  },
  {
    'aria-label': '2 stars: Poor',
    value: 2,
  },
  {
    'aria-label': '3 stars: Average',
    value: 3,
  },
  {
    'aria-label': '4 stars: Great',
    value: 4,
  },
  {
    'aria-label': '5 stars: Excellent',
    value: 5,
  },
];

const Ratings: FC<RatingsProps> = ({ control, name }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });
  const [hoveredRating, setHoveredRating] = useState<number | string>(value);

  return (
    <div className="font-normal tracking-[0.5px] box-border">
      <div className="font-normal tracking-[0.5px] box-border absolute w-[216px]">
        {ratingsInputs.map((rating) => (
          <input
            key={rating.value}
            type="radio"
            aria-label={rating['aria-label']}
            tabIndex={-1}
            defaultValue={rating.value}
            className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[43px] z-[1]"
            onMouseEnter={() => setHoveredRating(rating.value)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => onChange(rating.value)}
          />
        ))}
      </div>
      <div className="font-normal tracking-[0.5px] box-border flex min-w-[90px] h-[40px] w-[216px]">
        <img
          alt=""
          src={`https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-${
            hoveredRating || value || 0
          }.svg`}
          className="font-normal tracking-[0.5px] box-border max-w-full w-[216px]"
        />
      </div>
    </div>
  );
};

export default Ratings;
