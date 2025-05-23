"use client";

import React from "react";

interface TickerBannerProps {
  news: string;
  className?: string;
  animationDuration?: string;
}

const TickerBanner: React.FC<TickerBannerProps> = ({
  news,
  className = "bg-blue-500",
  animationDuration = "15",
}) => {
  return (
    <div
      className={`relative flex w-full overflow-hidden py-2 md:py-3 text-xs md:text-sm font-medium text-white ${className}`}
    >
      <ul
        className="flex ticker-animation space-x-4 md:space-x-10 list-none !m-0"
        style={{ animation: `ticker ${animationDuration}s linear infinite` }}
      >
        <li className="whitespace-nowrap px-10">{news}</li>
        <li className="whitespace-nowrap px-10">{news}</li>
      </ul>

      <ul
        className="flex ticker-animation space-x-4 md:space-x-10 list-none !m-0"
        style={{ animationDuration }}
      >
        <li className="whitespace-nowrap px-10">{news}</li>
        <li className="whitespace-nowrap px-10">{news}</li>
      </ul>

      <style>
        {`
				@keyframes ticker {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-100%);
					}
				}
				.ticker-animation {
            will-change: transform;
				}
				`}
      </style>
    </div>
  );
};

export default TickerBanner;
