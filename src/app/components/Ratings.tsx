'use client';

import { useState } from 'react';

// todo: iztract star input
export default function Ratings() {
  const [selectedRating, setSelectedRating] = useState<number>(0);
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
          onMouseEnter={() => setSelectedRating(1)}
          onMouseLeave={() => setSelectedRating(0)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="2 stars: Poor"
          data-star-selector-star-2="true"
          tabIndex={-1}
          defaultValue={2}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[44px] z-[1]"
          onMouseEnter={() => setSelectedRating(2)}
          onMouseLeave={() => setSelectedRating(0)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="3 stars: Average"
          data-star-selector-star-3="true"
          tabIndex={-1}
          defaultValue={3}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[44px] z-[1]"
          onMouseEnter={() => setSelectedRating(3)}
          onMouseLeave={() => setSelectedRating(0)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="4 stars: Great"
          data-star-selector-star-4="true"
          tabIndex={0}
          defaultValue={4}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[44px] z-[1]"
          onMouseEnter={() => setSelectedRating(4)}
          onMouseLeave={() => setSelectedRating(0)}
        />
        <input
          type="radio"
          name="star-selector"
          aria-label="5 stars: Excellent"
          data-star-selector-star-5="true"
          tabIndex={-1}
          defaultValue={5}
          className="font-normal tracking-[0.5px] box-border appearance-none cursor-pointer inline-block h-[40px] relative w-[42px] z-[1]"
          onMouseEnter={() => setSelectedRating(5)}
          onMouseLeave={() => setSelectedRating(0)}
        />
      </div>
      <div className="font-normal tracking-[0.5px] box-border flex min-w-[90px] h-[40px] w-[216px]">
        <img
          alt=""
          src={`https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-${selectedRating}.svg`}
          className="font-normal tracking-[0.5px] box-border max-w-full w-[216px]"
        />
      </div>
    </div>
  );
}
