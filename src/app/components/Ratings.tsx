'use client';

import { useState } from 'react';
import { useController } from 'react-hook-form';

// todo: iztract star input
export default function Ratings({ control, name }) {
  const {
    field: { value, onChange },
  } = useController({ control, name });
  const [hoveredRating, setHoveredRating] = useState<number>(value);

  return (
    <div className="font-normal tracking-[0.5px] box-border">
      <div className="font-normal tracking-[0.5px] box-border absolute w-[216px]">
        <input
          type="radio"
          name="star-selector"
          aria-label="1 star: Bad"
          data-star-selector-star-1="true"
          tabIndex={-1}
          defaultValue={1}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[42px] z-[1]"
          onMouseEnter={() => setHoveredRating(1)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => onChange(1)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="2 stars: Poor"
          data-star-selector-star-2="true"
          tabIndex={-1}
          defaultValue={2}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[44px] z-[1]"
          onMouseEnter={() => setHoveredRating(2)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => onChange(2)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="3 stars: Average"
          data-star-selector-star-3="true"
          tabIndex={-1}
          defaultValue={3}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[44px] z-[1]"
          onMouseEnter={() => setHoveredRating(3)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => onChange(3)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="4 stars: Great"
          data-star-selector-star-4="true"
          tabIndex={0}
          defaultValue={4}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[44px] z-[1]"
          onMouseEnter={() => setHoveredRating(4)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => onChange(4)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="5 stars: Excellent"
          data-star-selector-star-5="true"
          tabIndex={-1}
          defaultValue={5}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[42px] z-[1]"
          onMouseEnter={() => setHoveredRating(5)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => onChange(5)}
        />
      </div>
      <div className="font-normal tracking-[0.5px] box-border flex min-w-[90px] h-[40px] w-[216px]">
        <img
          alt=""
          src={`https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-${
            hoveredRating || value
          }.svg`}
          className="font-normal tracking-[0.5px] box-border max-w-full w-[216px]"
        />
      </div>
    </div>
  );
}
