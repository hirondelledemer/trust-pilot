import React, { ReactNode, useState } from 'react';

const Tooltip = ({
  content,
  children,
}: {
  content: ReactNode;
  children: ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <p className="absolute w-[360px] p-3 -translate-x-1/2 bg-white rounded-lg shadow-lg -top-[110px] left-1/2 shadow-gray-300 shadow-[0px_5px_10px_7px] tex-wrap text-[14px]">
          <span>{content}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 absolute rotate-45 -translate-x-1/2 left-1/2 bottom-0.5 -mb-3 transform text-white fill-current"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
          </svg>
        </p>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
export default Tooltip;
